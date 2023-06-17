const express = require("express");
const router = express.Router();

const { contactMail } = require("../controller/mailController");

router.post("/contactmail", contactMail);

module.exports = router;
