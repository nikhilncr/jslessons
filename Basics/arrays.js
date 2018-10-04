/******************************
* Arrays
*/

//  Initialize the array
var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names[0]);
console.log(names);

//Mutate the data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


//Different Data types

var john = ['John','Smith',1990,'teacher',false];
//add element to end of the array
john.push('blue');
console.log(john);

//add element to beginning
john.unshift('Mr.');

console.log(john);

// remove element from the end
john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(1990));

//returns -1 if it cannot find in the array
console.log(john.indexOf('designer'));

var isDesigner = john.indexOf('designer')===-1 ? 'John is not a designer':
 john.indexOf('designer')
console.log(isDesigner);
