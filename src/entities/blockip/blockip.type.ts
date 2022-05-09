/* Block IP Types and Schema Validations */
export const Items = {
   type: "object",
   properties: {
      blockipID: { type: "string" },
      ip: { type: "string" },
   },
}

export const modifyItem = {
   type: "object",
   required: ["ip"],
   properties: {
      ip: {
         type: "string",
         pattern:
            "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
      },
   },
}

export const deleteItem = {
   type: "object",
   properties: {
      ip: { type: "string" },
   },
}
