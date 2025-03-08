const Contact = require("../models/Contact");

// @desc   Submit Contact Form
// @route  POST /api/contact
// @access Public
const submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res
        .status(400)
        .json({ error: "All required fields must be filled!" });
    }

    console.log(req.body);

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      address,
      message,
    });
    await newContact.save();

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

module.exports = { submitContactForm };
