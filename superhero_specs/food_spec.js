var Food = require('../food');
var assert = require('assert');

describe('Food', function() {
  var donut;

  beforeEach(function() {
    donut = new Food("Donut", 10);
  });

  it('food can have type', function() {
    assert.equal("Donut", donut.type);
  });

  it('food can have calories', function() {
    assert.equal(10, donut.calories);
  });
  
});
