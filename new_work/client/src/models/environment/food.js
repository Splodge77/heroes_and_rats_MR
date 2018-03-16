const Food = function(name, replenishment){
  this.name = name;
  this.replenishment = replenishment;
  this.poisoned = false;
}

Food.prototype.poison = function () {
  return this.poisoned = true;
};

module.exports = Food;
