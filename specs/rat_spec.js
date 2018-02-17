const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe("Rat Test", function(){

  let rat;

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
});
