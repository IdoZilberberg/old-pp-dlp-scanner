const patterns = require('./patterns').patterns;
const _ = require('lodash');

function matchPatterns(input) {

  const matches = [];
  _.forEach(patterns, pattern => {
    if(isMatch(input, pattern)) {
      matches.push(pattern.name);
    }
  });

  return matches;
}

function isMatch(input, pattern)  {

  const hasKeywords = pattern.keywordsRegExp.exec(input);
  const hasItem = pattern.itemRegExp.exec(input);

  return hasKeywords !== null && hasItem != null;
}

module.exports = {
  matchPatterns: matchPatterns,
  isMatch: isMatch
};