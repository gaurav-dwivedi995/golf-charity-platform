const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    getProfile,
    editProfile
} = require("../controllers/userController");

router.get(
    "/profile",
    verifyToken,
    getProfile
);

router.put(
    "/profile/update",
    verifyToken,
    editProfile
);

module.exports = router;