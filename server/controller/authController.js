const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create, Try again" });
  }
};

exports.login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const checkCorrextPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!checkCorrextPassword) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, ...rest } = user._doc;

    const token = jwt.sign(
      { id: user._id, role: user.name },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    res
      .cookie("blogToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "Successfully login",
        token,
        data: { ...rest },
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to login" });
  }
};
