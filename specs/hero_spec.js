const assert = require ('assert')
const Hero = require ('../hero.js')

describe('Hero', function() {

  let hero;

  beforeEach(function(){
    hero = new Hero("Sir. Lengthy Pork-sword", "Sausge");
  });

  it('should have a name', function(){
    assert.strictEqual(hero.name, "Sir. Lengthy Pork-sword")
  });

  it('should have a favoriteFood', function(){
    assert.strictEqual(hero.favoriteFood, "Sausge")
  })
});
