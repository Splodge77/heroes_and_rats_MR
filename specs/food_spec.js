const assert = require('assert')
const Food = require('../food.js')

describe("Food Test",function(){

  let food;

  beforeEach(function(){
    food1 = new Food('Sausage', 20);
  });

  it('should have a name', function(){
    assert.deepStrictEqual(food1.name, 'Sausage')
  });

  it('should have a replenishment value', function(){
    assert.deepStrictEqual(food1.replenishment, 20)
  });
});
