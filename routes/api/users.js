const express = require('express');
const router = express.Router();

// Import Models
const User = require('../../models/User');

router.post('/', async (req, res) => {
  const { user } = req.body;

  const newUser = new User({
    user: user,
  });

  console.log(newUser);

  try {
    if (!newUser) {
      return res.statusMessage(400).json({ msg: 'Please check user fields' });
    }
    console.log('newUser', newUser);
    await newUser.save();

    return res.status(200).json(newUser);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ error });
  }
});

module.exports = router;
