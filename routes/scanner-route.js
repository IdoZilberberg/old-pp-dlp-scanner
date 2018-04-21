const express = require('express');
const logger = require('winston');
const router = express.Router();
const matcher = require('../services/matcher');

/* GET users listing. */
router.post('/', function(req, res, next) {
  const input = req.body;

  logger.info(`Received input: ${input}`);

  const matchedPatterns = matcher.matchPatterns(input);
  return res.status(200).json({status: 'ok', matchedPatterns: matchedPatterns});
});

module.exports = router;
