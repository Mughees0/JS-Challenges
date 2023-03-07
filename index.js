// Challenge 1

const arr1 = [1, 3, 4, 5];

// Checking the consecutive increment
function getDiff(arr) {
  v1 = (arr[0] - arr[1]) * -1;
  v2 = (arr[1] - arr[2]) * -1;
  v3 = (arr[2] - arr[3]) * -1;
  v4 = (arr[3] - arr[4]) * -1;

  if (v1 === v2 || v1 === v3 || v1 === v4) {
    return v1;
  } else if (v2 === v3 || v2 === v4 || v2 === v1) {
    return v2;
  } else if (v3 === v1 || v3 === v2 || v3 === v4) {
    return v3;
  }
}

// Finding the missing number
function MissingNum(arr) {
  let result = 0;
  let number = arr[0];
  let increment = getDiff(arr);

  if (arr.length > 3) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === number + increment) {
        number = number + increment;
      } else {
        result = number + increment;
      }
    }
  } else {
    return "Please enter an array with 4 consecutive numbers atleast";
  }
  return result;
}

console.log(MissingNum(arr1));

// challenge 2
let arr2 = [10, 65, 45, 2];

const MinMax = (arr) => {
  let maxValue = arr[0];
  let minValue = arr[0];

  arr.forEach((item) => {
    return item > maxValue ? (maxValue = item) : (minValue = item);
  });

  console.log(`The min value is ${minValue} and the max value is ${maxValue}`);
};

MinMax(arr2);

// challenge 3
let str = "aabbccddeffgg";

for (let i = 0; i < str.length; i += 2) {
  if (str.charAt(i) != str.charAt(i + 1)) {
    console.log(str.charAt(i));
    break;
  }
}

// challenge 4

// First way

function Person1(name, age, interests) {
  newPerson = Object.create(personMethods);
  newPerson.name = name;
  newPerson.age = age;
  newPerson.interests = interests;
  return newPerson;
}

let personMethods = {
  greeting: function () {
    return `Hi, my name is ${this.name}.`;
  },
  bio: function () {
    return `My name is ${this.name}, I'm ${this.age} years old, and my interests are ${this.interests}.`;
  },
};

const me1 = new Person1("mughees", 21, "golf");
console.log(me1.greeting());

// second way

function Person2(name, age, interests) {
  this.name = name;
  this.age = age;
  this.interests = interests;
}

Person2.prototype.greeting = function () {
  return `Hi, my name is ${this.name}.`;
};

Person2.prototype.bio = function () {
  return `My name is ${this.name}, I'm ${this.age} years old, and my interests are ${this.interests}.`;
};

const me2 = new Person2("mughees", 21, "golf");
console.log(me2.bio());

// Third way

class Person3 {
  constructor(name, age, interests) {
    this.name = name;
    this.age = age;
    this.interests = interests;
  }
  greeting() {
    return `Hi, my name is ${this.name}.`;
  }
  bio() {
    return `My name is ${this.name}, I'm ${this.age} years old, and my interests are ${this.interests}.`;
  }
}

const me3 = new Person3("mughees", 21, "self");
console.log(me3.greeting());
