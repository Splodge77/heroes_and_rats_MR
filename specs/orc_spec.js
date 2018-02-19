const assert = require('assert');
const Orc = require('../orc.js');
const Weapon = require('../weapon.js')
const Hero = require('../hero.js')

describe("Orc Test", function(){

  let orc;
  let weapon;
  let hero;

  beforeEach(function(){
    orc1 = new Orc("Lok-tar", weapon1)
    weapon1 = new Weapon("Axe", 20, 2)
    hero1 = new Hero("Sir.JsWat", "Bacon", weapon1)
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
    assert.deepStrictEqual(orc1.weapon, weapon1)
  });

  it('should be armed', function(){
    orc1.isArmed();
    assert.deepStrictEqual(orc1.damage, 50)
  });

  it("should be disarmed", function(){
    orc1.isArmed();
    orc1.isDisarmed();
    assert.deepStrictEqual(orc1.damage, 20)
  });

  it("can attack a hero", function(){
    orc1.isArmed();
    orc1.attack(hero1);
    assert.deepStrictEqual(hero1.health, 50)
  })

});
