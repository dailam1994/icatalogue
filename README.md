# PROJ3 Admin Panel Mobile App - AmourAila

-  Backend Application Admin Panel Additions for AmourAila Project
-  Project provides an backend application and database for the client and
   their customers. Client and Customers are allowed to login and interact with
   the system via their session and access particular routes, functionalities
   via the connected database. This helps admin and their employee to manage
   information for each customer along with what entities the backend application
   provides. In addition, numerous numbers of security implementations have been
   performed to ensure that the application and its processes are secure and accessible
   to releveant users.
-  Requires frontend application

```
\/ \/ Commands below \/ \/

npm i
npm run dev
npm run test

sql file requires PostgresSQL running

```

## Multi-technology

-  Node
-  Typescript
-  Fastify
-  Prisma
-  Postgres

### Additional Information

-  Supertest + Jest
-  Session, Cookie, Cors, Formbody, Rate Limit, Validator

### Version Control

(2022-03-23) [14:04]

-  Set up
   -  Fastify & Prisma
-  Modelled SQL Schema

(2022-03-23) [18:13]

-  CRUD + Schema
   -  User

(2022-03-24) [04:26]

-  CRUD + Schema
   -  Booking
   -  Availability
-  User
   -  Login/Logout
-  Bcrypt
-  Sessions/Cookies
-  Rate Limit
-  CORS
-  RESTapi End-point Testing
   -  User

(2022-03-25) [20:53]

-  RESTapi End-point Testing
   -  Availability
   -  Booking

(2022-04-16) [16:59]

-  Logging Feature
   -  Inputs required data into the database w.r.t. API Request
   -  Auto deletion after a set period

(2022-04-19) [16:49]

-  Appointment
   -  Route
   -  READ
   -  Schema/Type
-  Registered appointment router in server.js

(2022-04-20) [17:43]

-  Admin Appointment
   -  READ
      -  By Booking ID
      -  By Current Date
-  Admin Availability
   -  READ
      -  By Unique Date
-  Updated Route Paths

(2022-04-22) [17:49]

-  Admin Appointment
   -  READ, UPDATE and DELETE
      -  Today and Upcoming Client Scheduled Dates
   -  READ and DELETE
      -  Past Client Bookings-

(2022-05-07) [21:20]

-  Admin Record (CRUD + Schema)
-  Removed Entites
   -  Availablity
   -  Schedule
   -  Booking

(2022-05-09) [13:31]

-  Updated Prisma Schema

   -  Logging
   -  Blockip

-  Entities

   -  Logging
      -  List, Route, Type, Delete
   -  BlockIP
      -  List, Router, Type, Create, Delete

-  Validation & Santisation
   -  Formbody Regex
   -  Validator Escape

(2022-05-10) [17:45]

-  Updated Prisma Schema

   -  Whitelist

-  WhiteList Entity
   -  List, Route, Type, Create, Delete

(2022-05-17) [11:37]

-  Updated Whitelest (C.R.D.)
   -  Include Update functionality
   -  GET Whitelist by ID
