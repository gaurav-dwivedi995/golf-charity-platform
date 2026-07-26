const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/adminMiddleware");

const {
    dashboard,
    users
} = require("../controllers/adminController");

// Dashboard Stats
router.get(
    "/dashboard",
    verifyToken,
    verifyAdmin,
    dashboard
);

// All Users
router.get(
    "/users",
    verifyToken,
    verifyAdmin,
    users
);

module.exports = router;