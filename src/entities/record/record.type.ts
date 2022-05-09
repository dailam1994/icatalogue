/* Record Types and Schema Validations */
export const Items = {
   type: "object",
   properties: {
      recordID: { type: "string" },
      date: { type: "string" },
      start: { type: "string" },
      end: { type: "string" },
      firstService: { type: "string" || null },
      secondService: { type: "string" || null },
      thirdService: { type: "string" || null },
      fourthService: { type: "string" || null },
      fifthService: { type: "string" || null },
      recordListRecordListID: { type: "string" || null },
   },
}

export const AllItems = {
   type: "object",
   properties: {
      recordRecordID: { type: "string" || null },
      recordListID: { type: "string" },
      userUserID: { type: "string" },
      record: {
         type: "object",
         properties: {
            recordID: { type: "string" },
            date: { type: "string" },
            start: { type: "string" },
            end: { type: "string" },
            firstService: { type: "string" || null },
            secondService: { type: "string" || null },
            thirdService: { type: "string" || null },
            fourthService: { type: "string" || null },
            fifthService: { type: "string" || null },
            recordListRecordListID: { type: "string" || null },
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

export const modifyItem = {
   type: "object",
   required: ["date", "start", "end", "firstService", "secondService", "thirdService", "fourthService", "fifthService"],
   properties: {
      date: { type: "string", pattern: "[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]" },
      start: { type: "string", pattern: "[0-1]?[0-9]:?[0-5][0-9](A|P)M$" },
      end: { type: "string", pattern: "[0-1]?[0-9]:?[0-5][0-9](A|P)M$" },
      firstService: { type: "string" || null },
      secondService: { type: "string" || null },
      thirdService: { type: "string" || null },
      fourthService: { type: "string" || null },
      fifthService: { type: "string" || null },
   },
}

export const deleteItem = {
   type: "object",
   properties: {
      id: { type: "string" },
   },
}
