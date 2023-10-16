import mongoose, { Schema, models } from 'mongoose';

/**
 * Schema definition for a User.
 *
 * @typedef {Object} UserSchemaDef
 * @property {string} firstname - The first name of the user.
 * @property {string} lastname - The last name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The hashed password of the user.
 * @property {Date} createdAt - The date and time when the user was created
 *                              (automatically generated).
 */

/**
 * Mongoose schema for a User.
 *
 * @type {Schema<UserSchemaDef>}
 */
const UserSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

/**
 * Mongoose model for a User.
 *
 * If the User model is already defined, it retrieves the existing model.
 * Otherwise, it creates a new model using the UserSchema.
 *
 * @type {mongoose.Model}
 */
export const User = models.User || mongoose.model('User', UserSchema);

export default User;
