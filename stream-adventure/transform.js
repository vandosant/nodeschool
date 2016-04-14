var through = require('through2');
var stream = through(function write(buffer, __, next) {
  this.push(buffer.toString().toUpperCase());
  next();  
});
process.stdin.pipe(stream).pipe(process.stdout);
