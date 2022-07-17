#!/usr/bin/env node
//this is a shebang, tells linux what sort of script it is
//also required by node to properly configure script in windows

const chalk = require('chalk')
const boxen = require('boxen')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')


yargs().parse(["http://omg.wtf.bbq",1,3,4])

const greeting = chalk.white.bold("Hello!");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);

const format = (msg) => boxen(chalk.white.bold(msg), boxenOptions) 
const output = msg => console.log(format(msg))

format("probando que es gerundio")
console.log(format("probando"))
output('probando output')

const argv = yargs(hideBin(process.argv)).argv
const defaultArg = argv._.toString()

const regex = /^https:\/\/www.codewars.com\/kata\/.+/

if (defaultArg.match(regex)) output('cool')
else output('not cool')



//TODO get the name of the repository and check if it matches some standard
//like codewars-katas or just codewars
//
//add node fs and asios and start having fun with that:
//
//
// basename `git rev-parse --show-toplevel` will show you the top level git
//
//
// if that output is the same as the current folder... do something... like
// check for folders in the root directory
//
// //check if the kata in the url has a language that actually exists as a folders
// if not, just warn user and make a folder , then copy stuff to the folder
// or maybe do the same with the 
//
//check the name of current folder and find a way to move to /codewars if you 
//are in a subfolder
