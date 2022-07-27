const yargs = require('yargs');

const popularMsg = `$ htci -p Gives the commands to compile of 10 popular programming languages.`;

const popular = yargs.usage(popularMsg).option("p", {
    alias: "popular",
    describe: "List of all commands to compile 10 popular programming languages.",
    type: "boolean",
    demandOption: false
}).help(true).argv;

module.exports = {
    popularMsg: popularMsg,
    popular: popular
};