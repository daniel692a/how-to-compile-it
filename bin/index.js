#! /usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import boxen from 'boxen';
import currentLangs from './current.js';
/*
const popular = require("./popular.js");
const utils = require("./utils.js");
const cliBoxes = require("cli-boxes");
*/

const usage = `\n💻Usage:\n
👉  $ htci <lang_extension>\n
lang_extension: The language extension you want to know how to compile`;

/*yargs(hideBin(process.argv))
    .command('<lang_extension>', 'Show command', ()=>{}, (argv)=>{
        console.info(argv);
    })
    .demandCommand(1)
    .parse()
    .option('c', currentLangs)
    .help('help')
*/

yargs(hideBin(process.argv)).usage(usage).option("c", {
    alias: "current",
    describe: "List the commands to compile the files it finds in your current directory.📂",
    type: "boolean",
    demandOption: false
}).help(true).argv;


if(yargs(hideBin(process.argv)).argv._[0]==null){
    console.log(boxen(usage, {padding:1, borderColor:'cyan', backgroundColor:'black'}));
}
/*
if(yargs.argv._ == 'cpp'){
    console.log("g++ file.cpp");
}*/