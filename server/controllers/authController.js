const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  createUser,
  findUserByEmail,
  findUserById,
} = require("../models/userModel");

// ======================
// SIGNUP
// ======================
const signup = async (req, res) => {
  try {
    const { full_name, email, password, phone } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({
        message: "All required fields are mandatory",
      });
    }

    findUserByEmail(email, async (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "Email already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      createUser(
        full_name,
        email,
        hashedPassword,
        phone,
        (err) => {
          if (err) {
            return res.status(500).json({
              message: "Signup Failed",
            });
          }

          return res.status(201).json({
            message: "Signup Successful",
          });
        }
      );
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// ======================
// LOGIN
// ======================
const login = (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and Password are required",
    });
  }

  findUserByEmail(email, async (err, result) => {

    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = result[0];

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      },
    });

  });

};

// ======================
// PROFILE
// ======================
const profile = (req, res) => {

  findUserById(req.user.id, (err, result) => {

    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    return res.status(200).json(result[0]);

  });

};

module.exports = {
  signup,
  login,
  profile,
};