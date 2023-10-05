/* eslint-disable import/prefer-default-export */

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import car from '@/models/Car';

/**
 * Add car info REST API access.
 * This endpoint allows a user to add car information.
 *
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.carId - The unique identifier of the car (automatically generated).
 * @param {string} req.body.manufacturer - The manufacturer of the car
 * @param {string} req.body.type - The type of the car.
 * @param {string} req.body.year - The year of the car.
 * @param {string} req.body.license - The license number of the car.
 * @param {string} req.body.mileage - The current mileage of the car.
 * @param {string} req.body.model - The model of the car.
 * @param {string} req.body.color - The color of the car.
 * @param {string} req.body.seats - The number of seats in the car.
 * @param {string} req.body.condition - The condition of the car.
 * @param {string} req.body.mileageLastOilChange - The mileage of last oil change.
 * @param {string} req.body.mileageLastTireChange - The mileage of last tire change.
 * @param {string} req.body.dateNextOilChange - The date of next oil change.
 * @param {string} req.body.dateNextTireChange - The date of next tire change.
 * @returns {Promise<NextResponse>} A response object.
 * 201: Car added successfully. New car info returned.
 * 500: Unexpected server error.
 * @throws {Error} Throws an error if there's an issue with the registration process.
 */

export async function POST(req: Request) {
  try {
    const {
      manufacturer,
      type,
      year,
      license,
      mileage,
      model,
      color,
      seats,
      condition,
      mileageLastOilChange,
      mileageLastTireChange,
      dateNextOilChange,
      dateNextTireChange,
    } = await req.json();

    // Set defaults
    const maintenanceOverdue = false;
    const maintenanceRequired = false;

    await dbConnect();

    const existingLicense = await car.findOne({ license });
    if (existingLicense) {
      return NextResponse.json(
        { message: 'License number already registered.' },
        { status: 400 },
      );
    }

    const newCar = await car.create({
      manufacturer,
      type,
      year,
      license,
      currentMileage: mileage,
      model,
      color,
      numSeat: seats,
      condition,
      mileageLastOilChange,
      mileageLastTireChange,
      dateNextOilChange,
      dateNextTireChange,
      maintenanceOverdue,
      maintenanceRequired,
    });

    return NextResponse.json({ carId: newCar }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 },
    );
  }
}

/**
 * Get car info REST API access.
 * This endpoint allows a user to get car information.
 *
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} req.url - The url of the request.
 * @returns {Promise<NextResponse>} A response object.
 * 200: Car retrieved successfully.
 * 400: Car ID not provided or invalid.
 * 404: Car ID not found in DB.
 * 500: Unexpected server error.
 * @throws {Error} Throws an error if there's an issue with the registration process.
 */

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const carId = url.searchParams.get('carId');

    if (!carId) {
      return NextResponse.json(
        { message: 'Please provide a carId' },
        { status: 400 },
      );
    }

    await dbConnect();

    if (!carId.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({ message: 'Invalid carId' }, { status: 400 });
    }

    const carObject = await car.findById({ _id: carId });
    if (!carObject) {
      return NextResponse.json(
        { message: `Car ID does not match any records: ${carId}` },
        { status: 404 },
      );
    }

    return NextResponse.json({ carObject }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 },
    );
  }
}
