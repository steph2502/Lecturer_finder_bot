

const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import the User model


const findUser = async (username) => {
    return await User.findOne({ username });
};


const registerUser = async (username, password) => {
    const existingUser = await findUser(username);
    if (existingUser) {
        return false; // Username already exists
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save(); // Save to MongoDB
    return true; // Registration successful
};


const validatePassword = async (username, password) => {
    const user = await findUser(username);
    if (user) {
        return await bcrypt.compare(password, user.password); // Compare hashed password
    }
    return false; // User not found
};

module.exports = { findUser, validatePassword, registerUser };