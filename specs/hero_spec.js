const assert = require ('assert')
const Hero = require ('../hero.js')
const Food = require ('../food.js')

describe('Hero Tests', function() {

  let hero;

  beforeEach("Setup", function(){
    hero = new Hero("Sir. Lengthy Pork-sword", "Sausge");
    food1 = new Food("Sausage", 20)
  });

  it('should have a name', function(){
    assert.deepStrictEqual(hero.name, "Sir. Lengthy Pork-sword")
  });

  it('should have a favoriteFood', function(){
    assert.deepStrictEqual(hero.favoriteFood, "Sausge")
  });

  it('should have base health of 100', function(){
    assert.deepStrictEqual(hero.health, 100)
  });

  it('should talk saying their name', function(){
    assert.deepStrictEqual(hero.talk(), "Good day, i am Sir. Lengthy Pork-sword")
  });

  it('should start with an empty array of tasks', function(){
    assert.deepStrictEqual(hero.heroTasks, [])
  });

  it('should accumulate health when eating', function(){
    hero.eat(food1);
    assert.deepStrictEqual(hero.health, 120);
  });

});
