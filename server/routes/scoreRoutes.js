const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    createScore,
    leaderboard
} = require("../controllers/scoreController");

router.post(
    "/add",
    verifyToken,
    createScore
);

router.get(
    "/leaderboard/:id",
    leaderboard
);

module.exports = router;