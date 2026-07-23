const {
    donate,
    myDonations,
    allDonations,
    donationById
} = require("../models/donationModel");

// Donate
const createDonation = (req, res) => {

    const user_id = req.user.id;

    const {
        amount,
        payment_method,
        transaction_id
    } = req.body;

    if (!amount) {
        return res.status(400).json({
            message: "Amount is required"
        });
    }

    donate(
        user_id,
        amount,
        payment_method,
        transaction_id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    message: "Donation Failed"
                });
            }

            return res.status(201).json({
                message: "Donation Successful"
            });

        }
    );

};

// My Donations
const getMyDonations = (req, res) => {

    myDonations(
        req.user.id,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            return res.status(200).json(result);

        }
    );

};

// All Donations
const getAllDonations = (req, res) => {

    allDonations(
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            return res.status(200).json(result);

        }
    );

};

// Donation By ID
const getDonationById = (req, res) => {

    donationById(
        req.params.id,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Donation Not Found"
                });
            }

            return res.status(200).json(result[0]);

        }
    );

};

module.exports = {
    createDonation,
    getMyDonations,
    getAllDonations,
    getDonationById
};