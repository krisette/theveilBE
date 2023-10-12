/* eslint-disable no-underscore-dangle */
const express = require('express');

const router = express.Router();
const drawCardsLogic = require('../utils/drawCardsLogic');
const saveDrawHistory = require('../middleware/saveDrawHistory');

router.post(
  '/cards',
  async (req, res, next) => {
    try {
      const { firebaseId, count: countStr } = req.body;
      const count = parseInt(countStr, 10) || 1;
      const drawnCards = await drawCardsLogic(count);

      const drawnCardData = drawnCards.map((card) => ({
        cardId: card._id,
        orientation: card.orientation,
      }));

      req.drawnCards = drawnCards;
      req.drawnCardData = drawnCardData;
      req.firebaseId = firebaseId;

      next();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
  saveDrawHistory,
  (req, res) => {
    res.status(200).json(req.drawnCards);
  },
);

module.exports = router;
