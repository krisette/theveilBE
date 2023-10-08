const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/gpt-reading', async (req, res) => {
  const { cards } = req.body;

  if (!Array.isArray(cards) || cards.length !== 3) {
    return res.status(400).send('Invalid cards');
  }

  const prompt = `Interpret a three-card tarot spread for "Past, Present, Future" with the following cards:\n${cards
    .map((card) => (card.orientation === 'up' ? card.name : `${card.name} Reversed`))
    .join('\n')}`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      },
    );
    res.json({ data: response.data.choices[0].message.content.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

  return undefined;
});

module.exports = router;
