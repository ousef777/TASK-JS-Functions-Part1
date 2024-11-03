const { fi } = require("@faker-js/faker");

/**
 * Task 1:
 * Create a function named `printName`
 * - take a name as a parameter
 * - that just prints that name on the screen
 */
function printName(name) {
  console.log(name);
}
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear) {
  console.log(2024 - birthYear);
}
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  let first = "Hello ";
  if (language == "es") first = "Hola ";
  else if (language == "fr") first = "Bonjour ";
  else if (language == "tr") first = "Merhaba ";
  console.log(first + name);
}
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(a, b) {
  console.log((a > b) ? a : b);
}

console.log(printMax(3, 2));
// TODO: Uncomment these functions as you work on them
// Make sure they're all uncommented before you push your solution!
module.exports = {
  printName,
  printAge,
  printHello,
  printMax,
};
