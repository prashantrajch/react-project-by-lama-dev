const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/user.modules");
const { SALT_ROUNDS } = require("../constants");
const asyncHandler = require("../utils/asyncHandler");

// Register
router.post(
  "/register",
  asyncHandler(async (req, res) => {
    // generate  new password
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // create new user
    const newUser = new User(req.body);

    // save user and send response
    const savedUser = await newUser.save();
    res.status(200).json(savedUser._id);
  })
);

// login

router.post("/login", async (req, res) => {
  try {
    // find user
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong Username or Password");

    // validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong Username or Password");

    // send response
    res.status(200).json({ _id: user._id, username: user.username });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
