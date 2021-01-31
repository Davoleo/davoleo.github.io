const path = require("path");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

const config =  {
    mode: 'development',
    entry: "./src/js/compile.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "main-bundled.js"
    },
    plugins: [
        new HandlebarsPlugin({
            entry: path.join(__dirname, "src", "templates", "*.hbs"),
            output: path.join(__dirname, "dist", "[name].html"),
            
            data: [
                path.join(__dirname, "src", "data", "*.json"),
            ],
            partials: [
                path.join(process.cwd(), "src", "templates", "partials", "*.hbs")
            ],
            helpers: {
                nameOfHbsHelper: Function.prototype,
                projectHelpers: path.join(process.cwd(), "src", "js", "helpers", "*.helper.js")
            }
        })
    ],
    resolve: {

    },
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.scss$/i, use: "sass-loader" },
            { test: /\.hbs$/i, use: "handlebars-loader" },
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource'},
            { test: /\.json$/i, use: "json-loader" }
        ]
    }
}

module.exports = config;