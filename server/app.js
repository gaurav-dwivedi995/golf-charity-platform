const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/db");

const authRoutes = require("./routes/authRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const tournamentRoutes = require("./routes/tournamentRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const donationRoutes = require("./routes/donationRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();
const charityRoutes = require("./routes/charityRoutes");
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/tournament", tournamentRoutes);
app.use("/api/registration", registrationRoutes);
app.use("/api/score", scoreRoutes);
app.use("/api/donation", donationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/charity", charityRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Golf Charity Backend Running 🚀");
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});