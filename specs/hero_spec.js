const assert = require ('assert')
const Hero = require ('../hero.js')
const Food = require ('../food.js')
const Task = require ('../task.js')
const Rat = require ('../rat.js')
const Weapon = require('../weapon.js')
const Orc = require('../orc.js')

describe('Hero Tests', function() {

  let hero;
  let food;
  let task;
  let rat;
  let weapon;
  let orc;

  beforeEach("Setup", function(){
    food1 = new Food("Sausage", 20);
    food2 = new Food("Turkey", 50);
    task1 = new Task("Bring protection to the grand ball.", 50, 7, "Don't get crabs!");
    task2 = new Task("Find the princess.", 75, 5, "The princess is in another castle!");
    task3 = new Task("Kill boars.... lots of boars", 30, 9, "Continue grinding");
    rat = new Rat("Scabbers");
    weapon1 = new Weapon("Sword", 40, 2)
    weapon2 = new Weapon("Crossbow", 15, 10)
    weapon3 = new Weapon("Axe", 20, 2)
    hero = new Hero("Sir. Lengthy Pork-sword", food1, weapon1);
    orc = new Orc("Slimewurst", weapon3);
  });

  it('should have a name', function(){
    assert.deepStrictEqual(hero.name, "Sir. Lengthy Pork-sword")
  });

  it('should have a favoriteFood', function(){
    assert.deepStrictEqual(hero.favoriteFood, food1)
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

  it('should complete a task', function(){
    hero.addTask(task1);
    hero.heroCompleteTask(task1);
    assert.deepStrictEqual(task1.completed, true)
  });

  it('should not affect origional heroTasks array by completing a task', function(){
    hero.addTask(task1);
    hero.heroCompleteTask(task1);
    hero.viewCompletedTasks();
    assert.deepStrictEqual(hero.heroTasks, [task1])
  });

  it('should be able to view completed tasks', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.heroCompleteTask(task1);
    hero.viewCompletedTasks();
    assert.deepStrictEqual(hero.completedTasks, [task1])
  });

  it('should be able to view incomplete tasks', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.heroCompleteTask(task1);
    hero.viewIncompleteTasks();
    assert.deepStrictEqual(hero.incompleteTasks, [task2, task3])
  });

  it('should take damage if poisoned food is eaten', function(){
    rat.touch(food1);
    hero.eat(food1);
    assert.deepStrictEqual(hero.health, 70)
  });

  it("should have a weapon", function(){
    assert.deepStrictEqual(hero.weapon, weapon1)
  });

  it("should be able to choose a weapon", function(){
    hero.chooseWeapon(weapon2);
    assert.deepStrictEqual(hero.weapon, weapon2)
  });

  xit("can disarm an orc", function(){
    hero.disarmOrc(orc)
    assert.deepStrictEqual(orc.damage, 0)
  })

});
