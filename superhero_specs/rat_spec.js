var Rat = require('../rat');
var assert = require('assert')

describe('Rat', function() {

  var itchy;

  beforeEach(function() {
    itchy = new Rat("Itchy");
  });

  it('rat can have a name', function() {
    assert.equal("Itchy", itchy.name);
  });

})