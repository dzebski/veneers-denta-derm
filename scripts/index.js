// Java Script


function Animal(name, energy) {
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.energy = energy;
  
    return animal;
  }
  
  Animal.prototype.eat = function (amount) {
    this.energy += amount;
    console.log(`${this.name} is eating. Health became ${this.energy}`);
  };
  
  Animal.prototype.sleep = function (time) {
    this.energy += 2 * time;
    console.log(
      `${this.name} is sleeping. For a ${time} time. Health became ${this.energy}`
    );
  };
  
  Animal.prototype.play = function (time) {
    this.energy -= 4 * time;
    console.log(
      `${this.name} is playing. For a ${time} time. Health became ${this.energy}`
    );
  };
  
  const cat = Animal("Cat", 40);
  const dog = Animal("Dog", 60);
  
  console.log("--------------");
  cat.play(9);
  dog.play(12);