var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var cat = new Cat('Tom');
var mouse = new Mouse('Mickey');
var dog = new Dog('Co ho');


cat.eat(mouse);

try {
	cat.eat(dog);	
} catch (error) {
	console.log('Error While Cat eating dog');
}
console.log(cat);
// var dog = new Dog('Tom');
// var cat = new Cat('Jerry');
// console.log(cat);
// dog.sayHi();
// cat.die();
// dog.eat(cat);
