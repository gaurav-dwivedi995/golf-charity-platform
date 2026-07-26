const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/adminMiddleware");

const {
    dashboard
} = require("../controllers/adminController");

// Dashboard
router.get(
    "/dashboard",
    verifyToken,
    verifyAdmin,
    dashboard
);

module.exports = router;