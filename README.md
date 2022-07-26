# Item Catalogue Application
- The backend application fo Item Catalogue serving the frontend as static data

```
\/ \/ Commands below \/ \/

npm i - Install all required node package modules
npm run dev - Run the application in development mode
npm run test - Run the test scripts
tsc -w - Watch and compile typescript to javascript
npm start - Run the application in production mode

sql file requires PostgresSQL running

```
## Technologies
- Node (DevDep(nodemon))
- Fastify (formbody, session, bcrypt, rate-limit, cookie, cors, static)
- Prisma (studio)
- Cloudinary
- Other (UUID, Typescript)

### Additional Information
Usernames - ['jSmith', 'sJones']
Password - ['Password!23']

### Version Control
(2022-07-19) [19:21]
- Setup (Fastify, Prisma, Postgres)
- Schema (Items, Admin)
- CRUD (Items, Admin)
- Admin Session Auth

(2022-07-25) [15:34]
- Setup Cloudinary
- Image (CRUD)
- Increased data payload

(2022-07-27) [07:55]
- Completed Application
