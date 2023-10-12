const express = require('express');
const User = require('../../models/user');

const router = express.Router();

router.get('/history', async (req, res) => {
  try {
    const { firebaseId } = req.query;

    if (!firebaseId) {
      return res.status(400).send('User ID is required');
    }

    const user = await User.findOne({ firebaseId }).populate(
      'cardDrawHistory.cards.cardId',
    );

    if (!user) {
      return res.status(404).send('User not found');
    }

    return res.json(user.cardDrawHistory);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
