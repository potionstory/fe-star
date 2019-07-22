const express = require('express');
const router = express.Router();
const member = require('./member');

router.get('/', (req, res) => {
  res.send('<h1>FE-star API</h1>');
});

router.use('/member', member);

module.exports = router;