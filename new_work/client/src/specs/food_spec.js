const assert = require('assert')
const Food = require('./models/environment/food.js')

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

  it('should start as not poisoned', function(){
    assert.deepStrictEqual(food1.poisoned, false)
  });

  it('should become poisoned', function(){
    food1.poison();
    assert.deepStrictEqual(food1.poisoned, true)
  });
});
