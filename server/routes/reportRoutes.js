const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/adminMiddleware");

const {
    report
} = require("../controllers/reportController");

// Admin Reports
router.get(
    "/",
    verifyToken,
    verifyAdmin,
    report
);

module.exports = router;