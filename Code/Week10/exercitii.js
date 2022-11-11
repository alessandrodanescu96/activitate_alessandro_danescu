//Exemplu 1 de Mostenire si Compozitie

function Artist() {
  console.log(this);
  this.name = "";
  this.age = 0;
  this.albums = 0;
  this.domain = "";
  this.trophies = 0;
}

function Musician(settings) {
  Artist.call(this);
  const { name, age, albums, domain, trophies } = settings;
  this.name = name;
  this.age = age;
  this.albums = albums;
  this.domain = domain;
  this.trophies = trophies;
}

Musician.prototype = Object.create(Artist.prototype);

function Dancer(settings) {
  Artist.call(this);
  const { name, age, domain, trophies } = settings;
  this.name = name;
  this.age = age;
  this.domain = domain;
  this.trophies = trophies;
}

Dancer.prototype = Object.create(Artist.prototype);

function Group(...humans) {
  this.humans = humans;
}

const musician1 = new Musician({
  name: "Alessandro Danescu",
  age: 26,
  albums: 111111111111111111111111111111111111111,
  domain: "Pop-Rock",
  trophies: 333333333333333333333333333333333333333,
});

const musician2 = new Musician({
  name: "Bon Jovi",
  age: 50,
  albums: 10,
  domain: "Rock",
  trophies: 50,
});

const musician3 = new Musician({
  name: "Rihanna",
  age: 35,
  albums: 10,
  domain: "R&B",
  trophies: 100,
});

const dancer1 = new Dancer({
  name: "Mihai Petre",
  age: 40,
  domain: "Latino",
  trophies: 3,
});

const dancer2 = new Dancer({
  name: "X",
  age: 30,
  domain: "Street",
  trophies: 10,
});

const dancer3 = new Dancer({
  name: "Y",
  age: 20,
  domain: "Contemporan",
  trophies: 7,
});

const group = new Group(dancer2, dancer3, musician1, musician2);
console.log(group);

//Exemplu 2 de Mostenire si Compozitie

function Console() {
  console.log(this);
  this.name = "";
  this.year = "";
  this.score = 0;
  this.games = 0;
  this.feedback = "";
  this.brand = "";
}

function PlayStation(settings) {
  Artist.call(this);
  const { name, year, score, games, feedback, brand } = settings;
  this.name = name;
  this.year = year;
  this.score = score;
  this.games = games;
  this.feedack = feedback;
  this.brand = brand;
}

PlayStation.prototype = Object.create(Console.prototype);

function XBOX(settings) {
  Artist.call(this);
  const { name, year, score, games, feedback, brand } = settings;
  this.name = name;
  this.year = year;
  this.score = score;
  this.games = games;
  this.feedback = feedback;
  this.brand = brand;

  XBOX.prototype = Object.create(Console.prototype);

  function Group(...electronics) {
    this.electronics = electronics;
  }

  const playstation1 = new PlayStation({
    name: "Playstation 2",
    year: "2000",
    score: 9.7,
    games: 45000,
    feedback: "Positive",
    brand: "SONY",
  });

  const playstation2 = new PlayStation({
    name: "Playstation 3",
    year: "2005",
    score: 8.9,
    games: 100000,
    feedback: "Positive",
    brand: "SONY",
  });

  const playstation3 = new PlayStation({
    name: "Playstation Portable",
    year: "2004",
    score: 5.9,
    games: 20000,
    feedback: "Negative",
    brand: "SONY",
  });

  const xbox1 = new XBOX({
    name: "Xbox 360",
    year: "2003",
    score: 7,
    games: 50000,
    feedback: "Positive",
    brand: "Microsoft",
  });

  const xbox2 = new XBOX({
    name: "Xbox",
    year: "1999",
    score: 7.2,
    games: 65000,
    feedback: "Positive",
    brand: "Microsoft",
  });

  const xbox3 = new XBOX({
    name: "Xbox Series",
    year: "2015",
    score: 8.7,
    games: 100000,
    feedback: "Positive",
    brand: "Microsoft",
  });

  const electronic = new Group(playstation1, playstation2, xbox1, xbox3);
  console.log(electronic);
}

//Functie care primeste un parametru: integer

function number(num) {
  return num;
}

console.log(7);

//Functie care returneaza un parametru: string

function concatenate(name, subject) {
  var val;
  val = name + subject;
  return val;
}

console.log("This is my name", "Alessandro");

//Functie care returneaza un parametru: array

function makeArray() {
  var myArray = new Array(4);
  myArray[0] = "A";
  myArray[1] = "B";
  myArray[2] = "C";
  myArray[3] = "D";
  return myArray;
}

//Boolean Promises - Resolve and Reject

let p = new Promise((resolve, reject) => {
  let x = 10 + 10;
  if (x === 20) {
    resolve("este adevarat, regele meu suprem!");
  } else {
    reject("mai mergi la scoala!");
  }
});

p.then((message) => {
  console.log("Nu stiu cum sa iti zic dar..." + message);
}).catch((message) => {
  console.log("Mai are rost sa zic ceva?" + message);
});

// O functie care accepta un numar nedefinit de argumente care returneaza suma lor

function addTogether() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (
      typeof arguments[i] !== "undefined" &&
      typeof arguments[i] == "number"
    ) {
      if (arguments.length < 2) {
        var sumTwoAnd = addTogether(arguments);
      }
      sum += arguments[i];
    } else {
      return undefined;
    }
  }

  return sum;
}

addTogether(2, 3);
