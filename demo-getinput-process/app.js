const notes = require("./notes.js");
const yargs = require("yargs");
const argv = yargs.argv;
var command = process.argv[2];

console.log("Process ", process.argv);
console.log("Yards: ", argv);
/* var num1 = process.argv[3];
var num2 = process.argv[4];
if (command === "add") {
    console.log(notes.add(num1, num2));
} */