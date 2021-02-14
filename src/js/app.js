const header = require("../templates/partials/header.hbs");
const index = require("../templates/index.hbs");
const indexData = require("../data/index.json");

const indexObj = JSON.parse(indexData);

Handlebars.registerPartial('header', header);

Handlebars.registerHelper("getCurrentYear", function () {
    return Date.now().getFullYear();
})

const compiledIndex = Handlebars.compile(index);
console.log(compiledIndex);
