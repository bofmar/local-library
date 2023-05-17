const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/cool', (req, res) => {
  res.render('cool', { title: 'Things that are cool', name: 'Linux' });
});

module.exports = router;
