const Rat = function(name){
  this.name = name;
}

Rat.prototype.touch = function (food) {
  return food.poison();
};

module.exports = Rat;
