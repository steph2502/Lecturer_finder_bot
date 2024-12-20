const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const telegramRoute = require('./routes/telegram');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

connectDB();
app.use('/telegram', telegramRoute);

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
