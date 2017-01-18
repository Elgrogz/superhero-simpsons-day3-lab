var Food = require('../food');
var assert = require('assert');

describe('Food', function() {
  var donut;

  beforeEach(function() {
    donut = new Food("Donut", 10);
  });

  it('food can have name', function() {
    assert.equal("Donut", donut.name);
  });

})
