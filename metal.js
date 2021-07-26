const Metalsmith = require("metalsmith");

//Handlebars templates and SCSS
const templates = require("metalsmith-handlebars-contents");
const sass = require("metalsmith-sass");
const dataLoader = require("metalsmith-data-loader");

const renamer = require('./metalsmith-renamer');

let devMode = false;

const smithInstance = Metalsmith(__dirname)
    .source("src")
    .destination("dist")
    .metadata({
        author: "Davoleo",
        site: "https://davoleo.net"
    })
    .use(dataLoader({
        dataProperty: "data",
        removeSource: true,
        match: "*.{hbs,html}"
    }))
    .use(templates({
        match: '*.{hbs, html}',
        partials: ['src/partials/*'],
        helpers: ['./helpers/*']
    }))
    .use(renamer('*.{hbs, handlebars}', 'html'))
    .use(sass({
        outputStyle: "expanded",
        outputDir: "css/",
        sourceMaps: true,
        sourceMapsContents: true
    }));


function metalsmithBuild() {
    smithInstance
    .build((err) => {
        if (err)
            throw err;
    });
}

metalsmithBuild();

module.exports = {
    smithInstance,
    metalsmithBuild,
    devMode
};