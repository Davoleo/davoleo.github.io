const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config =  {
    mode: 'development',
    entry: {
        main: "./src/js/main.js",
        index: "./src/js/index.js",
        projects: "./src/js/projects.js"
    },
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: "js/[name]-bundle.js"
    },
    devServer: {
        port: 3333,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'templates', 'index.hbs'),
            chunks: ['main', 'index']
        })
    ],
    module: {
        rules: [
            { 
                //if the file name ends with .css
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            { 
                test: /\.s[ac]ss$/i, 
                use: [
                    "sass-loader", 
                    {
                        loader: "css-loader", 
                        options: {sourceMap: true}
                    }
                ] 
            },
            { 
                test: /\.hbs$/i, 
                use: "handlebars-loader" 
            },
            { 
                test: /\.(png|svg|jpg|jpeg|gif)$/i, 
                use: 'file-loader'
            },
            { 
                test: /\.(woff|woff2|eot|ttf|otf)$/i, 
                use: 'file-loader'
            }
        ]
    }
}

module.exports = config;