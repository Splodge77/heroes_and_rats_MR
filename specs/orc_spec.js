const assert = require('assert');
const Orc = require('../orc.js');

describe("Orc Test", function(){

  let orc;

  beforeEach(function(){
    orc1 = new Orc("Lok-tar")
  });

  it('should have a name', function(){
    assert.deepStrictEqual(orc1.name, "Lok-tar")
  });

  it('should have a base health', function(){
    assert.deepStrictEqual(orc1.health, 150)
  });
});
