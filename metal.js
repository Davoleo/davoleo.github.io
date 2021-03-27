const Metalsmith = require("metalsmith");
const templates = require("metalsmith-in-place");
const sass = require("metalsmith-sass");

const fs = require('fs');
const Handlebars = require('handlebars');

//Register all Handlebars Partials in the partials directory
fs.readdir('./src/partials', (err, files) => {
    if (err)
        console.error(err);
    console.log("Loading " + files.length + " Partials...");
    files.forEach(file => {
        if (file.endsWith(".hbs"))
            Handlebars.registerPartial(file.split('.')[0], require('./src/partials/' + file));
    })
});

const helpers = require("./helpers/misc_helpers");
helperKeys = Object.keys(helpers);
console.log("Loading " + helperKeys.length + " Helpers...")
helperKeys.forEach(key => {
    Handlebars.registerHelper(key, helpers[key]);
});

Metalsmith(__dirname)
    .source("src")
    .destination("dist")
    .metadata({
        author: "Davoleo",
        site: "https://davoleo.net"
    })
    .use(templates({
        pattern: '**/*.{hbs,handlebars}',
    }))
    .use(sass({
        outputStyle: "expanded",
        outputDir: "css/",
        sourceMaps: true,
        sourceMapsContents: true
    }))
    .build((err) => {
        if (err)
            throw err;
    });