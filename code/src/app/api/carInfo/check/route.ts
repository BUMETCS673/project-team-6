/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import car from '../../../../models/Car';
import dbConnect from '../../../../lib/dbConnect';

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const options = {};
    const addOption = (name) => {
      const option = url.searchParams.get(name);

      options[name] = { $regex: option };
    };

    addOption('license');
    addOption('manufacturer');
    addOption('model');
    addOption('type');

    await dbConnect();
    const cars = await car.find(options);
    return NextResponse.json(cars, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 },
    );
  }
}
