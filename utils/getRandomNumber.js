const axios = require('axios');

const getRandomNumber = async (num, min, max) => {
  try {
    if (
      !Number.isInteger(num)
      || num <= 0
      || !Number.isInteger(min)
      || min < 0
      || !Number.isInteger(max)
      || max < 0
    ) {
      throw new Error(`Invalid parameters: num=${num}, min=${min}, max=${max}`);
    }

    const response = await axios.get('https://www.random.org/integers/', {
      params: {
        num,
        min,
        max,
        col: 1,
        base: 10,
        format: 'plain',
        rnd: 'new',
      },
    });

    const data = response.data.trim().split('\n').map(Number);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch random number');
  }
};

module.exports = getRandomNumber;
