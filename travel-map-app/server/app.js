const express = require("express");
const app = express();

const pinRoute = require("./routes/pins.routes");
const userRoute = require("./routes/users.routes");

app.use(express.json());

app.use("/api/v1/test", (req, res) => [
  res.status(200).json({
    success: true,
    message: "API is working",
    data: "Hello World",
  }),
]);

app.use("/api/v1/pins", pinRoute);
app.use("/api/v1/users", userRoute);

module.exports = app;
