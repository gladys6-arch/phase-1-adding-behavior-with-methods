// Your code here
let cat, dog, bird, bird2;


class Cat{
  constructor(name, breed){
    this.name =name;
    this.breed= breed;
  }
  speak(){
    return`${this.name} says meow!`;
  }
}


class Dog{
  constructor(name,breed){
    this.name = name;
    this.breed = breed;
  }
  speak(){
    return `${this.name} says woof!`;
  }

}



 class Bird{
  constructor(name,breed){
    this.name = name;
    this.breed = breed;
  }
  speak() {
  if (this.name === "Pablo") {
    return ("It's me! Pablo, the parrot!")
  } else {
    return ("Mable says squawk!")
  }
}

  
}