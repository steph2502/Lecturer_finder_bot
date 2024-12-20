
const mongoose = require('mongoose');
const User = require('./models/User');
const Lecturer = require('./models/Lecturers');


const mongoURI = 'mongodb://localhost:27017/finderdb';

const lecturers = [
    { name: "Emmanuel Frankly", department: "Computer Science", course: "Data Structures",office:"Room D306" },
    { name: "Dr.Adubi ", department: "Computer Science", course: "Data Structures",office:"Room D304" },
    { name: "Prof. Olufunke", department: "Computer Science", course: "Operations research",office:"Room A301" },
    // Add more lecturers here
];

const seedDatabase = async () => {
    try {
       
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');

       
        await Lecturer.deleteMany({});

        
        await Lecturer.insertMany(lecturers);
        console.log('Lecturers have been added to the database');

        
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    }
};

seedDatabase();