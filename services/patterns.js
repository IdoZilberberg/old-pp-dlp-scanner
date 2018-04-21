const rawPatterns = require('../patterns-config');
const _ = require('lodash');

const patterns = init();
function init() {

  const res = {};

  _.forEach(_.keys(rawPatterns), name => {
    res[name] = {
      name: name,
      keywordsRegExp: RegExp(rawPatterns[name].contextKeywords.join('|')),
      itemRegExp: RegExp(rawPatterns[name].regularExpressions.join('|'))
    }
  });

  return res;
}

module.exports = {
  patterns: patterns
};