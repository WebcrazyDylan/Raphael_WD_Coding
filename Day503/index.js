const arrayOfMultiples = (num, nLength) => {
  let numbers = [];
  let i = 1;
  while (i <= nLength) {
    numbers.push(num * i);
    i++;
  }
  return numbers;
};

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));
