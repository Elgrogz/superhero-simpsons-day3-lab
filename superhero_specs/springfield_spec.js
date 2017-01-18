var Character = require('../character');
var Springfield = require('../springfield');
var assert = require('assert');

describe('Springfield', function() {

  var homer;
  var mrBurns;
  var springfield;

  beforeEach(function() {
    springfield = new Springfield();
  });
  homer = new Character("Homer", 200, "Donut", "Doh!");
  mrBurns = new Character("Mr Burns", 100, "Catsup", "Excellent!");

  it('people array starts empty', function() {
    assert.equal(0, springfield.characters.length);
  });

  it('can add characters', function() {
    springfield.add(homer);
    assert.equal(1, springfield.characters.length);
  });

})