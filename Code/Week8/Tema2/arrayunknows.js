let sumNumbers = (...numbers) => {
  let sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};

console.log(sumNumbers(40, 41, 42));
