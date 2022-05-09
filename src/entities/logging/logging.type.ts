/* Logging Types and Schema Validations */
export const Items = {
   type: "object",
   properties: {
      loggingID: { type: "string" },
      ip: { type: "string" },
      timestamp: { type: "string" },
      username: { type: "string" || null },
      action: { type: "string" },
   },
}
