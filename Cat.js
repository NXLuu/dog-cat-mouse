var Mouse = require('./Mouse');

function Cat(name) {
	this.name = name;
	this.isDie = false;
	this.stomache = [];
};

Cat.prototype.eat = function(animal) {
	if (animal instanceof Mouse)
		this.stomache.push(animal)
	else {
		throw new Error('Can can only eat Mouse!!!');
	}
}
Cat.prototype.die = function() {
	this.isDie = true;
};

module.exports = Cat;