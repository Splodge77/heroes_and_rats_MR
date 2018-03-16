const Orc = function(name, weapon){
  this.name = name;
  this.health = 150;
  this.damage = 30;
  this.weapon = weapon;
  this.dead = false;
}

Orc.prototype.isArmed = function () {
  this.damage += this.weapon.damage;
};

Orc.prototype.isDisarmed = function () {
  this.damage = 20;
};

Orc.prototype.checkIfDead = function(){
  if(this.health <= 0){
    this.dead = true;
  };
};

Orc.prototype.attack = function (target) {
  if(this.dead === false){
    target.health -= this.damage;
  };
};

module.exports = Orc;
