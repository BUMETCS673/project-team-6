import mongoose, { Schema, models } from 'mongoose';

/**
 * Schema definition for a Car.
 *
 * @typedef {Object} CarSchemaDef
 * @property {string} manufacturer          - The manufacturer of the car
 * @property {string} type                  - The type of the car.
 * @property {number} year                  - The year of the car.
 * @property {string} license               - The license number of the car.
 * @property {number} mileage               - The current mileage of the car.
 * @property {string} model                 - The model of the car.
 * @property {string} color                 - The color of the car.
 * @property {number} seats                 - The number of seats in the car.
 * @property {string} condition             - The condition of the car.
 * @property {number} mileageLastOilChange  - The mileage of last oil change.
 * @property {number} mileageLastTireChange - The mileage of last tire change.
 * @property {Date} dateNextOilChange       - The date of next oil change.
 * @property {Date} dateNextTireChange      - The date of next tire change.
 * @property {Boolean} oilOverdue           - True if the car oil change is overdue.
 * @property {Boolean} tireOverdue          - True if the car tire change is overdue.
 * @property {Boolean} maintenanceRequired  - True if the car needs maintenance.
 * @property {Date} createdAt               - The date and time when the car object was created
 *                                          (automatically generated).
 */

/**
 * Mongoose schema for a Car.
 *
 * @type {Schema<CarSchemaDef>}
 */
const CarSchema = new Schema(
  {
    manufacturer: { type: String, required: true },
    type: { type: String, required: true },
    year: { type: Number, required: true },
    license: { type: String, required: true },
    mileage: { type: Number, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
    seats: { type: Number, required: true },
    condition: { type: String, required: true },
    mileageLastOilChange: { type: Number, required: true },
    mileageLastTireChange: { type: Number, required: true },
    dateNextOilChange: { type: Date, required: false },
    dateNextTireChange: { type: Date, required: false },
    oilOverdue: { type: Boolean, required: true },
    tireOverdue: { type: Boolean, required: true },
    maintenanceRequired: { type: Boolean, required: true },
  },
  { timestamps: true },
);

/**
 * Mongoose model for a Car.
 *
 * If the Car model is already defined, it retrieves the existing model.
 * Otherwise, it creates a new model using the CarSchema.
 *
 * @type {mongoose.Model}
 */
export const Car = models.Car || mongoose.model('Car', CarSchema);

export default Car;
