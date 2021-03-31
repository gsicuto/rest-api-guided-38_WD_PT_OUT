const bcrypt = require('bcryptjs/dist/bcrypt');
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const userRepo = require('../repository/user.dao');

const router = Router();

router.post('/signup', async (req, res) => {
  try {
    const user = await userRepo.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error while register new user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userRepo.findUser(username);

    if (!user) {
      return res.status(400).json();
    }
    const compareHash = bcrypt.compareSync(password, user.passwordHash);
    
    if (!compareHash) {
      return res.status(400).json();
    }

    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(
      payload,
      'senhasupersecreta',
      { expiresIn: '1day' },
    );
    res.status(200).json({ payload, token });
  } catch (error) {
    res.status(500).json();
  }
});

module.exports = router;
