export const bookedTimeSlots = [
    {
      date: new Date(new Date().getFullYear(), 6, 5), // July 5
      isFullDay: true, // Full day for my birthday
    },
    {
      date: new Date(new Date().getFullYear(), 4, 2), // MAY 2
      isFullDay: true, // Full day
    },
    {
      date: new Date(new Date().getFullYear(), 4, 3), // May 3
      isFullDay: true, // Full day
    },
    {
      date: new Date(new Date().getFullYear(), 4, 4), // May 4
      isFullDay: true, // Full day
    },
    {
      date: new Date(new Date().getFullYear(), 4, 15), // May 15
      isFullDay: true, // Full day
    },
    {
      date: new Date(new Date().getFullYear(), 4, 16), // May 16
      isFullDay: true, // Full day
    },
    {
      date: new Date(new Date().getFullYear(), 5, 4), // June 4
      isFullDay: true, // Full day
    },
    {
      date: new Date(new Date().getFullYear(), 5, 5), // June 5
      isFullDay: true, // Full day
    },
    {
      date: new Date(new Date().getFullYear(), 5, 6), // June 6
      isFullDay: true, // Full day
    },
    {
      date: new Date(new Date().getFullYear(), 4, 10), // May 10
      isFullDay: false, // Not full day, specific time slots are booked
      time: [
        new Date(new Date().getFullYear(), 4, 10, 11, 0), // Booked: 11 AM
      ],
    },
  ];