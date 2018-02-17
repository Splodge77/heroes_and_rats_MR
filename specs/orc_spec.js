const assert = require('assert');
const Orc = require('../orc.js');
const Weapon = require('../weapon.js')

describe("Orc Test", function(){

  let orc;
  let weapon;

  beforeEach(function(){
    orc1 = new Orc("Lok-tar", "Axe")
    weapon1 = new Weapon("Axe", 20, 2)
  });

  it('should have a name', function(){
    assert.deepStrictEqual(orc1.name, "Lok-tar")
  });

  it('should have a base health', function(){
    assert.deepStrictEqual(orc1.health, 150)
  });

  it('should have a base damage', function(){
    assert.deepStrictEqual(orc1.damage, 30)
  });

  it('should start with a weapon', function(){
    assert.deepStrictEqual(orc1.weapon, "Axe")
  });

  it('should have weapon damage multiplier', function(){
    orc1.damageMultiplier(weapon1);
    assert.deepStrictEqual(orc1.damage, 50)
  });
});
