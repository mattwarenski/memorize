#!/usr/bin/node

const createGenerator = require('./create-generator.js')
const ArgumentParser = require('argparse').ArgumentParser;
const fs = require('fs');
const readline = require('readline');
const AsciiTable = require('ascii-table')

const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp:true,
  description: 'Argparse example'
});
parser.addArgument(
  [ '-f', '--file' ],
  {
    help: 'file containing text',
    required : true
  }
);
parser.addArgument(
  [ '-l', '--level' ],
  {
    help: 'level. Todo: add description of levels',
    required : true
  }
);
var args = parser.parseArgs();

const text = fs.readFileSync(args.file).toString();

const generator = createGenerator(text, args.level)

process.stdout.write('\033c');
console.log(generator.next().value);

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.on('line', function (input) {
  const nextVal = generator.next();

  if (nextVal.done){
    console.log("done")
    process.exit();
  } 
  process.stdout.write('\033c');
  console.log(nextVal.value)
});

