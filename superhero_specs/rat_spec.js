var Rat = require('../rat');
var Food = require('../food');
var assert = require('assert')

describe('Rat', function() {

  var itchy;
  var donut;

  beforeEach(function() {
    itchy = new Rat("Itchy");
    donut = new Food("Donut", 10);
  });

  it('rat can have a name', function() {
    assert.equal("Itchy", itchy.name);
  });

  it('rat can infect food', function() {
    itchy.infect(donut);
    assert.equal(-10, donut.calories);
  })

})