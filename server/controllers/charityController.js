const {

    getAllCharities,

    getCharityById,

    createCharity,

    updateRaisedAmount

} = require("../models/charityModel");


// Get All
const allCharities = (req, res) => {

    getAllCharities(

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


// Get By ID
const charityById = (req, res) => {

    getCharityById(

        req.params.id,

        (err, result) => {

            if (err) {

                return res.status(500).json({

                    message: "Database Error"

                });

            }

            if (result.length === 0) {

                return res.status(404).json({

                    message: "Charity Not Found"

                });

            }

            return res.status(200).json(result[0]);

        }

    );

};


// Create Charity
const addCharity = (req, res) => {

    const {

        name,

        category,

        raised,

        goal

    } = req.body;

    createCharity(

        name,

        category,

        raised,

        goal,

        (err) => {

            if (err) {

                return res.status(500).json({

                    message: "Unable To Create Charity"

                });

            }

            return res.status(201).json({

                message: "Charity Created Successfully"

            });

        }

    );

};


module.exports = {

    allCharities,

    charityById,

    addCharity

};