/* eslint-disable import/prefer-default-export */

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import user from '@/models/User';
import bcrypt from 'bcryptjs';
/**
 * User registration REST API access.
 * This endpoint allows a new user to register by providing their firstname, lastname,
 * email, and password.
 *
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.firstname - The first name of the user.
 * @param {string} req.body.lastname - The last name of the user.
 * @param {string} req.body.email - The email address of the user.
 * @param {string} req.body.password - The password of the user.
 * @returns {Promise<NextResponse>} A response object.
 * 201: User registered successfully.
 * 400: Email already exists in the system.
 * 500: Unexpected server error.
 * @throws {Error} Throws an error if there's an issue with the registration process.
 */

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, password } = await req.json();

    if (password.length < 3 || password.length > 20) {
      return NextResponse.json(
        { message: 'Invalid! Password must be between 3 and 20 characters.' },
        { status: 400 },
      );
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid! Must be email format' },
        { status: 400 },
      );
    }

    await dbConnect();

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'Email already in use.' },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await user.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: 'User registered.' }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: 'Server Error.' }, { status: 500 });
  }
}
