/* eslint-disable import/prefer-default-export */

import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/dbConnect';
import user from '@/models/User';
import bcrypt from 'bcryptjs';

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
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

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
          console.log('Error: ', error);
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
};
