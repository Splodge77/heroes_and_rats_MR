const assert = require('assert');
const Orc = require('../orc.js');

describe("Orc Test", function(){

  let orc;

  beforeEach(function(){
    orc1 = new Orc("Lok-tar", "Axe")
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
});
