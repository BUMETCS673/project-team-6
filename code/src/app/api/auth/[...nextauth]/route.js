import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from 'src/lib/dbConnect'
import User from 'src/models/User'
import bcrypt from 'bcryptjs'

/**
 * Configuration options for NextAuth authentication.
 * @typedef {Object} AuthOptions
 * @property {Array} providers - List of authentication providers.
 * @property {Object} session - Session related configuration.
 * @property {string} session.strategy - Session strategy to use (e.g. 'jwt').
 * @property {string} secret - Secret used for JWT.
 */

/**
 * Authentication options.
 * @type {AuthOptions}
 */
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },

            async authorize(credentials) {
                const { email, password } = credentials

                try {
                    await dbConnect()
                    const user = await User.findOne({ email })

                    if (!user) {
                        return null
                    }

                    const isValid = await bcrypt.compare(password, user.password)

                    if (!isValid) {
                        return null
                    }

                    return user
                } catch (error) {
                    console.log("Error: ", error)
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.JWT_SECRET,

}

/**
 * Handler function for NextAuth.
 * Handles both GET and POST methods.
 * 
 * - POST: Used for sign-in.
 * - GET: Used for session management, sign-out, checking current user, etc.
 */
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }