import MemorizerService from './service/MemorizerService';

describe('MemorizerService', () => {
  let memorizerService;

  beforeEach(() => {
    memorizerService = new MemorizerService();
  });

  test('checkIn should add a new check-in', () => {
    const checkinData = {
      location: 'Test Location',
      notes: 'Test Notes',
      picture: 'Test Picture',
    };

    const result = memorizerService.checkIn(checkinData);

    expect(result.message).toBe('Check-in successful!');
    expect(memorizerService.getMemorizedPlaces()).toHaveLength(1);
  });

  test('checkIn should return an error if location or notes are missing', () => {
    const checkinData = {
      location: 'Test Location',
      notes: '', // Missing notes
      picture: 'Test Picture',
    };

    const result = memorizerService.checkIn(checkinData);

    expect(result.error).toBe('Location and notes are required.');
    expect(memorizerService.getMemorizedPlaces()).toHaveLength(0);
  });

  test('getMemorizedPlaces should return the memorized places', () => {
    const memorizedPlaces = memorizerService.getMemorizedPlaces();

    expect(memorizedPlaces).toEqual([]);
  });
});
