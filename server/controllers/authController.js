const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  createUser,
  findUserByEmail,
  findUserById,
  updatePassword,
} = require("../models/UserModel");

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

    delete result[0].password;

    return res.status(200).json(result[0]);
  });
};

// ======================
// CHANGE PASSWORD
// ======================
const changePassword = (req, res) => {
  const { oldPassword, newPassword } = req.body;

  findUserById(req.user.id, async (err, result) => {
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

    const user = result[0];

    const match = await bcrypt.compare(
      oldPassword,
      user.password
    );

    if (!match) {
      return res.status(400).json({
        message: "Old Password Incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    updatePassword(
      req.user.id,
      hashedPassword,
      (err) => {
        if (err) {
          return res.status(500).json({
            message: "Password Update Failed",
          });
        }

        return res.json({
          message: "Password Changed Successfully",
        });
      }
    );
  });
};

module.exports = {
  signup,
  login,
  profile,
  changePassword,
};