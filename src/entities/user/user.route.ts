import { FastifyInstance } from 'fastify'
import { allUsers } from './user.list'
import { user } from './user.single'
import { createUser } from './user.create'
import { updateUser } from './user.update'
import { deleteUser } from './user.delete'
import { loginUser } from './user.login'
import { logoutUser } from './user.logout'
import { authUser } from './user.auth'

// Routes for Users
export const userRouter = async (fastify: FastifyInstance) => {
    // RESTapi endpoints
    fastify.get('/api/users', allUsers)
    fastify.get('/api/user/:id', user)
    fastify.post('/api/user', createUser)
    fastify.put('/api/user/:id', updateUser)
    fastify.delete('/api/user/:id', deleteUser)
    fastify.post('/api/user/login', loginUser)
    fastify.post('/api/user/logout', logoutUser)
    fastify.get('/api/user/auth', authUser)
}
