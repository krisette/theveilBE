const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
  name: { type: String, required: true },
  name_short: { type: String, required: true },
  value: { type: String, required: true },
  value_int: { type: Number, required: true },
  suit: String,
  type: { type: String, required: true, enum: ['major', 'minor'] },
  meaning_up: { type: String, required: true },
  meaning_rev: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
