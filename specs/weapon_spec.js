const assert = require('assert')
const Weapon = require('../weapon.js')

describe("Weapon Test", function(){

  let weapon;

  beforeEach(function(){
    axe = new Weapon(20, 2);
    crossbow = new Weapon(15, 10);
    sword = new Weapon(30, 2);
  });

  it('should have a damage value', function(){
    assert.deepStrictEqual(axe.damage, 20)
  });

  it('should have a range', function(){
    assert.deepStrictEqual(crossbow.range, 10)
  });
});
