const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    createDonation,
    getMyDonations,
    getAllDonations,
    getDonationById
} = require("../controllers/donationController");

// Donate
router.post(
    "/donate",
    verifyToken,
    createDonation
);

// My Donations
router.get(
    "/my",
    verifyToken,
    getMyDonations
);

// All Donations
router.get(
    "/all",
    verifyToken,
    getAllDonations
);

// Donation By ID
router.get(
    "/:id",
    verifyToken,
    getDonationById
);

module.exports = router;