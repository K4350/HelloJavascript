// 1. Backticks for String Delimiters:
// Template literals are enclosed by backticks (`), unlike single (') or double (") quotes.

// const message = `Helo, World!`
// console.log(message);


// 2. String Interpolation
// You can embed variables and expressions directly within a string using the ${} syntax.

// const myName = "Kaushik" ;
// let myAge = 24 ;

// console.log(`Hello everyone, my name is ${myName} and I am ${24} year old.`);


// 3.Multi-line Strings
// Template literals allow you to write multi-line strings without needing escape characters (\n).

// console.log(`This is
//     a
//     multi-line
//     string`);

// console.log(`
// *
// **
// ***
// ****`)


// 4. Tagged Templates
// A tag function processes the parts of a template literal (both static strings and embedded expressions) and can return a custom output.
// function tag(strings, ...values) {
//     console.log("Strings:", strings);
//     console.log("Values:", values);
  
//     return `${strings[0]}${values[0].toUpperCase()}${strings[1]}`;
//   }

//   const result = tag`Hello, ${"Kaushik"}!`;
//   console.log(result);






