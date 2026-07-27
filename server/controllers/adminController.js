const {

    getDashboardStats,
    getAllUsers,
    deleteUser,
    updateMembership,
    makeAdmin

} = require("../models/adminModel");

// Dashboard
const dashboard = (req, res) => {

    getDashboardStats((err, result) => {

        if (err)
            return res.status(500).json({
                message: "Database Error"
            });

        res.json(result[0]);

    });

};

// Users
const users = (req, res) => {

    getAllUsers((err, result) => {

        if (err)
            return res.status(500).json({
                message: "Database Error"
            });

        res.json(result);

    });

};

// Delete User
const removeUser = (req, res) => {

    deleteUser(req.params.id, (err) => {

        if (err)
            return res.status(500).json({
                message: "Delete Failed"
            });

        res.json({
            message: "User Deleted"
        });

    });

};

// Update Membership
const membership = (req, res) => {

    updateMembership(

        req.params.id,

        req.body.membership,

        (err) => {

            if (err)
                return res.status(500).json({
                    message: "Update Failed"
                });

            res.json({
                message: "Membership Updated"
            });

        }

    );

};

// Make Admin
const admin = (req, res) => {

    makeAdmin(req.params.id, (err) => {

        if (err)
            return res.status(500).json({
                message: "Update Failed"
            });

        res.json({
            message: "User is now Admin"
        });

    });

};

module.exports = {

    dashboard,
    users,
    removeUser,
    membership,
    admin

};