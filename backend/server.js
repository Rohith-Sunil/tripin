const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const contactForm = require("./routes/contactRoutes");

const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", contactForm);

// app.use(
//   "/api",
//   (req, res, next) => {
//     console.log("✅ Request reached /api/contact");
//     next();
//   },
//   require("./routes/contactRoutes")
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
