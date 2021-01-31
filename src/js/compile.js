const header = require("../templates/header.hbs");
const index = require("../templates/index.hbs");
const indexData = require("../data/index.json");

Handlebars.registerPartial('header', header);

Handlebars.registerHelper("getCurrentYear", function () {
    return Date.now().getFullYear();
})

const compiledIndex = Handlebars.compile(index);
compiledIndex(indexData);
