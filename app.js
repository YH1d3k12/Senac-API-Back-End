const express = require('express'); // Import the Express library
const exercise1 = require('./routes/exercise1.js');
const exercise2 = require('./routes/exercise2.js');
const exercise3 = require('./routes/exercise3.js');
const exercise4 = require('./routes/exercise4.js');
const exercise5 = require('./routes/exercise5.js');
const exercise6 = require('./routes/exercise6.js');
const exercise7 = require('./routes/exercise7.js');
const exercise8 = require('./routes/exercise8.js');

const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Choose a port for your server

//Middleware to load static files
app.use(express.static('public'));
//Middleware which allows the request of json files
app.use(express.json());

app.use('/1', exercise1);
app.use('/2', exercise2);
app.use('/3', exercise3);
app.use('/4', exercise4);
app.use('/5', exercise5);
app.use('/6', exercise6);
app.use('/7', exercise7);
app.use('/8', exercise8);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});