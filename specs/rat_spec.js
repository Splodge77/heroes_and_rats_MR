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
});
