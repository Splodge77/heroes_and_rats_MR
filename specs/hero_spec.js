const assert = require ('assert')
const Hero = require ('../hero.js')
const Food = require ('../food.js')
const Task = require ('../task.js')

describe('Hero Tests', function() {

  let hero;

  beforeEach("Setup", function(){
    hero = new Hero("Sir. Lengthy Pork-sword", "Sausage");
    food1 = new Food("Sausage", 20);
    food2 = new Food("Turkey", 50);
    task1 = new Task("Bring protection to the grand ball.", 50, 7, "Don't get crabs!")
    task2 = new Task("Find the princess.", 75, 5, "The princess is in another castle!")
    task3 = new Task("Kill boars.... lots of boars", 30, 9, "Continue grinding")
  });

  it('should have a name', function(){
    assert.deepStrictEqual(hero.name, "Sir. Lengthy Pork-sword")
  });

  it('should have a favoriteFood', function(){
    assert.deepStrictEqual(hero.favoriteFood, "Sausage")
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
    hero.eat(food2);
    assert.deepStrictEqual(hero.health, 150);
  });

  it('should accumulate 50% more health if food is favorite', function(){
    hero.eat(food1);
    assert.deepStrictEqual(hero.health, 130);
  });

  it('should add a task to the tasks list', function(){
    hero.addTask(task1);
    assert.deepStrictEqual(hero.heroTasks.length, 1)
  });

  it('should be able to sort tasks by urgency', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasksByUrgency();
    assert.deepStrictEqual(hero.heroTasks, [task3, task1, task2])
  });

  it('should be able to sort tasks by difficulty', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasksByDifficulty();
    assert.deepStrictEqual(hero.heroTasks, [task2, task1, task3])
  });

});
