/* Item Types and Schema Validations */
export const Items = {
   type: "object",
   properties: {
      itemID: { type: "string" },
      title: { type: "string" },
      description: { type: "string" },
      quantity: { type: "number" },
      price: { type: "number" },
      url: { type: "string" },
      date: { type: "string" },
   },
}

export const modifyItem = {
   type: "object",
   required: ["title", "description", "quantity", "price", "url"],
   properties: {
      title: { type: "string" },
      description: { type: "string" },
      quantity: { type: "number" },
      price: { type: "number" },
      url: { type: "string" },
      date: { type: "string" },
   },
}

export const removeItem = {
   type: "object",
   properties: {
      id: { type: "string" },
      title: { type: "string" },
   },
}
