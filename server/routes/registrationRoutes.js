const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    register,
    myRegistrations,
    cancel
} = require("../controllers/registrationController");

// Register Tournament
router.post(
    "/register",
    verifyToken,
    register
);

// My Registrations
router.get(
    "/my",
    verifyToken,
    myRegistrations
);

// Cancel Registration
router.delete(
    "/cancel/:id",
    verifyToken,
    cancel
);

module.exports = router;
