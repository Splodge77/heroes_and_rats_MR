const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe("Rat Test", function(){

  let rat;
  let food;

  beforeEach(function(){
    rat1 = new Rat ("Scabbers");
    food1 = new Food ("Sausage", 20)
  });

  it('should have a name', function(){
    assert.deepStrictEqual(rat1.name, "Scabbers")
  });

  it('should be able to poison food', function(){
    assert.deepStrictEqual(food1.poisoned, false)
    rat1.touch(food1);
    assert.deepStrictEqual(food1.poisoned, true)
  });

  it('should die', function(){
    rat1.health = 0
    rat1.checkIfDead();
    assert.deepStrictEqual(rat1.dead, true)
  });

  it('should not poison food if dead', function(){
    rat1.health = 0
    rat1.checkIfDead();
    rat1.touch(food1);
    assert.deepStrictEqual(food1.poisoned, false)
  })
});
