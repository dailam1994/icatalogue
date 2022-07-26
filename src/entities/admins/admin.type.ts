/* User Types and Schema Validations */
export const Items = {
   type: "object",
   properties: {
      adminID: { type: "string" },
      firstName: { type: "string" },
      lastName: { type: "string" },
      dateOfBirth: { type: "string" },
      email: { type: "string" },
      username: { type: "string" },
      password: { type: "string" },
   },
}

export const modifyItem = {
   type: "object",
   required: ["firstName", "lastName", "dateOfBirth", "email", "username", "password"],
   properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
      dateOfBirth: { type: "string" },
      email: { type: "string" },
      username: { type: "string" },
      password: { type: "string" },
   },
}

export const deleteItem = {
   type: "object",
   properties: {
      id: { type: "string" },
   },
}

export const loginItem = {
   type: "object",
   required: ["username", "password"],
   properties: {
      username: { type: "string", pattern: "^[a-zA-Z0-9]{3,255}$" },
      password: { type: "string", pattern: "^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{6,})\\S$" },
   },
}

export const loginStatus = {
   type: "object",
   properties: {
      message: { type: "string" },
   },
}

export const authStatus = {
   type: "object",
   properties: {
      expires: { type: "string" },
      sessionId: { type: "string" },
      encryptedSessionId: { type: "string" },
      authenticated: { type: "boolean" },
      admin: {
         type: "object",
         properties: {
            adminId: { type: "string" },
            username: { type: "string" },
         },
      },
      cookie: {
         type: "object",
         properties: {
            maxAge: { type: "number" },
            path: { type: "string" },
            httpOnly: { type: "boolean" },
            secure: { type: "boolean" },
            sameSite: { type: ["string", "null"] },
            domain: { type: ["string", "null"] },
         },
      },
   },
}
