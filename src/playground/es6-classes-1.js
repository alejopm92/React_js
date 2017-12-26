
class Person {
  constructor(name = 'None Sense', age =0 ) {
    this.name = name;
    this.age = age;
  }

  getGreeting () {
    return `Hi I am ${this.name}!`;
  }
  getDescription () {
    return `${this.name} is ${this.age} years(s) old`;
  }
}

class Student extends Person {
    constructor (name, age, major) {
      super(name, age);
      this.major = major;
    }
    hasMajor() {
      return !!this.major;
    }

    getDescription () {
      let description = super.getDescription();

      if(this.hasMajor()) {
        description += ` and also has a major of ${this.major}.`;
      }
      return description
    }

}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name,age);
    this.location = location;
  }
  hasLocation() {
    return !!this.location;
  }
  getGreeting () {
    let greeting = super.getGreeting();

    if(this.hasLocation()){
      greeting += ` and I am visiting ${this.location}.`
    }

    return greeting;
  }
}
const me = new Student('Alejandro Espitia', 25, 'IT');
console.log(me.getGreeting());
console.log(me.hasMajor());
console.log(me.getDescription());

const trave = new Traveler('Andrew Mead', 36, 'Phillie');
console.log(trave.getGreeting());

const trave_sec = new Traveler('Charles', 20);
console.log(trave_sec.getGreeting());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());
