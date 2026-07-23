const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    create,
    getAll,
    getById,
    update,
    remove
} = require("../controllers/tournamentController");

// Create Tournament
router.post("/create", verifyToken, create);

// Get All Tournaments
router.get("/all", getAll);

// Get Tournament By ID
router.get("/:id", getById);

// Update Tournament
router.put("/update/:id", verifyToken, update);

// Delete Tournament
router.delete("/delete/:id", verifyToken, remove);

module.exports = router;