const Rat = function(name){
  this.name = name;
  this.health = 50;
}

Rat.prototype.touch = function (food) {
  return food.poison();
};

module.exports = Rat;
