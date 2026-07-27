const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/adminMiddleware");

const {

    dashboard,
    users,
    removeUser,
    membership,
    admin

} = require("../controllers/adminController");

router.get(
    "/dashboard",
    verifyToken,
    verifyAdmin,
    dashboard
);

router.get(
    "/users",
    verifyToken,
    verifyAdmin,
    users
);

router.delete(
    "/users/:id",
    verifyToken,
    verifyAdmin,
    removeUser
);

router.put(
    "/membership/:id",
    verifyToken,
    verifyAdmin,
    membership
);

router.put(
    "/make-admin/:id",
    verifyToken,
    verifyAdmin,
    admin
);

module.exports = router;