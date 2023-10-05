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
 * 201: Car added successfully.
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
    let maintenanceOverdue = false;
    let maintenanceRequired = false;

    await dbConnect();

    const existingLicense = await car.findOne({ license });
    if (existingLicense) {
      return NextResponse.json(
        { message: 'License number already registered.' },
        { status: 400 },
      );
    }

    await car.create({
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

    return NextResponse.json({ message: 'Car Added' }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 },
    );
  }
}
