var Character = function(name, health, favFood, catchphrase){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.catchphrase = catchphrase;
  this.isBaddy = false;
}

Character.prototype = {
  eat: function(food) {
    if (food.type === this.favFood) {
    this.health += (food.calories * 1.5);
    } else {
      this.health += food.calories;
    }
  },
  becomeBaddy: function() {
    this.isBaddy = true;
  }

}

module.exports = Character;