const express = require('express');
const cors = require('cors');
const drawCardsRouter = require('./routes/drawCards');
const gptReadingRouter = require('./routes/gptReading');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(drawCardsRouter);
app.use(gptReadingRouter);

module.exports = app;
