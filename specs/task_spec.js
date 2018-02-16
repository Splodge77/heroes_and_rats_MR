const assert = require('assert');
const Task = require('../task.js');

describe('Task Test', function(){

  let task;

  beforeEach(function(){
    task1 = new Task('Slay the One Eyed Trouser Snake', 70, 6, 'Lady Loosetoungue');

  });

  it('should have a description', function(){
    assert.deepStrictEqual(task1.description, 'Slay the One Eyed Trouser Snake');
  });

  it('should have a difficulty level', function(){
    assert.deepStrictEqual(task1.difficulty, 70);
  })
});