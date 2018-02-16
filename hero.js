const Hero = function (name, favoriteFood) {
  this.name = name;
  this.health = 100;
  this.favoriteFood = favoriteFood;
  this.talk = function (){
    return `Good day, i am ${this.name}`
  };
  this.heroTasks = [];
  this.completedTasks = [];
  this.incompleteTasks = [];
}

Hero.prototype.eat = function(food){
  if(food.name === this.favoriteFood){
    const newValue = food.replenishment *= 1.5;
    return this.health += newValue;
  };
  return this.health += food.replenishment;
};

Hero.prototype.addTask = function (task) {
    this.heroTasks.push(task);
};

Hero.prototype.sortTasksByUrgency = function(){
  return this.heroTasks.sort(function(taska,taskb){
    return taskb.urgency - taska.urgency;
  });
};

Hero.prototype.sortTasksByDifficulty = function(){
  return this.heroTasks.sort(function(taska,taskb){
    return taskb.difficulty - taska.difficulty;
  });
};

Hero.prototype.heroCompleteTask = function (task) {
  task.completeTask();
};

Hero.prototype.viewCompletedTasks = function () {
  this.heroTasks.forEach(function(task){
    if(task.completed === true){
      this.completedTasks.push(task);
    };
  }.bind(this));
  return this.completedTasks;
};

Hero.prototype.viewIncompleteTasks = function () {
  this.heroTasks.forEach(function(task){
    if(task.completed === false){
      this.incompleteTasks.push(task);
    };
  }.bind(this));
  return this.incompleteTasks;
};

module.exports = Hero;
