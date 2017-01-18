var Character = require('../character');
var assert = require('assert');

describe('Character', function() {
  var homer;

  beforeEach(function() {
    homer = new Character("Homer", 200, "Donut", "Doh!");
  });

  it('character can have name', function() {
    assert.equal("Homer", homer.name);
  });

  it('character can have health', function() {
    assert.equal(200, homer.health);
  })

  it('character can have fav food', function() {
    assert.equal("Donut", homer.favFood);
  }) 

  it('character can have catchphrase', function() {
    assert.equal("Doh!", homer.catchphrase);
  });


  // it('', function() {});


})