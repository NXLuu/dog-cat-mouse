function Mouse(name) {
	this.name = name;
	this.die = false;
}
Mouse.prototype.die = function() {
	this.die = true;
};

module.export = Mouse;

