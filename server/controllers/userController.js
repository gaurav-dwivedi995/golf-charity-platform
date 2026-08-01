const {

    findUserById,
    updateProfile

} = require("../models/UserModel");

const getProfile = (req, res) => {

    findUserById(

        req.user.id,

        (err, result) => {

            if (err) {

                return res.status(500).json({

                    message: "Database Error"

                });

            }

            if (result.length === 0) {

                return res.status(404).json({

                    message: "User Not Found"

                });

            }

            return res.json(result[0]);

        }

    );

};

const editProfile = (req, res) => {

    const {

        full_name,
        email,
        phone

    } = req.body;

    updateProfile(

        req.user.id,
        full_name,
        email,
        phone,

        (err) => {

            if (err) {

                return res.status(500).json({

                    message: "Update Failed"

                });

            }

            return res.json({

                message: "Profile Updated"

            });

        }

    );

};

module.exports = {

    getProfile,
    editProfile

};