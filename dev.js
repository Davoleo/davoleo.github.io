const metalDebug = require('metalsmith-debug');
const metalBuilder = require("./metal");

metalBuilder.devMode = true;

metalBuilder.smithInstance.use(metalDebug());

metalBuilder.metalsmithBuild();