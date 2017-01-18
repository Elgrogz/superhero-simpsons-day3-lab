var Rat = function(name) {
  this.name = name;
}

Rat.prototype = {
  infect: function(food) {
    food.calories *= -1;
  }
}

module.exports = Rat;