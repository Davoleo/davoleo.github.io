const helpers = {
    getCurrentYear() {
        return new Date().getFullYear();
    },
    isDev() {
        return require("../metal").devMode;
    }
};

module.exports = helpers;