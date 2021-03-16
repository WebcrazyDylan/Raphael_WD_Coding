// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit.

const stringLib = {
  concatanate: (a, b) => {
    // append one string to another
    return a.concat(b);
  },

  ASCIINumberToChar: (Number) => {
    // take one number, say, 127 and convert it to its ASCII char representation
    return String.fromCharCode(Number);
  },

  CharToAsciiNumber: (aChar) => {
    // take one Character, say, 'A' and convert it to it's Number representation
    return aChar.charCodeAt(0);
  },

  ReverseString: (origionalString) => {
    return origionalString.split("").reverse().join("");
    // return a string, ie: Hello becomes olleH
  },

  GenerateOnlyUpperCase: () => {
    //Ie: A,B,C,D,E,F,G...Z
    let return_arr = [];
    for (var i = 65; i <= 90; ++i) return_arr.push(String.fromCharCode(i));

    return return_arr.join(" → ");
  },

  GenerateOnlyLowerCase: () => {
    //Ie: a,b,c,d,e,f,g...z
    let return_arr = [];
    for (var i = 97; i <= 122; ++i) return_arr.push(String.fromCharCode(i));

    return return_arr.join(" → ");
  },

  GenerateOnlyNumbers: () => {
    //Ie: 0,1,2,3...9
    let return_arr = [];
    for (var i = 48; i <= 57; ++i) return_arr.push(String.fromCharCode(i));

    return return_arr.join(" → ");
  },

  GenerateOnlySymbols: () => {
    //Ie: $, %, !, #, etc
    let return_arr = [];
    for (var i = 33; i <= 47; ++i) return_arr.push(String.fromCharCode(i));

    return return_arr.join(" ");
  },

  GenerateUpperAndLowerCase: () => {
    //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
    let return_arr = [];
    for (var i = 65; i <= 122; ++i) return_arr.push(String.fromCharCode(i));

    return return_arr.join(" → ");
  }
};

console.log(
  `stringLib.concatanate("Hello", "JS") = ${stringLib.concatanate(
    "Hello",
    "JS"
  )}`
);
console.log(
  `stringLib.ASCIINumberToChar(65) = ${stringLib.ASCIINumberToChar(65)}`
);
console.log(
  `stringLib.CharToAsciiNumber("AB") = ${stringLib.CharToAsciiNumber("AB")}`
);
console.log(
  `stringLib.ReverseString("Hello World") = ${stringLib.ReverseString(
    "Hello World"
  )}`
);
console.log(
  `stringLib.GenerateOnlyUpperCase() = ${stringLib.GenerateOnlyUpperCase()}`
);
console.log(
  `stringLib.GenerateOnlyLowerCase() = ${stringLib.GenerateOnlyLowerCase()}`
);
console.log(
  `stringLib.GenerateOnlyNumbers() = ${stringLib.GenerateOnlyNumbers()}`
);
console.log(
  `stringLib.GenerateOnlySymbols() = ${stringLib.GenerateOnlySymbols()}`
);
console.log(
  `stringLib.GenerateUpperAndLowerCase() = ${stringLib.GenerateUpperAndLowerCase()}`
);
