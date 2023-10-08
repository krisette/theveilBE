const express = require('express');

const router = express.Router();
const drawCardsLogic = require('../utils/drawCardsLogic');

router.get('/cards', async (req, res) => {
  try {
    const count = parseInt(req.query.count, 10) || 1;
    const drawnCards = await drawCardsLogic(count);
    res.json(drawnCards);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
