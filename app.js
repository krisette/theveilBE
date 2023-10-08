const express = require('express');
const cors = require('cors');
const drawCardsRouter = require('./routes/drawCards');
const gptReadingRouter = require('./routes/gptReading');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(drawCardsRouter);
app.use(gptReadingRouter);

module.exports = app;
