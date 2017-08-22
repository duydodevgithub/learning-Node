var _ = require("lodash");
var input = process.argv[2];
if (_.isString(input)) {
    console.log("This is string");
} else {
    console.log("This is not a string");
}