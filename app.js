const path = require('path');

const express = require('express');

const mainPageRouter = require('./routes/mainPageRouter');

const app = express();


// Template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', mainPageRouter);

module.exports = app;
