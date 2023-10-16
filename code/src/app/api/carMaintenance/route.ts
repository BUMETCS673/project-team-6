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
        { message: `There was an error retrieving all cars` },
        { status: 500 },
      );
    }

    const maintenanceInfo = {};

    cars.forEach((car) => {
      const oilMaintenanceDate = car.dateNextOilChange;
      const tireMaintenanceDate = car.dateNextTireChange;

      // Convert to Date Object and parse only date (not time)

      if (oilMaintenanceDate) {
        const oilChangeDate = oilMaintenanceDate.toISOString();
        const oilInfo = {
          // eslint-disable-next-line no-underscore-dangle
          carId: car._id,
          oilOverdue: car.oilOverdue,
        };
        if (oilChangeDate in maintenanceInfo) {
          if( maintenanceInfo[oilChangeDate]["oil"]) {
            maintenanceInfo[oilChangeDate]["oil"].push(oilInfo);
          } else {
            maintenanceInfo[oilChangeDate]["oil"] = [oilInfo]
          }
        } else {
          maintenanceInfo[oilChangeDate] = {
            "oil": [oilInfo]
          }
        }
      }

      if (tireMaintenanceDate) {
        const tireChangeDate = tireMaintenanceDate.toISOString();
        const tireInfo = {
          // eslint-disable-next-line no-underscore-dangle
          carId: car._id,
          tireOverdue: car.tireOverdue,
        };
        if (tireChangeDate in maintenanceInfo) {
          if( maintenanceInfo[tireChangeDate]["tire"]) {
            maintenanceInfo[tireChangeDate]["tire"].push(tireInfo);
          } else {
            maintenanceInfo[tireChangeDate]["tire"] = [tireInfo]
          }
        } else {
          maintenanceInfo[tireChangeDate] = {
            "tire": [tireInfo]
          }
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
