import mongoose from 'mongoose';

const logger = require('pino')();
/**
 * Establishes a connection to the MongoDB database.
 *
 * Uses the connection string provided in the environment variable MONGODB_URI.
 * Logs a success message to the console upon successful connection and an
 * error message upon failure.
 *
 * @async
 * @function
 * @throws {Error} Throws an error if there's an issue connecting to the MongoDB database.
 */

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    logger.info('mongoDB connected ...');
  } catch (error) {
    logger.info('Error connecting to MongoDB', error);
  }
};

export default dbConnect;
