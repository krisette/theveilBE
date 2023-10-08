const getRandomNumber = require('./getRandomNumber');
const cardData = require('../data/cards.json');

const { cards } = cardData;

const drawCardsLogic = async (count) => {
  try {
    const maxIndex = cards.length - 1;

    if (!Number.isInteger(maxIndex) || maxIndex < 0) {
      throw new Error(`Invalid max index: ${maxIndex}`);
    }

    const drawnCards = [];
    const promises = [];

    for (let i = 0; i < count; i += 1) {
      const randomIndexPromise = getRandomNumber(1, 0, maxIndex);
      const randomOrientationPromise = getRandomNumber(1, 0, 1);

      promises.push(randomIndexPromise);
      promises.push(randomOrientationPromise);
    }

    const results = await Promise.all(promises);

    for (let i = 0; i < count; i += 1) {
      const randomIndex = results[i * 2];
      const randomOrientation = results[i * 2 + 1];

      const drawnCard = {
        ...cards[randomIndex],
        orientation: randomOrientation === 0 ? 'up' : 'reversed',
      };

      drawnCards.push(drawnCard);
    }

    return drawnCards;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to draw cards');
  }
};

module.exports = drawCardsLogic;
