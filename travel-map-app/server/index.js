require("dotenv").config();

const app = require("./app");
const { DB_NAME, PORT } = require("./constants");
const connectDB = require("./db/connection");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

connectDB(MONGODB_URI, DB_NAME)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error on connecting to the database", err);
  });
