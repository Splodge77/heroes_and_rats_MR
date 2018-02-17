const Orc = function(name, weapon){
  this.name = name;
  this.health = 150;
  this.baseDamage = 30;
  this.weapon = weapon;
  this.damage = function(){
    return this.baseDamage += weapon.damage;
  }
}

module.exports = Orc;
