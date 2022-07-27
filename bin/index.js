#! /usr/bin/env node
const yargs = require("yargs");
const popularLangs = require("./popular");

console.log("Hello World");

const usage = `\nUsage:\n
\t$ htci -c sentence to get the commands to compile all current files\n
\t$ htci -p Gives the commands to compile of 10 popular programming languages.`;

const options = yargs.usage(usage).option("c", {
    alias: "current",
    describe: "List of all commands to compile currrent files.",
    type: "boolean",
    demandOption: false
}).help(true).argv;

//popularLangs.popular;