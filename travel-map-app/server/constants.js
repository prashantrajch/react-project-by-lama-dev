const DB_NAME = "travel-map-app";
const PORT = process.env.PORT || 3001;
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS || 10);

module.exports = { DB_NAME, PORT, SALT_ROUNDS };
