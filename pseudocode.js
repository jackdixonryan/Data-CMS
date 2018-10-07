const restaurant = {
  tables: [
    // Example: 
    {
      tableId: 1,
      seatingCap: 4,
      seatingMin: 2,
      occupied: true,
      durationOfOccupation: 34.1, // minutes
      expectedVacation: 4 // This is a potential problem 
    }
  ],
  capacity: .65, // Current capacity of the restaurant
  reservationReq: function(timestamp) {
    // Calculate the restaurant capacity at the timestamp and figure out if a table will be available.
  },
}