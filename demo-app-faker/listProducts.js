var faker = require("faker");
console.log("=======================");
console.log("WELCOME TO MY SHOP!");
console.log("=======================")

for(i = 0; i < 10; i++) {
    var product = faker.commerce.product();
    var price = faker.commerce.price();
    console.log("Product: " + product + " --- " + "Price: " + price);
}