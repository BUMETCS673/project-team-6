import mongoose from 'mongoose';
declare global {
  var mongoose: any // This must be a `var` and not a `let / const`
}

const logger = require('pino')();

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

/**
 * Returns a connection to the MongoDB database.
 *
 * Checks to see if the connection to the MongoDB already exists and returns the connection if so.
 * If not, uses the connection string provided in the environment variable MONGODB_URI 
 * to establish a new connection.
 * Logs a success message to the console upon successful connection and an
 * error message upon failure.
 *
 * @async
 * @function
 * @throws {Error} Throws an error if there's an issue connecting to the MongoDB database.
 */

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
    logger.info('mongoDB connected ...');
  } catch (error) {
    cached.promise = null
    logger.info(`Error connecting to MongoDB: ${error}`);
    throw error
  }

  return cached.conn
}

export default dbConnect;