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
  });

  it('should have base health of 100', function(){
    assert.strictEqual(hero.health, 100)
  });

  it('should talk saying their name', function(){
    assert.strictEqual(hero.talk(), "Good day, i am Sir. Lengthy Pork-sword")
  });
});
