console.log("Starting app.js");
const yargs = require("yargs");
const addNotes = require("./notes.js")

const argv = yargs.argv;
var command = process.argv[2];
console.log("==============");
console.log("yargs" , yargs.argv);

if(command === "add"){
    addNotes.addNotes(argv.title, argv.body);
}