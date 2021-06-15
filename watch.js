const chokidar = require("chokidar");
const metalsmithBuilder = require("./metal");

//TODO Optimize this and maybe integrate it with metalsmith
chokidar.watch('src').on("change", (event, path) => {
    console.log(event, path);
    metalsmithBuilder.call();
});