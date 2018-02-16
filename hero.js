const Hero = function (name, favoriteFood) {
  this.name = name;
  this.health = 100;
  this.favoriteFood = favoriteFood;
  this.talk = function (){
    return `Good day, i am ${this.name}`
  };
  this.heroTasks = [];
}

Hero.prototype.eat = function(food){
  return this.health += food.replenishment;
};

module.exports = Hero;
