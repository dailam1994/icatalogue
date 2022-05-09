/* User Types and Schema Validations */
export const Items = {
   type: "object",
   properties: {
      userID: { type: "string" },
      firstName: { type: "string" },
      lastName: { type: "string" },
      dateOfBirth: { type: "string" },
      email: { type: "string" },
      username: { type: "string" },
      password: { type: "string" },
      roles: { type: "string" },
   },
}

export const modifyItem = {
   type: "object",
   required: ["firstName", "lastName", "dateOfBirth", "email", "username", "password", "roles"],
   properties: {
      firstName: { type: "string", pattern: "^[a-zA-Z ,.'-]{3,200}$" },
      lastName: { type: "string", pattern: "^[a-zA-Z ,.'-]{3,200}$" },
      dateOfBirth: { type: "string", pattern: "^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$" },
      email: { type: "string", pattern: "[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\\.[a-zA-Z0-9-.]+" },
      username: { type: "string", pattern: "^[a-zA-Z0-9]{3,255}$" },
      password: { type: "string", pattern: "^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{6,})\\S$" },
      roles: {
         type: "string",
         enum: ["ADMIN", "CLIENT"],
      },
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
      user: {
         type: "object",
         properties: {
            userId: { type: "string" },
            username: { type: "string" },
            role: { type: "string" },
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
