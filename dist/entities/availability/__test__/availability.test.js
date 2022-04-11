"use strict";
// // UNCOMMENT OUT THIS FILE
// import request from 'supertest'
// const baseUrl = 'http://127.0.0.1:3000/'
// // /* Prequisites for testing 
// // File: 'server.ts' comment-out(Line49) + (Line28-37) & uncomment-out(Line50)
// // File: 'entities/availability/availability.create.ts' comment-out(Line20) + (Line41-43)
// // File: 'entities/availability/availability.update.ts' comment-out(Line21) + (Line45-46)
// // File: 'entities/availability/availability.delete.ts' comment-out(Line15) + (Line32-33)
// // */
// describe('GET ALL Availabilities', () => {
//     it('returns a 200 status code', async () => {
//         const getResponse = await request(baseUrl).get('api/availabilities')
//         expect(getResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const getResponse = await request(baseUrl).get('incorrect-url')
//         expect(getResponse.statusCode).toBe(404)
//     })
//     it('200 status code returns correct existing json data', async () => {
//         const getResponse = await request(baseUrl).get('api/availabilities')
//         expect(getResponse.body).toContainEqual({
//             "availabilityID": "e857b5c9-28e3-4a55-b48d-aff634fae06f",
//             "date": "1994-08-27T00:00:00.000Z",
//             "startTime": "1994-08-27T08:00:00.000Z",
//             "endTime": "1994-08-27T10:00:00.000Z"
//         })
//     })
// })
// describe('GET an Availability', () => {
//     it('returns a 200 status code', async () => {
//         const id = "e857b5c9-28e3-4a55-b48d-aff634fae06f"
//         const getResponse = await request(baseUrl).get(`api/availability/${id}`)
//         expect(getResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const getResponse = await request(baseUrl).get('incorrect-url')
//         expect(getResponse.statusCode).toBe(404)
//     })
// })
// describe('POST an Availability', () => {
//     it('returns a 200 status code w/ a successfully POST', async () => {
//         const preLength = await request(baseUrl).get('api/availabilities')
//         const postResponse = await request(baseUrl).post('api/availability').send({
//             "date": "1969-01-01",
//             "startTime": "09:00",
//             "endTime": "11:00"
//         })
//         const postLength = await request(baseUrl).get('api/availabilities')
//         expect(preLength.body.length + 1).toEqual(postLength.body.length)
//         expect(postResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const postResponse = await request(baseUrl).post('incorrect-url').send({
//             "date": "1969-01-01",
//             "startTime": "09:00",
//             "endTime": "11:00"
//         })
//         expect(postResponse.statusCode).toBe(404)
//     })
//     it('returns a 400 status code w/ missing data values', async () => {
//         const postResponse = await request(baseUrl).post('api/availability').send({
//             // "date": "1995-12-03",
//             "startTime": "08:00",
//             "endTime": "10:00"
//         })
//         expect(postResponse.statusCode).toBe(400)
//     })
// })
// describe('PUT an Availability', () => {
//     it('returns a 200 status code w/ a successfully PUT', async () => {
//         const id = "78a6f7ea-fe96-413d-9335-187a92846e99"
//         const putResponse = await request(baseUrl).put(`api/availability/${id}`).send({
//             "date": "1995-12-06",
//             "startTime": "08:00",
//             "endTime": "10:00"
//         })
//         expect(putResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const putResponse = await request(baseUrl).put('incorrect-url').send({
//             "date": "1995-12-06",
//             "startTime": "08:00",
//             "endTime": "10:00"
//         })
//         expect(putResponse.statusCode).toBe(404)
//     })
//     it('returns a 400 status code w/ missing data values', async () => {
//         const id = "78a6f7ea-fe96-413d-9335-187a92846e99"
//         const putResponse = await request(baseUrl).put(`api/availability/${id}`).send({
//             // "date": "1995-12-06",
//             "startTime": "08:00",
//             "endTime": "10:00"
//         })
//         expect(putResponse.statusCode).toBe(400)
//     })
// })
// describe('DELETE an Availability', () => {
//     it('returns a 200 status code w/ a successfully DELETE', async () => {
//         // Requires an existing id in the database
//         const id = "30fbf59d-cd15-4f49-9d4b-f3202c7723c4"
//         const preLength = await request(baseUrl).get('api/availabilities')
//         const deleteResponse = await request(baseUrl).delete(`api/availability/${id}`)
//         const postLength = await request(baseUrl).get('api/availabilities')
//         expect(preLength.body.length - 1 || 0).toEqual(postLength.body.length)
//         expect(deleteResponse.statusCode).toBe(200)
//     })
//     it('returns a 404 status code w/ incorrect url', async () => {
//         const deleteResponse = await request(baseUrl).delete('incorrect-url')
//         expect(deleteResponse.statusCode).toBe(404)
//     })
// })
