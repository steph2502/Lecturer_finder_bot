const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
// const { filterLecturers } = require('./data');
const { findUser,validatePassword , registerUser} = require('./users');
const Lecturer = require('../models/Lecturers');
const router = express.Router();
const connectDB = require('../db');


const token = '7630430232:AAEplBmXm6trvWAutsGMwTB5FiNP4h5AW9Y';
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome to the Lecturer Finder bot! Use /help for assistance.");
});

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, "Available commands:\n/lecturers - View lecturers\n/search - Search for a lecturer\n/login - Login\n/start - Start the bot\n/register - Register\n/logout - Logout");
});

bot.onText(/\/lecturers/, async (msg) => {
    try {
        const lecturers = await Lecturer.find(); // Fetch all lecturers from the database

        if (lecturers.length > 0) {
            const lecturerList = lecturers.map(lecturer => `${lecturer.name} - ${lecturer.department} (${lecturer.course}) - Office: ${lecturer.office}`).join('\n');
            bot.sendMessage(msg.chat.id, `Lecturers:\n${lecturerList}`);
        } else {
            bot.sendMessage(msg.chat.id, "No lecturers found.");
        }
    } catch (error) {
        console.error('Error fetching lecturers:', error);
        bot.sendMessage(msg.chat.id, "An error occurred while fetching lecturers.");
    }
});

bot.onText(/\/search (.+)/, async (msg, match) => {
    const userId = msg.chat.id;
    const query = match[1].toLowerCase();

     if (!userSessions[userId]) {
        bot.sendMessage(msg.chat.id, "You need to log in to use the search feature. Use /login to log in.");
        return;
    }
    try {
        const results = await Lecturer.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { department: { $regex: query, $options: 'i' } },
                { course: { $regex: query, $options: 'i' } },
                { office: { $regex: query, $options: 'i' } } ,
            ]
        });

        if (results.length > 0) {
            const resultList = results.map(lecturer => `${lecturer.name} - ${lecturer.department} (${lecturer.course}) - Office: ${lecturer.office}`).join('\n');
            bot.sendMessage(msg.chat.id, `Search Results:\n${resultList}`);
        } else {
            bot.sendMessage(msg.chat.id, "No lecturers found matching your query.");
        }
    } catch (error) {
        console.error('Error searching lecturers:', error);
        bot.sendMessage(msg.chat.id, "An error occurred while searching for lecturers.");
    }
});


bot.onText(/\/register/, async (msg) => {
    bot.sendMessage(msg.chat.id, "Please enter a username:");

    bot.once('message', async (response) => {
        const username = response.text;
        bot.sendMessage(msg.chat.id, "Please enter a password:");

        bot.once('message', async (passwordResponse) => {
            const password = passwordResponse.text;

            const success = await registerUser(username, password);
            if (success) {
                bot.sendMessage(msg.chat.id, `Registration successful! Welcome, ${username}!`);
            } else {
                bot.sendMessage(msg.chat.id, "Username already exists. Please choose a different username.");
            }
        });
    });
});

bot.onText(/\/login/, async (msg) => {
    bot.sendMessage(msg.chat.id, "Please enter your username:");

    bot.once('message', async (response) => {
        const username = response.text;
        bot.sendMessage(msg.chat.id, "Please enter your password:");

        bot.once('message', async (passwordResponse) => {
            const password = passwordResponse.text;

            const isValid = await validatePassword(username, password);
            if (isValid) {
                bot.sendMessage(msg.chat.id, `Welcome, ${username}! You are now logged in.`);
            } else {
                bot.sendMessage(msg.chat.id, "Invalid credentials. Please try again.");
            }
        });
    });
});
bot.onText(/\/logout/, (msg) => {
    const userId = msg.chat.id;

    if (userSessions[userId]) {
        delete userSessions[userId]; // Remove the user's session
        bot.sendMessage(msg.chat.id, "You have been logged out.");
    } else {
        bot.sendMessage(msg.chat.id, "You are not logged in.");
    }
});

router.get('/test', (req, res) => {
    res.send("Telegram bot is running with polling!");
});

bot.on('message', (msg) => {
    if (!msg.text.startsWith('/')) {
        bot.sendMessage(msg.chat.id, "I only understand commands. Use /help for assistance.");
    }
});
module.exports = router;

