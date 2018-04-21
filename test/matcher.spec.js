const expect = require('chai').expect;
const patterns = require('../services/patterns').patterns;
const isMatch = require('../services/matcher').isMatch;

const SSN_WITHOUT_KEYWORDS = "Hello 123-45-6789 this is a nice num";
const SSN_WITH_KEYWORDS = "The number 123-45-6789 represents an SSN in this string";
const SSN_MATCHER = patterns['SSN'];

describe('isMatch()', () => {
  it('SSN without keywords so should not match', () => {
    const res = isMatch(SSN_WITHOUT_KEYWORDS, SSN_MATCHER);
    expect(res).to.be.equal(false);
  });
  it('SSN with keywords so should match', () => {
    const res = isMatch(SSN_WITH_KEYWORDS, SSN_MATCHER);
    expect(res).to.be.equal(true);
  });
});