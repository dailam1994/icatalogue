export const Items = {
   type: "object",
   properties: {
      bookingBookingID: { type: "string" },
      bookingListID: { type: "string" },
      userUserID: { type: "string" },
      booking: {
         type: "object",
         properties: {
            bookingID: { type: "string" },
            date: { type: "string" },
            startTime: { type: "string" },
            endTime: { type: "string" },
            firstService: { type: "string" },
            secondService: { type: "string" },
            thirdService: { type: "string" },
            fourthService: { type: "string" },
            fifthService: { type: "string" },
         },
      },
   },
}

export const AdminItems = {
   type: "object",
   properties: {
      bookingBookingID: { type: "string" },
      bookingListID: { type: "string" },
      userUserID: { type: "string" },
      booking: {
         type: "object",
         properties: {
            bookingID: { type: "string" },
            date: { type: "string" },
            startTime: { type: "string" },
            endTime: { type: "string" },
            firstService: { type: "string" },
            secondService: { type: "string" },
            thirdService: { type: "string" },
            fourthService: { type: "string" },
            fifthService: { type: "string" },
         },
      },
      user: {
         type: "object",
         properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
         },
      },
   },
}
