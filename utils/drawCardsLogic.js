const Card = require('../models/card');
const getRandomNumber = require('./getRandomNumber');

const drawCardsLogic = async (count) => {
  try {
    const maxIndex = await Card.countDocuments();

    if (!Number.isInteger(maxIndex) || maxIndex < 0) {
      throw new Error(`Invalid max index: ${maxIndex}`);
    }

    const randomIndices = await getRandomNumber(count, 0, maxIndex - 1);
    const randomOrientations = await getRandomNumber(count, 0, 1);

    const drawnCards = await Promise.all(
      randomIndices.map(async (value, index) => {
        let orientation;

        if (randomOrientations[index] === 0) {
          orientation = 'up';
        } else if (randomOrientations[index] === 1) {
          orientation = 'reversed';
        } else {
          orientation = 'up';
        }
        const card = await Card.findOne().skip(value).limit(1);

        return {
          // eslint-disable-next-line no-underscore-dangle
          ...card._doc,
          orientation,
        };
      }),
    );
    return drawnCards;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to draw cards');
  }
};

module.exports = drawCardsLogic;
