#! /usr/bin/env node
const yargs = require("yargs");
const popular = require("./popular.js");
const utils = require("./utils.js");
const cliBoxes = require("cli-boxes");

//var sentence = utils.parseSentence(yargs.argv._);

const usage = `\n💻Usage:\n
👉\t$ htci <lang_extension>\n
lang_extension: The language extension you want to know how to compile`;

const options = yargs.usage(usage).option("c", {
    alias: "current",
    describe: "List the commands to compile the files it finds in your current directory.📂",
    type: "boolean",
    demandOption: false
}).help(true).argv;

if(yargs.argv._[0]==null){
    utils.showHelp();
}

if(yargs.argv._ == 'cpp'){
    console.log("g++ file.cpp");
}