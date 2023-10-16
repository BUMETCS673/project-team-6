/* eslint-disable import/prefer-default-export, max-lines */

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import car from '@/models/Car';

const rotationMileageTire = 50000;
const rotationMileageOil = 4500;
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

    return NextResponse.json(newCar, { status: 201 });
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
 * If a carId query parameter is provided, returns one car
 * Otherwise, returns all cars
 *
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} req.url - The url of the request.
 * @returns {Promise<NextResponse>} A response object.
 * 200: Car retrieved successfully.
 * 400: Car ID is invalid.
 * 404: Car ID not found in DB.
 * 500: Unexpected server error.
 * @throws {Error} Throws an error if there's an issue with the registration process.
 */

async function getAllCars() {
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

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const carId = url.searchParams.get('carId');

    if (!carId) {
      return await getAllCars();
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

    return NextResponse.json(carObject, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 },
    );
  }
}
function isMaintenanceTypeRequired(
  lastMileageChange: number,
  rotationMileage: number,
  currMileage: number,
): boolean {
  const nextMileageNeedChange = lastMileageChange + rotationMileage;

  if (currMileage > nextMileageNeedChange) {
    return true;
  }

  return false;
}

function determineMaintenanceStatus(data: any, currMileage: number) {
  const maintenanceStatus = {
    oilOverdue: false,
    tireOverdue: false,
    maintenanceRequired: false,
  };

  // Determine overdue status based on mileage
  maintenanceStatus.oilOverdue = isMaintenanceTypeRequired(
    data.mileageLastOilChange,
    rotationMileageOil,
    currMileage,
  );
  maintenanceStatus.tireOverdue = isMaintenanceTypeRequired(
    data.mileageLastTireChange,
    rotationMileageTire,
    currMileage,
  );

  // Calculate overdue status based on date
  const currentDate = new Date();
  if (
    data.dateNextOilChange &&
    new Date(data.dateNextOilChange) < currentDate
  ) {
    maintenanceStatus.oilOverdue = true;
  }
  if (
    data.dateNextTireChange &&
    new Date(data.dateNextTireChange) < currentDate
  ) {
    maintenanceStatus.tireOverdue = true;
  }

  maintenanceStatus.maintenanceRequired =
    maintenanceStatus.oilOverdue || maintenanceStatus.tireOverdue;

  return maintenanceStatus;
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
 * 400: Car ID not provided or invalid.
 * 401: Bad request. Duplicate license.
 * 402: Need both new date and mileage for last maintenance.
 * 403: Car ID not found in DB.
 * 500: Unexpected server error.
 * @throws {Error} Throws an error if there's an issue with the registration process.
 */

// Nick
const numDaysScheduled = 7;

// Adds a specified number of days to today and returns new date
function scheduleMaintenance(days: number) {
  const today = new Date();
  const newDateTime = new Date().setDate(today.getDate() + days);
  return new Date(newDateTime);
}

function dateNeedsMaintenance(nextDateChange: Date) {
  const today = new Date();
  if (Number.isNaN(nextDateChange.getDate()) || nextDateChange < today) {
    return scheduleMaintenance(numDaysScheduled);
  }

  // Schedule is already valid
  return nextDateChange;
}

// Returns true if scheduled maintenance date has already passed today
function isMaintenanceOverdue(nextDateChange: Date, overdue: boolean) {
  if (Number.isNaN(nextDateChange.getDate())) {
    return false;
  }

  if (overdue) {
    return true;
  }

  const today = new Date();
  return nextDateChange < today;
}
// end Nick

// eslint-disable-next-line max-lines-per-function
export async function PUT(req: Request) {
  try {
    const data = await req.json();

    const entries = Object.entries(data);
    const nonEmptyOrNull = entries.filter(
      ([, val]) => val !== '' && val !== null,
    );
    const filteredData = Object.fromEntries(nonEmptyOrNull);

    if (!filteredData.carId) {
      return NextResponse.json(
        { message: 'Please provide a carId' },
        { status: 400 },
      );
    }

    // Nick

    const { license, mileageLastOilChange, mileage, mileageLastTireChange } =
      data;

    let {
      dateNextOilChange,
      dateNextTireChange,
      tireOverdue,
      oilOverdue,
      maintenanceRequired,
    } = data;

    // Check existing license being registered with another car
    const existingLicense = await car.findOne({
      // eslint-disable-next-line no-underscore-dangle
      $and: [{ license }, { _id: { $ne: data._id } }],
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
      // If DB returns null, cannot create new Date object
      if (dateNextOilChange) {
        dateNextOilChangeDate = new Date(dateNextOilChange);
      }
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
      if (dateNextTireChange) {
        dateNextTireChangeDate = new Date(dateNextTireChange);
      }
      tireOverdue = isMaintenanceOverdue(dateNextTireChangeDate, tireOverdue);
      dateNextTireChangeDate = dateNeedsMaintenance(dateNextTireChangeDate);
    } else {
      tireOverdue = false;
      dateNextTireChange = '';
    }

    // set overwrites and type conversion to DB date string
    maintenanceRequired = false;

    if (dateNextOilChangeDate.getDate()) {
      // Slice to remove timestamp
      dateNextOilChange = dateNextOilChangeDate.toISOString().slice(0, 10);
      maintenanceRequired = true;
    }
    if (dateNextTireChangeDate.getDate()) {
      dateNextTireChange = dateNextTireChangeDate.toISOString().slice(0, 10);
      maintenanceRequired = true;
    }
    // Nick end

    await dbConnect();

    /* Check if license already exists for another car */

    if (filteredData.license) {
      const existingCarWithSameLicense = await car.findOne({
        license: filteredData.license,
        _id: { $ne: filteredData.carId }, // Exclude the car being updated
      });

      if (existingCarWithSameLicense) {
        return NextResponse.json(
          { message: 'License already exists for another car.' },
          { status: 401 },
        );
      }
    }

    /* Check for new date and mileage for last maintenance change */

    if (
      (filteredData.dateNextOilChange && !filteredData.mileageLastOilChange) ||
      (filteredData.dateNextTireChange && !filteredData.mileageLastTireChange)
    ) {
      return NextResponse.json(
        {
          message:
            'If a new date for last maintenance change is provided, then a new mileage for the last maintenance change should also be provided.',
        },
        { status: 402 },
      );
    }
    const currentCarData = await car.findOne({ _id: filteredData.carId });
    const updatedCarData = { ...currentCarData.toObject(), ...filteredData };

    const maintenanceStatus = determineMaintenanceStatus(
      updatedCarData,
      (filteredData as any).mileage,
    );
    Object.assign(filteredData, maintenanceStatus);

    const updatedCar = await car.findOneAndUpdate(
      { _id: filteredData.carId },
      {
        $set: {
          manufacturer: filteredData.manufacturer,
          type: filteredData.type,
          year: filteredData.year,
          license: filteredData.license,
          mileage: filteredData.mileage,
          model: filteredData.model,
          color: filteredData.color,
          seats: filteredData.seats,
          condition: filteredData.condition,
          mileageLastOilChange: filteredData.mileageLastOilChange,
          mileageLastTireChange: filteredData.mileageLastTireChange,
          dateNextOilChange: filteredData.dateNextOilChange,
          dateNextTireChange: filteredData.dateNextTireChange,
          oilOverdue,
          tireOverdue,
          maintenanceRequired,
        },
      },
    );
    if (!updatedCar) {
      return NextResponse.json(
        { message: 'Car not found or update failed.' },
        { status: 403 },
      );
    }

    return NextResponse.json(updatedCar, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 },
    );
  }
}
