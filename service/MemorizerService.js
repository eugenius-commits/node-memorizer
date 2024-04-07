class MemorizerService {
    constructor() {
      this.memorizedPlaces = [];
    }
  
    checkIn({ location, notes, picture }) {
      if (!location || !notes) {
        return { error: 'Location and notes are required.' };
      }
  
      // Save the data
      const newCheckin = {
        location,
        notes,
        picture,
        timestamp: new Date(),
      };
  
      this.memorizedPlaces.push(newCheckin);
  
      // Delete pictures older than a day
      this.memorizedPlaces = this.memorizedPlaces.filter(
        (item) => new Date() - new Date(item.timestamp) <= 24 * 60 * 60 * 1000
      );
  
      return { message: 'Check-in successful!' };
    }
  
    getMemorizedPlaces() {
      return this.memorizedPlaces;
    }
  }
  
  export default MemorizerService;  