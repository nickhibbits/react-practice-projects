// factory function to create different dogs
function createDog(breed, name) {
  const dog = Object.create(dogActions);
  dog.name = name;
  dog.breed = breed;

  return dog;
}

// store dog actions in single object to avoid duplicating the function for each new dog created
const dogActions = {
  bark: function () {
    return "bark bark";
  },
};

const rosie = createDog("Whippit", "Rosie");

console.log(rosie.bark());

class Person {
  constructor(name) {
    this.greeting = "hello";
    this.name = name;
  }
}

const billy = new Person("billy");
console.log(billy);

console.log(Object.hasOwn(billy, "greeting"));
