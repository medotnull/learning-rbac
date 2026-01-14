const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');


const signupController = async (req, res) => {
    const { username, password, role } = req.body;
};

const loginController = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        password: hashedPassword,
        role
    })

    await newUser.save();

    res.status(201).json({
         message: 'User registered successfully with username: ' + username
    });
};

module.exports = { signupController, loginController };