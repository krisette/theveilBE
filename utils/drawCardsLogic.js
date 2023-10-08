const getRandomNumber = require('./getRandomNumber');
const cardData = require('../data/cards.json');

const { cards } = cardData;

const drawCardsLogic = async (count) => {
  try {
    const maxIndex = cards.length - 1;

    if (!Number.isInteger(maxIndex) || maxIndex < 0) {
      throw new Error(`Invalid max index: ${maxIndex}`);
    }

    const randomIndices = await getRandomNumber(count, 0, maxIndex);
    const randomOrientations = await getRandomNumber(count, 0, 1);

    const drawnCards = randomIndices.map((index, i) => ({
      ...cards[index],
      orientation: randomOrientations[i] === 0 ? 'up' : 'reversed',
    }));

    return drawnCards;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to draw cards');
  }
};

module.exports = drawCardsLogic;
