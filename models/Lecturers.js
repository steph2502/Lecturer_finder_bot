// models/Lecturer.js

const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: String, required: true },
    course: { type: String, required: true },
    office:{type:String}
});

const Lecturer = mongoose.model('Lecturer', lecturerSchema);

module.exports = Lecturer;