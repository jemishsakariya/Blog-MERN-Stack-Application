const nodemailer = require("nodemailer");
require("dotenv").config();

exports.contactMail = (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res
          .status(500)
          .json({ error: "An error occurred while sending the email." });
      } else {
        console.log(info.response);
        res.status(200).json({ message: "Email sent successfully." });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error Sending Mail",
    });
  }
};
