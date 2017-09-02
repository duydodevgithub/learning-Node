//define object and convert into string
var obj = {
    firstName: "Duy",
    lastName:"Do"
}

var stringObj = JSON.stringify(obj);
// console.log(obj);

//define string and convert into object
var personString = "{\"firstName\" : \"Duy\", \"lastName\": \"Do\"}";
console.log(personString);
var personObj = JSON.parse(personString);
console.log(personObj.firstName);