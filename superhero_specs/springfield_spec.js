var Springfield = require('../springfield');
var assert = require('assert');

describe('Springfield', function() {

  var springfield;

  beforeEach(function() {
    springfield = new Springfield();
  });

  it('people array starts empty', function() {
    assert.equal(0, springfield.characters.length);
  });

})