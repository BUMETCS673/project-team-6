/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import car from '../../../../models/Car';
import dbConnect from '../../../../lib/dbConnect';

export async function GET() {
  try {
    await dbConnect();
    const cars = await car.find({});
    return NextResponse.json(cars, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 },
    );
  }
}
