console.log("Starting notes.js");
const fs = require("fs");

var addNote = function(title, body) {
    var notes = [];
    var note = {
        title: title,
        body: body
    }
    try {
        var noteString = fs.readFileSync("notes-data.json");
        notes = JSON.parse(noteString);
        console.log(notes);
    } catch (error) {
        // console.log("Error");
    }
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}
var getAll = function() {
    var notes = [];
    notes = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notes);
    console.log(typeof notes);
    // console.log(notes);
}

module.exports = {
    addNote,
    getAll
};

// console.log(module);

