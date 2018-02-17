const Orc = function(name, weapon){
  this.name = name;
  this.health = 150;
  this.damage = 30;
  this.weapon = weapon;
}

Orc.prototype.damageMultiplier = function (weapon) {
  return this.damage += weapon.damage;
};

module.exports = Orc;
