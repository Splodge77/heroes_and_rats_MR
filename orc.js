const Orc = function(name, weapon){
  this.name = name;
  this.health = 150;
  this.damage = 30;
  this.weapon = weapon;
}

Orc.prototype.isArmed = function () {
  this.damage += this.weapon.damage;
};

Orc.prototype.isDisarmed = function () {
  this.damage = 20;
};

module.exports = Orc;
