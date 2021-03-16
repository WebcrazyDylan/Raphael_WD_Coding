// Implement the following functions

// // ES6 code
// const lib = {
//   sum:  (a, b) => a + b,
//   mult: (a, b) => a * b
// };
// console.log( lib.sum(2, 3) );  // 5
// console.log( lib.mult(2, 3) ); // 6

const NumberLib = {
  add: (a, b) => {
    // add a to b
    return a + b;
  },

  sub: (a, b) => {
    // sub a from b
    return a - b;
  },

  mul: (a, b) => {
    // mul a by b
    return a * b;
  },

  div: (a, b) => {
    // dib a by b
    try {
      return a / b;
    } catch (err) {
      return "Can't divide a / b";
    }
  },

  Exponentiation: (a, b) => {
    // expont a of b
    return a ** b;
  },

  Increment: (a) => {
    // inc a
    return a++;
  },

  Decrement: (a) => {
    // dec a
    return a--;
  },

  NumberListA: (start, end) => {
    // return list of numbers starting at start and ending at end
    let return_arr = [];
    for (let i = start; i <= end; i++) return_arr.push(i);

    return return_arr;
  },

  NumberListB: (start, count, skipEvery) => {
    // return list of numbers starting at start and ending at end but skipping every N (ie: skip every 2, or skip every 3)
    let return_arr = [];
    let keep = true;
    let i = start;
    while (keep) {
      return_arr.push(i);
      if (return_arr.length === count) keep = false;
      else i = ++i + skipEvery;
    }
    // for (
    //   let i = start;
    //   i <= start + count * (skipEvery + 1);
    //   i += 1 + skipEvery
    // ) {
    //   return_arr.push(i);
    // }
    return return_arr;
  },

  NumberListC: (start, count, shouldBeRandomOrNot) => {
    // return list of numbers starting, continuing for (count) and a boolean to determine if the list of numbers should be random or not
    let return_arr = [];
    let keep = true;
    let i = start;
    while (keep) {
      return_arr.push(i);
      if (return_arr.length === count) keep = false;
      else {
        if (shouldBeRandomOrNot) {
          //Return a random number between 1 and 100:
          i = Math.floor(Math.random() * 100 + 1);
        } else i++;
      }
    }

    return return_arr;
  },

  IsOdd: (aNumber) => {
    // is a number odd? true false
    return aNumber % 2 === 0 ? true : false;
  },

  IsEven: (aNumber) => {
    // is a number even? true false
    return aNumber % 2 !== 0 ? true : false;
  },

  RandomNumberListA: (start, end) => {
    // return list of random numbers between start and end
    let return_arr = [];
    let keep = true;
    let i = start;
    while (keep) {
      return_arr.push(i);
      if (return_arr.length === end) keep = false;
      else {
        // if (shouldBeRandomOrNot) {
        //Return a random number between 1 and 100:
        i = Math.floor(Math.random() * (end - start) + start);
        // } else i++;
      }
    }

    return return_arr;
  },

  RandomNumberListB: (start, end, count, allowDuplicates) => {
    // return count number of random numbers, between start and end. use allowDuplicates to choose if we should allow duplicates in the list or not
  },

  randomNumberBetweenRange: (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
};

console.log(`NumberLib.add(1, 5) = ${NumberLib.add(1, 5)}`);
console.log(`NumberLib.sub(5, 2) = ${NumberLib.sub(5, 2)}`);
console.log(`NumberLib.mul(5, 3) = ${NumberLib.mul(5, 3)}`);
console.log(`NumberLib.div(7, 3) = ${NumberLib.div(7, 3)}`);

console.log(`NumberLib.NumberListA(5, 13) = ${NumberLib.NumberListA(5, 13)}`);
console.log(
  `NumberLib.NumberListB(5, 7, 1) = ${NumberLib.NumberListB(5, 7, 1)}`
);
console.log(
  `NumberLib.NumberListC(5, 7, true) = ${NumberLib.NumberListC(5, 7, true)}`
);
console.log(
  `NumberLib.NumberListC(5, 7, false) = ${NumberLib.NumberListC(5, 7, false)}`
);

console.log(`NumberLib.IsOdd(7) = ${NumberLib.IsOdd(7)}`);
console.log(`NumberLib.IsOdd(16) = ${NumberLib.IsOdd(16)}`);

console.log(`NumberLib.IsEven(3) = ${NumberLib.IsEven(3)}`);
console.log(`NumberLib.IsEven(10) = ${NumberLib.IsEven(10)}`);

console.log(
  `NumberLib.RandomNumberListA(3, 15) = ${NumberLib.RandomNumberListA(3, 15)}`
);
