const express = require("express");

const router = express.Router();

const {
    purchaseSubscription
} = require("../controllers/subscriptionController");

const verifyToken = require("../middleware/authMiddleware");

router.post(
    "/buy",
    verifyToken,
    purchaseSubscription
);

module.exports = router;