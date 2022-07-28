const yargs = require("yargs");

const currentLangs = yargs.option("c", {
    alias: "current",
    describe: "List of all commands to compile currrent files.📂",
    type: "boolean",
    demandOption: false
});

module.exports = {
    currentLangs: currentLangs,
};