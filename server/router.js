var router = require('express').Router();

router.get('/process', function (req, res, next) {
  console.log('Processing!');
  res.end();
  next();
});

module.exports = router;
