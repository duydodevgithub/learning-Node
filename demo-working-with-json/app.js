console.log("Starting app.js");
const fs = require("fs");
const yargs = require("yargs");

var argv = yargs.argv;
var originalNote = {};
originalNote.title = argv.title;
originalNote.body = argv.body;
console.log(argv.title);
console.log(originalNote);

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json","utf8");
var note = JSON.parse(noteString);
console.log("User input title " + note.title);
console.log("User input body " + note.body);

