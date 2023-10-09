/* eslint-disable import/prefer-default-export */

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import car from '@/models/Car';

const today = new Date();
const numDaysScheduled = 7;
const rotationMileageTire = 50000;
const rotationMileageOil = 4500;

// Returns true if maintenance for a specific part is due
function isMaintenanceTypeRequired(
  lastMileageChange: number,
  rotationMileage: number,
  currMileage: number,
) {
  const nextMileageNeedChange = lastMileageChange + rotationMileage;

  if (currMileage > nextMileageNeedChange) {
    return true;
  }

  return false;
}

// Adds a specified number of days to today and returns new date
function scheduleMaintenance(days: number) {
  const newDateTime = new Date().setDate(today.getDate() + days);
  return new Date(newDateTime);
}

// Returns the date of scheduled maintenance
// Assumes maintenance is required
function dateNeedsMaintenance(nextDateChange: Date) {
  if (!nextDateChange.getDate() || nextDateChange < today) {
    return scheduleMaintenance(numDaysScheduled);
  }

  // Schedule is already valid
  return nextDateChange;
}

// Returns true if scheduled maintenance date has already passed today
function isMaintenanceOverdue(nextDateChange: Date, overdue: boolean) {
  if (!nextDateChange.getDate()) {
    return false;
  }

  if (overdue) {
    return true;
  }

  return nextDateChange < today;
}

/**
 * Add car info REST API access.
 * This endpoint allows a user to add car information.
 *
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
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
    const oilOverdue = false;
    const tireOverdue = false;
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
      mileage,
      model,
      color,
      seats,
      condition,
      mileageLastOilChange,
      mileageLastTireChange,
      dateNextOilChange,
      dateNextTireChange,
      oilOverdue,
      tireOverdue,
      maintenanceRequired,
    });

    return NextResponse.json({ newCar }, { status: 201 });
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

/**
 * Edit car info REST API access.
 * This endpoint allows a user to edit car information.
 * Calculates whether maintenance is required
 *
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
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
 * 200: Car edited successfully. Updated car info returned.
 * 400: Bad request. Duplicate license or Car ID not provided or invalid.
 * 404: Car ID not found in DB.
 * 500: Unexpected server error.
 * @throws {Error} Throws an error if there's an issue with the registration process.
 */
export async function PUT(req: Request) {
  const requestBody = await req.json();
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
  } = requestBody;

  let {
    dateNextOilChange,
    dateNextTireChange,
    oilOverdue,
    tireOverdue,
    maintenanceRequired,
  } = requestBody;

  try {
    // Get saved car object, validate car exist
    const getRequest = await GET(req);
    const { message, carObject } = await getRequest.json();
    if (!carObject) {
      return NextResponse.json({ message }, { status: getRequest.status });
    }

    // Check existing license being registered with another car
    const existingLicense = await car.findOne({
      // eslint-disable-next-line no-underscore-dangle
      $and: [{ license }, { _id: { $ne: carObject._id } }],
    });

    if (existingLicense) {
      return NextResponse.json(
        { message: 'License number already registered.' },
        { status: 400 },
      );
    }

    // TODO Assumption: If new Date for last maintenance change, then also new mileage for last maintenance change

    // Type conversion from request to Date object
    let dateNextOilChangeDate = new Date('');
    let dateNextTireChangeDate = new Date('');

    // Oil Maintenance
    if (
      isMaintenanceTypeRequired(
        mileageLastOilChange,
        rotationMileageOil,
        mileage,
      )
    ) {
      dateNextOilChangeDate = new Date(dateNextOilChange);
      oilOverdue = isMaintenanceOverdue(dateNextOilChangeDate, oilOverdue);
      dateNextOilChangeDate = dateNeedsMaintenance(dateNextOilChangeDate);
    } else {
      oilOverdue = false;
      dateNextOilChange = '';
    }

    // Tire Maintenance
    if (
      isMaintenanceTypeRequired(
        mileageLastTireChange,
        rotationMileageTire,
        mileage,
      )
    ) {
      dateNextTireChangeDate = new Date(dateNextTireChange);
      tireOverdue = isMaintenanceOverdue(dateNextTireChangeDate, tireOverdue);
      dateNextTireChangeDate = dateNeedsMaintenance(dateNextTireChangeDate);
    } else {
      tireOverdue = false;
      dateNextTireChange = '';
    }

    // set overwrites and type conversion to DB date string
    maintenanceRequired = false;

    if (dateNextOilChangeDate.getDate()) {
      dateNextOilChange = dateNextOilChangeDate.toISOString();
      maintenanceRequired = true;
    }
    if (dateNextTireChangeDate.getDate()) {
      dateNextTireChange = dateNextTireChangeDate.toISOString();
      maintenanceRequired = true;
    }

    // DB Update
    await dbConnect();

    const updatedCar = await car.findOneAndUpdate(
      // eslint-disable-next-line no-underscore-dangle
      { _id: carObject._id },
      {
        $set: {
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
          oilOverdue,
          tireOverdue,
          maintenanceRequired,
        },
      },
      { new: true },
    );

    if (!updatedCar) {
      return NextResponse.json(
        { message: 'Could not update document' },
        { status: 500 },
      );
    }

    // return carObject
    return NextResponse.json({ updatedCar }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 },
    );
  }
}
