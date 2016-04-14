var fs = require('fs');
var split = require('split');
var through = require('through2');
var lines = 0;
process.stdin.pipe(split()).pipe(through(function (line, _, next) {
  lines++;
  this.push(parseLine(line) + "\n");
  next();
})).pipe(process.stdout);

function parseLine(line) {
  if (lines % 2 === 0) { return line.toString().toUpperCase() } else {return line.toString().toLowerCase() };
}
