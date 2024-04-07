import express from 'express';
import MemorizerService from './service/MemorizerService';

const router = express.Router();
const memorizerService = new MemorizerService();

router.post('/checkin', (req, res) => {
  const { location, notes, picture } = req.body;
  const result = memorizerService.checkIn({ location, notes, picture });
  
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  res.status(200).json({ message: result.message });
});

router.get('/memorized-places', (req, res) => {
  const memorizedPlaces = memorizerService.getMemorizedPlaces();
  res.status(200).json(memorizedPlaces);
});

export default router;
