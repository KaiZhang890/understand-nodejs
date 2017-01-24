var http = require('http')

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type':'text/plain' });
  res.end('Hello world\n');
}).listen(1337, '127.0.0.1');

// var fs = require('fs');
// var readable = fs.createReadStream(__dirname + '/config.js', { encoding: 'utf8', highWaterMark: 1024 });
// readable.on('data', function(chunk) {
//   console.log(chunk);
// });

/*
var fs = require('fs');
var greet = fs.readFileSync('./config.js', 'utf8');
console.log(greet);

fs.readFile('./config.js', 'utf8', function(err, data) {
  console.log(data);
});
console.log('Done!');
*/

/*
var buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toJSON());
console.log(buf.toString());

buf.write('wo');
console.log(buf.toJSON());
console.log(buf.toString());
*/

/*
function Persion(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
Persion.prototype.greet = function() {
  console.log(`Hello, ${this.firstname} ${this.lastname}`);
}

var john = new Persion('John', 'Doe');
john.greet();
var jane = new Persion('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
*/

/*
class Persion {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
  }
}

var john = new Persion('John', 'Doe');
john.greet();
var jane = new Persion('Jane', 'Doe');
jane.greet();

console.log(john);
console.log(john.__proto__);
console.log(john.__proto__.__proto__);
console.log(john.__proto__.__proto__.__proto__);
*/

/*
var obj = {
  name: 'John Doe',
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe'});
*/

/*
var name = 'John Doe';

var greet = 'Hello ' + name;
var greet2 = `Hello ${name}`;
console.log(greet);
console.log(greet2);
*/

/*
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
  console.log(this.greeting);
  this.emit('greet');
}

var greeter1 = new Greetr();
greeter1.on('greet', function() {
  console.log('Someone greeted!');
})
greeter1.greet();
*/

/*
var greet = require('./greet.js');
greet();

var config = require('./config');
console.log(config.events.GREET);
*/

/*
var person = {
  firstname: '',
  lastname: '',
  greet: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
*/
