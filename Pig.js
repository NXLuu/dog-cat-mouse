function Pig() {

	this.stomach = [];
}
Pig.prototype.eat = function(dog) {
	this.stomach.push(dog);
};