const User = require('../models/user');

async function saveDrawHistory(req, res, next) {
  try {
    const { firebaseId, drawnCardData } = req;

    await User.findOneAndUpdate(
      { firebaseId },
      {
        $push: { cardDrawHistory: { date: new Date(), cards: drawnCardData } },
      },
      { new: true },
    );

    next();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = saveDrawHistory;
