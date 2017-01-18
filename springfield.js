var Springfield = function() {
  this.characters = [];
}

Springfield.prototype = {
  add: function(character) {
    this.characters.push(character);
  }
}

module.exports = Springfield;