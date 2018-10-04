/*
//Object Literal Syntax
var john = {
  firstName : 'John',
  lastName  : 'Smith',
  birthYear : 1990,
  family : ['Jane','Mark','Mona','Tim',2],
  isMarried : false,
  job : 'teacher'
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john.isMarried = true;
console.log(john);


//new Object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane['lastName'] = 'Smith';
jane.birthYear = 1990;

console.log(jane);

*/

/**********************
 * Objects and Methods
 */


var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Mona', 'Tim'],
  isMarried: false,
  job: 'teacher',
  calcAge: function() {
    this.age = new Date().getFullYear() - this.birthYear;
  }
};

john.calcAge();
console.log(john);
