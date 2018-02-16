const Rat = function(name){
  this.name = name;
}

Rat.prototype.touch = function (food) {
  food.poisoned = true;
};

module.exports = Rat;
