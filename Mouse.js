function Mouse(name) {
	this.name = name;
	this.isDie = false;
}
Mouse.prototype.isDie = function() {
	this.die = true;
};

module.exports = Mouse;

