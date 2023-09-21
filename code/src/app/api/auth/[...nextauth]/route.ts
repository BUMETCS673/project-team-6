import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/dbConnect';
import user from '@/models/User';
import bcrypt from 'bcryptjs';

const logger = require('pino')();

/**
 * Handler function for NextAuth.
 * Handles both GET and POST methods.
 *
 * - POST: Used for sign-in.
 * - GET: Used for session management, sign-out, checking current user, etc.
 */
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        try {
          await dbConnect();
          const foundUser = await user.findOne({ email });

          if (!foundUser) {
            return null;
          }

          const isValid = await bcrypt.compare(password, foundUser.password);

          if (!isValid) {
            return null;
          }

          return foundUser;
        } catch (error) {
          logger.info('Error: ', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/dashboard',
  },
});

export { handler as GET, handler as POST };
