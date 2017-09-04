console.log("Starting app.js");
const fs = require("fs");
const yargs = require("yargs");
const notes = require("./notes.js")

var argv = yargs.argv;
var originalNote = {};
originalNote.title = argv.title;
originalNote.body = argv.body;
console.log(argv);

if(argv._[0] == "add") {
    notes.addNote(argv.title, argv.body);
} else if(argv._[0] == "getAll") {
    notes.getAll();
}
