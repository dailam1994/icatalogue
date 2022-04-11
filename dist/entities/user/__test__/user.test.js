"use strict";
// UNCOMMENT OUT THIS FILE
// import request from 'supertest'
// const baseUrl = 'http://127.0.0.1:3000/'
// /* Prequisites for testing 
// File: 'server.ts' comment-out(Line49) + (Line28-37) & uncomment-out(Line50)
// File: 'entities/user/user.list.ts' comment-out(Line16) + (Line30-31)
// File: 'entities/user/user.single.ts' comment-out(Line15) + (Line32-33)
// File: 'entities/user/user.create.ts' comment-out(Line27) + (Line56-57)
// File: 'entities/user/user.update.ts' comment-out(Line28) + (Line62-63)
// File: 'entities/user/user.delete.ts' comment-out(Line15) + (Line32-33)
// File: 'entities/user/user.logout.ts' comment-out(Line13-15)
// */
// describe('GET ALL Users', () => {
//     it('returns a 200 status code', async () => {
//         const getResponse = await request(baseUrl).get('api/users')
//         expect(getResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const getResponse = await request(baseUrl).get('incorrect-url')
//         expect(getResponse.statusCode).toBe(404)
//     })
//     it('200 status code returns correct existing json data', async () => {
//         const getResponse = await request(baseUrl).get('api/users')
//         expect(getResponse.body).toContainEqual({
//             "userID": "764bc978-3096-4d78-8b81-57a2cb07391f",
//             "firstName": "John",
//             "lastName": "Smith",
//             "dateOfBirth": "1945-05-24T00:00:00.000Z",
//             "email": "jSmith@gmail.com",
//             "username": "jSmith",
//             "password": "$2b$06$Yj3gU7Dmcsc9ol0JjwJiMud8yX6Zz6jyAWFi1.5YseInDzaJ0xQNO",
//             "roles": "ADMIN"
//         })
//     })
// })
// describe('GET a User', () => {
//     it('returns a 200 status code', async () => {
//         const id = "764bc978-3096-4d78-8b81-57a2cb07391f"
//         const getResponse = await request(baseUrl).get(`api/user/${id}`)
//         expect(getResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const getResponse = await request(baseUrl).get('incorrect-url')
//         expect(getResponse.statusCode).toBe(404)
//     })
// })
// describe('POST a User', () => {
//     it('returns a 200 status code w/ a successfully POST', async () => {
//         const preLength = await request(baseUrl).get('api/users')
//         const postResponse = await request(baseUrl).post('api/user').send({
//             "firstName": "Mr",
//             "lastName": "X",
//             "dateOfBirth": "2000-02-20T00:00:00.000Z",
//             "email": "mrX@gmail.com",
//             "username": "mrX",
//             "password": "marksTheSpot",
//             "roles": "CLIENT"
//         })
//         const postLength = await request(baseUrl).get('api/users')
//         expect(preLength.body.length + 1).toEqual(postLength.body.length)
//         expect(postResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const postResponse = await request(baseUrl).post('incorrect-url').send({
//             "firstName": "Mr",
//             "lastName": "X",
//             "dateOfBirth": "2000-02-20T00:00:00.000Z",
//             "email": "mrX@gmail.com",
//             "username": "mrX",
//             "password": "marksTheSpot",
//             "roles": "CLIENT"
//         })
//         expect(postResponse.statusCode).toBe(404)
//     })
//     it('returns a 400 status code w/ missing data values', async () => {
//         const postResponse = await request(baseUrl).post('api/user').send({
//             "firstName": "Mr",
//             "lastName": "X",
//             "dateOfBirth": "2000-02-20T00:00:00.000Z",
//             "email": "mrX@gmail.com",
//             "username": "mrX",
//             "password": "marksTheSpot",
//             // "roles": "CLIENT"
//         })
//         expect(postResponse.statusCode).toBe(400)
//     })
//     it('returns a 500 status code w/ existing data values', async () => {
//         const postResponse = await request(baseUrl).post('api/user').send({
//             "firstName": "John",
//             "lastName": "Smith",
//             "dateOfBirth": "1945-05-24T00:00:00.000Z",
//             "email": "jSmith@gmail.com",
//             "username": "jSmith",
//             "password": "$2b$06$Yj3gU7Dmcsc9ol0JjwJiMud8yX6Zz6jyAWFi1.5YseInDzaJ0xQNO",
//             "roles": "ADMIN"
//         })
//         expect(postResponse.statusCode).toBe(500)
//     })
// })
// describe('PUT a User', () => {
//     it('returns a 200 status code w/ a successfully PUT', async () => {
//         const id = "ae2dd8d0-d6e9-4d4d-bc7c-eec7171a91c0"
//         const putResponse = await request(baseUrl).put(`api/user/${id}`).send({
//             "firstName": "Updated",
//             "lastName": "Me",
//             "dateOfBirth": "1970-01-01T00:00:00.000Z",
//             "email": "uMe@gmail.com",
//             "username": "uMe",
//             "password": "1234",
//             "roles": "CLIENT"
//         })
//         expect(putResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const putResponse = await request(baseUrl).put('incorrect-url').send({
//             "firstName": "Updated",
//             "lastName": "Me",
//             "dateOfBirth": "1970-01-01T00:00:00.000Z",
//             "email": "uMe@gmail.com",
//             "username": "uMe",
//             "password": "1234",
//             "roles": "CLIENT"
//         })
//         expect(putResponse.statusCode).toBe(404)
//     })
//     it('returns a 400 status code w/ missing data values', async () => {
//         const id = "ae2dd8d0-d6e9-4d4d-bc7c-eec7171a91c0"
//         const putResponse = await request(baseUrl).put(`api/user/${id}`).send({
//             "firstName": "Updated",
//             "lastName": "Me",
//             "dateOfBirth": "1970-01-01T00:00:00.000Z",
//             "email": "uMe@gmail.com",
//             "username": "uMe",
//             "password": "1234",
//             // "roles": "CLIENT"
//         })
//         expect(putResponse.statusCode).toBe(400)
//     })
// })
// describe('DELETE a User', () => {
//     it('returns a 200 status code w/ a successfully DELETE', async () => {
//         // Requires an existing id in the database
//         const id = "da74649e-51a4-437c-a4b5-b75c8bb39a18"
//         const preLength = await request(baseUrl).get('api/users')
//         const deleteResponse = await request(baseUrl).delete(`api/user/${id}`)
//         const postLength = await request(baseUrl).get('api/users')
//         expect(preLength.body.length - 1 || 0).toEqual(postLength.body.length)
//         expect(deleteResponse.statusCode).toBe(200)
//     })
//     it('returns a 500 status code w/ incorrect url', async () => {
//         const deleteResponse = await request(baseUrl).delete('incorrect-url')
//         expect(deleteResponse.statusCode).toBe(500)
//     })
// })
// describe('POST User Login', () => {
//     it('returns a 200 status code w/ a successfully POST', async () => {
//         const postResponse = await request(baseUrl).post('api/user/login').send({
//             "username": "jSmith",
//             "password": "1234",
//         })
//         expect(postResponse.statusCode).toBe(200)
//     })
//     it('returns a 401 status code w/ unsuccessful POST', async () => {
//         const postResponse = await request(baseUrl).post('api/user/login').send({
//             "username": "jSmith",
//             "password": "12345",
//         })
//         expect(postResponse.statusCode).toBe(401)
//     })
// })
// describe('POST User Logout', () => {
//     it('returns a 200 status code w/ a successfully POST', async () => {
//         const postResponse = await request(baseUrl).post('api/user/logout')
//         expect(postResponse.statusCode).toBe(200)
//     })
// })
