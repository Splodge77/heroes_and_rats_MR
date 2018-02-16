const assert = require ('assert')
const hero = require ('../hero.js')

describe('Hero', function() {

  let hero;

  beforeEach(function(){
    hero = new Hero("Sir. Lengthy Pork-sword", "Sausge");
  });

  it('should have a name', function(){
    const actual = hero.name;
    assert.strictEqual(actual, "Sir. Lengthy Pork-sword")
  });

  // it('should have a favoriteFood')
});
