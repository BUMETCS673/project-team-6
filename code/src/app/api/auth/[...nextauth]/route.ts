import NextAuth from 'next-auth';
import { authOptions } from './auth';

/**
 * Handler function for NextAuth.
 * Handles both GET and POST methods.
 *
 * - POST: Used for sign-in.
 * - GET: Used for session management, sign-out, checking current user, etc.
 */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
