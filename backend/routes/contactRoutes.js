const express = require("express");
const router = express.Router();
const { submitContactForm } = require("../controllers/contactController");

router.post("/contact", submitContactForm);

// router.post("/contact", (req, res) => {
//   console.log("🔹 POST /api/contact hit!"); // Debug log
//   console.log("Received Data:", req.body); // Log request body

//   submitContactForm(req, res);
// });

module.exports = router;
