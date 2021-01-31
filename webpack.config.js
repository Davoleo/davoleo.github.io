//const path = require(path);

module.exports = {
    mode: 'development',
    entry: "./src/js/compile.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "main-bundled.js"
    },
    resolve: {

    },
    module: {
        rules: [
            { test: /\.scss$/, loader: "sass-loader" },
            { test: /\.hbs$/, loader: "handlebars-loader" }
        ]
    }
}