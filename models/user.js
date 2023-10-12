const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firebaseId: String,
  email: String,
  name: String,
  cardDrawHistory: [
    {
      date: Date,
      cards: [
        {
          cardId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card',
          },
          orientation: String,
        },
      ],
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
