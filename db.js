
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURI = process.env.DATABASE_URL || 'mongodb://localhost:27017/finderdb';
        await mongoose.connect(dbURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
