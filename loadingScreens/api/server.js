const express = require("express");
const { user, videos } = require("./fakeData");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/user/1", (req, res) => {
  setTimeout(() => {
    res.json(user);
  }, 3000);
});

app.get("/api/videos/1", (req, res) => {
  setTimeout(() => {
    res.json(videos);
  }, 5000);
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from the server" });
});

app.listen(8000, () => {
  console.log("Backend Server is running on port 8000");
});
