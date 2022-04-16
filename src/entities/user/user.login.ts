import { FastifyRequest, FastifyReply } from 'fastify';
import { fastify, prisma } from '../../server'
import { loginItem, loginStatus } from './user.type';

// POST Login User
export const loginUser = {
    schema: {
        body: loginItem,
        response: {
            200: loginStatus
        },
    },
    handler: async (request: FastifyRequest<{
        Body: {
            username: string,
            password: string
        }
    }>, reply: FastifyReply) => {
        let { username, password } = request.body
        const user = await prisma.user.findUnique({
            where: { username: String(username) }
        })

        let hashedPassword = user?.password as string;

        // If Statement to handle password/hashPassword Comparison
        if (await fastify.bcrypt.compare(password, hashedPassword)) {
            // Creating Authentication for User Session
            request.session.authenticated = true
            let hashedUser: string | undefined = user?.userID
            let hashedRole: string | undefined = user?.roles

            // Creating addtional User Session data
            request.session.user = {
                userId: hashedUser,
                role: hashedRole,
                username
            }

            reply.status(200).send({ message: 'Login Successfully!' })
        } else {
            reply.status(401).send("Error Message: (401) Status")
        }
        try {

        } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
        }
    }
}
