## Memorized Places Manager

This Node.js application provides a service for managing memorized places. Users can check in to locations, add notes, and attach pictures. The service also ensures that pictures older than a day are automatically deleted.

### Usage

1. **Installation**

   Clone the repository:

   ```bash
   git clone https://github.com/eugenius-commits/node-memorizer.git
   ```

   Install dependencies:

   ```bash
   npm install
   ```

2. **Usage in Code**

   Import `MemorizerService` in your Node.js application:

   ```javascript
   import MemorizerService from './MemorizerService';
   ```

   Initialize the service:

   ```javascript
   const memorizerService = new MemorizerService();
   ```

   Use the service methods:

   ```javascript
   // Check in to a location
   const result = memorizerService.checkIn({
     location: 'New York City',
     notes: 'Visited Times Square.',
     picture: 'times_square.jpg',
   });
   ```

   ```javascript
   // Retrieve memorized places
   const memorizedPlaces = memorizerService.getMemorizedPlaces();
   ```

3. **Service Methods**

   - `checkIn({ location, notes, picture })`: Checks in to a location with the provided details. Returns a success message if the check-in is successful, or an error message if location and notes are not provided.

   - `getMemorizedPlaces()`: Retrieves a list of memorized places.

### Note

Ensure that the `MemorizerService` class is properly imported and utilized in your Node.js application. Make sure to handle errors appropriately and manage the storage of pictures according to your requirements.