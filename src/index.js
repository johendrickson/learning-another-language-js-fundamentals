// ======================
//      VARIABLES
// ======================
let veggie = 'carrot';
veggie = 'onion';

//
//
// =========================
//      DATA STRUCTURES
// =========================

const animals = ['tiger', 'panda', 'raccoon'];
animals.push('opossum');

const dog = { name: 'Sprinkles', age: 3 };
dog.isFriendly = true;

//
//
// =================
//       LOOPS
// =================

const num = 5;
for (let i = 0; i < num; i++) {
  console.log(i);
}

for (const animal of animals) {
  console.log(animal);
}

for (const [key, value] of Object.entries(dog)) {
  console.log(`${key}: ${value}`);
}

//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};

//
//
// ======================
//       CLASSES
// ======================

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  toString() {
    return `${this.name} is a ${this.species}`;
  }
}

class Dog extends Animal {
  constructor(name, trick) {
    super('dog', name);
    this.trick = trick;
  }
  toString() {
    return `${super.toString()} that can ${this.trick}`;
  }
}