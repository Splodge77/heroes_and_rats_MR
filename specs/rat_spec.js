const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe("Rat Test", function(){

  let rat;

  beforeEach(function(){
    rat1 = new Rat ("Scabbers");
  });

  it('should have a name', function(){
    assert.deepStrictEqual(rat1.name, "Scabbers")
  });

  it('should be able to poison food', function(){
    rat.touch(food1);
    assert.deepStrictEqual(food1.poisoned, true)
  });
});
