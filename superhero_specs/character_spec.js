var Character = require('../character');
var Food = require('../food');
var Rat = require('../rat');
var assert = require('assert');

describe('Character', function() {
  var homer;
  var mrBurns;
  var bacon;
  var donut;
  var rat;

  beforeEach(function() {
    homer = new Character("Homer", 200, "Donut", "Doh!");
    mrBurns = new Character("Mr Burns", 100, "Catsup", "Excellent!");
    itchy = new Rat("Itchy");
    bacon = new Food("Bacon", 5);
    donut = new Food("Donut", 10);
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

  it('charcter can eat food', function() {
    homer.eat(bacon);
    assert.equal(205, homer.health);
  });

  it('charcter can gain extra health with fav food', function() {
    homer.eat(donut);
    assert.equal(215, homer.health);
  });

  it('character loses health with infected food', function() {
    itchy.infect(bacon);
    homer.eat(bacon);
    assert.equal(195, homer.health);
  });

  it('character starts as not baddy', function() {
    assert.equal(false, homer.isBaddy);
  })

  it('character can become baddy', function() {
    mrBurns.becomeBaddy();
    assert.equal(true, mrBurns.isBaddy);
  })


})