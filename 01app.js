// Objectives
// GLOBALS
// MODULES

const amount = 2;

if (amount < 10) {
  console.log("small num");
} else {
  console.log("large num");
}

console.log("hey its my node programm");

// GLOBALS  - NO wINDOW !!!

/*  __dirname  - path to current dir
    __filename  - file name
    require  - function to use modules (Common JS)
    module  - info about current module (file)
    process  -info about env where the program is being executed */

/* console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module); */

/* ------------------------------------------------------------
 */

// MODULES
/* const sayJi = (name) => {
  console.log(`Hello there ${name}`);
};
const secreat = "super secreat";
const name = "nayzaw";
const age = 20;
module.exports = { name, age, sayJi }; */

// getting that modules
/* const person = require("./app.js");
console.log(person);
person.sayJi("zawzaw"); */
