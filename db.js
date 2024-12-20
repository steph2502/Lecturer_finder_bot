
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURI = process.env.DATABASE_URL || 'mongodb+srv://sonwuagbaizu2202300:EEe8UjbCfXel3u8i@cluster0.efvro.mongodb.net/finderdb?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(dbURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
