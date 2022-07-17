#!/usr/bin/env node
//this is a shebang, tells linux what sort of script it is
//also required by node to properly configure script in windows

const chalk = require('chalk')
const boxen = require('boxen')
const yargs = require('yargs')

const options = yargs
  .usage("Usage: -n <name>")
  .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
  .argv


const greeting = `Hello, ${options.name}!`;




const chalked = chalk.white.bold(greeting)

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555"
};
const msgBox = boxen( chalked, boxenOptions );

console.log(msgBox);
