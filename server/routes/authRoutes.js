const express = require("express");
const router = express.Router();

const { register, login } = require("../controller/authController");

router.post("/dashboard/register", register);
router.post("/dashboard/login", login);

module.exports = router;
