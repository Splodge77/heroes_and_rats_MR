const Task = function(description, difficulty, urgency, reward){
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;
}

Task.prototype.completeTask = function(){
  this.completed = true;
}

module.exports = Task;
