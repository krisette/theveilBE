const express = require('express');

const router = express.Router();
const User = require('../../models/user');

router.post('/saveUserInfo', async (req, res) => {
  const { firebaseId, email, name } = req.body;

  try {
    let user = await User.findOne({ firebaseId });

    if (!user) {
      user = new User({ firebaseId, email, name });
      await user.save();
    }

    res.status(200).send('User saved successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
