const Rat = function(name){
  this.name = name;
  this.health = 50;
  this.dead = false;
}

Rat.prototype.touch = function (food) {
  if(this.dead === false){
    food.poison();
  }
};

Rat.prototype.checkIfDead = function(){
  if(this.health <= 0){
    return this.dead = true
  }
};

module.exports = Rat;
