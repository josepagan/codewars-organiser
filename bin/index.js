#!/usr/bin/env node
//this is a shebang, tells linux what sort of script it is
//also required by node to properly configure script in windows

const chalk = require('chalk')
const boxen = require('boxen')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const util = require('util');
const fs = require('fs')


const exec = util.promisify(require('child_process').exec);


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

// output('probando output')

const argv = yargs(hideBin(process.argv)).argv
const defaultArg = argv._.toString()

const regex = /^https:\/\/www.codewars.com\/kata\/.+/

if (defaultArg.match(regex)) output('cool')
else output('not cool')


async function ls() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

//TODO create a function that checks if there is a git with codewars-katas at all if not then 
//ask user to create it



async function getTopLevelGit() {
  const { stdout, stderr } = await exec('git rev-parse --show-toplevel');
  console.log('top level git path:')
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}
async function getTopLevelGitName() {
  const { stdout, stderr } = await exec('basename `git rev-parse --show-toplevel`');
  return stdout 
  // console.log('top level git name:')
  // console.log('stdout:', stdout);
  // console.log('stderr:', stderr);
}
getTopLevelGit()
if (getTopLevelGitName().toString() !== 'codewars-katas') output('cant find codewars-katas git project')


console.log('current working directory:', process.cwd())
console.log('is this constantly  updating?')

//TODO get the name of the repository and check if it matches some standard
//like codewars-katas or just codewars
//
//add node fs and asios and start having fun with that:
//
//
// basename `git rev-parse --show-toplevel` will show you the top level git
//
//to movo to the top level.... cd $(git rev-parse --show-toplevel)
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
