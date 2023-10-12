const express = require('express');
const cors = require('cors');
const drawCardsRouter = require('./routes/drawCards');
const gptReadingRouter = require('./routes/gptReading');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(drawCardsRouter);
app.use(gptReadingRouter);
app.use('/user', userRoutes);

module.exports = app;
