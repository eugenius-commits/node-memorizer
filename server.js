const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

let memorizedPlaces = [];

app.post('/checkin', (req, res) => {
  const { location, notes, picture } = req.body;

  if (!location || !notes) {
    return res.status(400).json({ error: 'Location and notes are required.' });
  }

  // Save the data
  const newCheckin = {
    location,
    notes,
    picture,
    timestamp: new Date(),
  };

  memorizedPlaces.push(newCheckin);

  // Delete pictures older than a day
  memorizedPlaces = memorizedPlaces.filter(
    (item) => new Date() - new Date(item.timestamp) <= 24 * 60 * 60 * 1000
  );

  res.status(200).json({ message: 'Check-in successful!' });
});

app.get('/memorized-places', (req, res) => {
  res.status(200).json(memorizedPlaces);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
