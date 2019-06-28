var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Tom');
var cat = new Cat('Jerry');
console.log(cat);
dog.sayHi();
cat.die();
dog.eat(cat);

console.log(dog);