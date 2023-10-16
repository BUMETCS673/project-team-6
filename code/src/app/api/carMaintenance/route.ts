/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import carDB from '@/models/Car';

/**
 * Get car maintenance info REST API access.
 * This endpoint allows a user to get all car maintenance information.
 *
 * @async
 * @function
 * @returns {Promise<NextResponse>} A response object.
 * 200: Car maintenace info retrieved successfully.
 * 500: Unexpected server error.
 * @throws {Error} Throws an error if there's an issue with the registration process.
 */
export async function GET() {
  try {
    await dbConnect();

    const cars = await carDB.find({});

    if (!cars) {
      return NextResponse.json(
        { message: `There was an error retreiving all cars` },
        { status: 500 },
      );
    }

    const maintenanceInfo = {};
    // let maintenanceInfo : object[] = [];

    cars.forEach((car) => {
      const oilMaintenanceDate = car.dateNextOilChange;
      const tireMaintenanceDate = car.dateNextTireChange;

      // Convert to Date Object and parse only date (not time)

      if (oilMaintenanceDate) {
        const oilInfo = {
          // eslint-disable-next-line no-underscore-dangle
          carID: car._id,
          oilChange: oilMaintenanceDate,
          oilOverdue: car.oilOverdue,
        };
        if (oilMaintenanceDate in maintenanceInfo) {
          maintenanceInfo[oilMaintenanceDate].push(oilInfo);
        } else {
          maintenanceInfo[oilMaintenanceDate] = [oilInfo];
        }
      }

      if (tireMaintenanceDate) {
        const tireInfo = {
          // eslint-disable-next-line no-underscore-dangle
          carID: car._id,
          tireChange: tireMaintenanceDate,
          tireOverdue: car.tireOverdue,
        };
        if (tireMaintenanceDate in maintenanceInfo) {
          maintenanceInfo[tireMaintenanceDate].push(tireInfo);
        } else {
          maintenanceInfo[tireMaintenanceDate] = [tireInfo];
        }
      }
    });

    return NextResponse.json(maintenanceInfo, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: `Server Error: ${err}` },
      { status: 500 },
    );
  }
}
