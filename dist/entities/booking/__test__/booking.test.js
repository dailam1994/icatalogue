"use strict";
// UNCOMMENT OUT THIS FILE
// import request from 'supertest'
// const baseUrl = 'http://127.0.0.1:3000/'
// // /* Prequisites for testing 
// // File: 'server.ts' comment-out(Line49) + (Line28-37) & uncomment-out(Line50)
// // */
// describe('GET ALL Bookings', () => {
//     it('returns a 200 status code', async () => {
//         const getResponse = await request(baseUrl).get('api/bookings')
//         expect(getResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const getResponse = await request(baseUrl).get('incorrect-url')
//         expect(getResponse.statusCode).toBe(404)
//     })
//     it('200 status code returns correct existing json data', async () => {
//         const getResponse = await request(baseUrl).get('api/bookings')
//         expect(getResponse.body).toContainEqual({
//             "bookingID": "1defedd3-068c-46b7-8ec8-462bbcc7f04c",
//             "date": "1994-08-27T00:00:00.000Z",
//             "startTime": "1994-08-27T08:00:00.000Z",
//             "endTime": "1994-08-27T10:00:00.000Z",
//             "firstService": "Service 1",
//             "secondService": "",
//             "thirdService": "Service 3",
//             "fourthService": "",
//             "fifthService": ""
//         })
//     })
// })
// describe('GET a Booking', () => {
//     it('returns a 200 status code', async () => {
//         const id = "1defedd3-068c-46b7-8ec8-462bbcc7f04c"
//         const getResponse = await request(baseUrl).get(`api/booking/${id}`)
//         expect(getResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const getResponse = await request(baseUrl).get('incorrect-url')
//         expect(getResponse.statusCode).toBe(404)
//     })
// })
// describe('POST a Booking', () => {
//     it('returns a 200 status code w/ a successfully POST', async () => {
//         const preLength = await request(baseUrl).get('api/bookings')
//         const postResponse = await request(baseUrl).post('api/booking').send({
//             "date": "1993-10-12",
//             "startTime": "08:00",
//             "endTime": "10:00",
//             "firstService": "",
//             "secondService": "",
//             "thirdService": "",
//             "fourthService": "Service 4",
//             "fifthService": "Service 5"
//         })
//         const postLength = await request(baseUrl).get('api/bookings')
//         expect(preLength.body.length + 1).toEqual(postLength.body.length)
//         expect(postResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const postResponse = await request(baseUrl).post('incorrect-url').send({
//             "date": "1993-10-12",
//             "startTime": "08:00",
//             "endTime": "10:00",
//             "firstService": "",
//             "secondService": "",
//             "thirdService": "",
//             "fourthService": "Service 4",
//             "fifthService": "Service 5"
//         })
//         expect(postResponse.statusCode).toBe(404)
//     })
//     it('returns a 400 status code w/ missing data values', async () => {
//         const postResponse = await request(baseUrl).post('api/booking').send({
//             // "date": "1993-10-12",
//             "startTime": "08:00",
//             "endTime": "10:00",
//             "firstService": "",
//             "secondService": "",
//             "thirdService": "",
//             "fourthService": "Service 4",
//             "fifthService": "Service 5"
//         })
//         expect(postResponse.statusCode).toBe(400)
//     })
// })
// describe('PUT a Booking', () => {
//     it('returns a 200 status code w/ a successfully PUT', async () => {
//         const id = "768d28a9-1d12-4fda-b3df-d7976ac2aa40"
//         const putResponse = await request(baseUrl).put(`api/booking/${id}`).send({
//             "date": "1990-09-09",
//             "startTime": "09:00",
//             "endTime": "11:00",
//             "firstService": "Service 1",
//             "secondService": "",
//             "thirdService": "",
//             "fourthService": "",
//             "fifthService": "Service 5"
//         })
//         expect(putResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const putResponse = await request(baseUrl).put('incorrect-url').send({
//             "date": "1990-09-09",
//             "startTime": "09:00",
//             "endTime": "11:00",
//             "firstService": "Service 1",
//             "secondService": "",
//             "thirdService": "",
//             "fourthService": "",
//             "fifthService": "Service 5"
//         })
//         expect(putResponse.statusCode).toBe(404)
//     })
//     it('returns a 400 status code w/ missing data values', async () => {
//         const id = "768d28a9-1d12-4fda-b3df-d7976ac2aa40"
//         const putResponse = await request(baseUrl).put(`api/booking/${id}`).send({
//             // "date": "1990-09-09",
//             "startTime": "09:00",
//             "endTime": "11:00",
//             "firstService": "Service 1",
//             "secondService": "",
//             "thirdService": "",
//             "fourthService": "",
//             "fifthService": "Service 5"
//         })
//         expect(putResponse.statusCode).toBe(400)
//     })
// })
// describe('DELETE a User', () => {
//     it('returns a 200 status code w/ a successfully DELETE', async () => {
//         // Requires an existing id in the database
//         const id = "fbab9797-ff0a-416f-a14e-49989a4f517a"
//         const preLength = await request(baseUrl).get('api/bookings')
//         const deleteResponse = await request(baseUrl).delete(`api/booking/${id}`)
//         const postLength = await request(baseUrl).get('api/bookings')
//         expect(preLength.body.length - 1 || 0).toEqual(postLength.body.length)
//         expect(deleteResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const deleteResponse = await request(baseUrl).delete('incorrect-url')
//         expect(deleteResponse.statusCode).toBe(404)
//     })
// })
