const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {

    allCharities,

    charityById,

    addCharity

} = require("../controllers/charityController");


// Get All Charities
router.get(
    "/all",
    allCharities
);


// Get Charity By ID
router.get(
    "/:id",
    charityById
);


// Create Charity
router.post(
    "/create",
    verifyToken,
    addCharity
);

module.exports = router;