var chalk = require('chalk');
function Dog(name) {
	this.stomach = [];
	this.name = name;
};

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
}

Dog.prototype.sayHi = function() {
	console.log('Hi, i am a dog. This is my name:'+ chalk.blue(this.name));
}

module.exports = Dog;