const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

const car = {
  name: "Toyota",
  settings: {
    color: "white",
    doors: 5,
  },
};

const { name } = person;
const newCar = { ...car, modelYear: 2022, wheels: 4 };
const { color, doors } = car.settings;
const sameCar = { ...car };
const samePerson = { ...person };

console.log(sameCar);
