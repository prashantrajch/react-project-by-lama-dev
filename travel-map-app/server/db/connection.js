const mongoose = require("mongoose");

// Connect to the database

const connectDB = async (URI, DB_NAME) => {
  try {
    const connectionInstance = await mongoose.connect(`${URI}/${DB_NAME}`);
    console.log(
      "Database connected successfully to the server host: ",
      connectionInstance.connection.host
    );
  } catch (err) {
    console.log("Error connecting to the database. Exiting now....", err);
  }
};

module.exports = connectDB;
