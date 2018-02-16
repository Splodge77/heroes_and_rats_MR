const Food = function(name, replenishment){
  this.name = name;
  this.replenishment = replenishment;
  this.poisoned = false;
}

module.exports = Food;
