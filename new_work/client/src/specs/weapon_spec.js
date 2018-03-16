const assert = require('assert')
const Weapon = require('../weapon.js')

describe("Weapon Test", function(){

  let weapon;

  beforeEach(function(){
    weapon1 = new Weapon("Axe", 20, 2);
    weapon2 = new Weapon("Crossbow", 15, 10);
    weapon3 = new Weapon("sword", 40, 2);
  });

  it('should have a name', function(){
    assert.deepStrictEqual(weapon1.name, "Axe")
  });

  it('should have a damage value', function(){
    assert.deepStrictEqual(weapon1.damage, 20)
  });

  it('should have a range', function(){
    assert.deepStrictEqual(weapon2.range, 10)
  });
});
