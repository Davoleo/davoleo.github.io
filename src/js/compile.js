const header = require("../templates/header.hbs");

Handlebars.registerPartial('header', header);

Handlebars.registerHelper("getCurrentYear", function () {
    return Date.now().getFullYear();
})
