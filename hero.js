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
  if(food.name === this.favoriteFood){
    const newValue = food.replenishment *= 1.5;
    return this.health += newValue;
  };
  return this.health += food.replenishment;
};

module.exports = Hero;
