function Cat(name) {
	this.name = name;
	this.isDie = false;
	this.stomache = [];
};

Cat.prototype.eat = function(mouse) {
	this.stomache.push(mouse);
}
Cat.prototype.die = function() {
	this.isDie = true;
};

module.exports = Cat;