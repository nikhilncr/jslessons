/*
var firstNname = 'Nikhil'
console.log("Hello " + firstNname);

var lastName = 'Chagatoor Rudramuni Gowda';
console.log('Your last name is '+lastName);

var age = 28;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job='Software Developer'
console.log(job);
*/

// This is a singleline comment

/*******************************
Variable mutation and coercion
*/

/*
var firstNname = 'Nikhil';
var age = 28;
console.log(firstNname + ' '+ age);

var job, isMarried;
job = 'Software Developer'
isMarried = false;

console.log(firstNname+' is a '+age+' year old '+job+
            '. Is he married? ' +isMarried);

//variable mutation

age = 'twenty eight';
alert(firstNname+' is a '+age+' year old '+job+
            '. \nIs he married? \n' +isMarried);

var lastName = prompt('What is your last Name !?');
console.log(lastName);

*/

/*************************
Basic Operators
*/
/*
var currentYear =  new Date().getFullYear();
var birthYear = 1990;
console.log(currentYear-birthYear);

console.log('~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~');
console.log(100*2);
console.log(100/2);
console.log(100+2);
console.log(100-2);
console.log(100/0);
console.log('~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~');

var now, ageJohn, ageMark;
now = new Date().getFullYear();
ageJohn = 28;
ageMark = 30;

//logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeDef Operators
console.log(typeof ageJohn);
console.log(typeof currentYear);
var x=null;
console.log(typeof x);
var y;
console.log(typeof y);
*/

/************************************
Operator Precedence
*/

/*
var now, yearJohn, fullAge;
now = new Date().getFullYear();
yearJohn = 1989;
fullAge = 18;

//multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
// arithmetic Operator has higher Precedence than < > <= >=
// = comes towards the end

var mdnLink = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence';
console.log('Operator Precedence Link : '+mdnLink);

//Grouping
var a,b;
a = 10;
b = 20;
console.log(a+b/2) // prints 20
console.log((a+b)/2); // prints 15
// Grouping takes precedence

//multiple assignments

var x,y;
x = y= (3+5)*4-6 // = 26
console.log(x);
console.log(x,y);

//More Operators
x*=2; //x = x*2;
console.log(x);

x+=10; //x = x+10;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);
*/

// IF / Else

/*

var firstNname = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
  console.log(firstNname + ' is Married!');
} else {
  console.log(firstNname + ' is Single! '+
  '\nHe will hopefully marry soon');
}

var isMarried = true;
if(isMarried){
  console.log(firstNname + ' is Married!');
} else {
  console.log(firstNname + ' is Single! '+
  '\nHe will hopefully marry soon');
}

*/

/********************************
If Else if
/*
/*
var age = prompt('Enter Age !');

if(age < 13){
  alert('You are a boy/girl');
}else if (age >=13 &&  age < 20) {
  alert('You are a teenager');
}else if (age >= 20 && age < 30) {
  alert('You are a young man / young lady');
}
else {
  alert('You are a man/lady');
}
*/

/********************************
*Ternary Operators and switch cases statements
*/
/*
//Ternary
var name = 'John';
var age = 22;

age >= 21 ? console.log(name + ' can drink beer.') :
  console.log(name + ' can drink Juice.');

var drink = age >=21 ? 'Beer':'Juice';

console.log(drink);


//Switch statements

var job = 'teacher';

switch (job) {
  case 'teacher':
      console.log('Teach the world');
    break;

  case 'driver':
      console.log('Drive safely');
      break;
  case 'coder':
      console.log('Code well !');
    break;
  case 'designer':
      console.log('Designs beautifully');
    break;
  default:
    console.log('Do your job really well !!');
}


age = 31;
switch (true) {
  case age < 13:
    console.log(name + ' is a boy/girl.');
    break;
  case age >= 13 && age < 20:
    console.log(name + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(name + ' is a young man / young lady.');
    break;
  default:
    console.log(name + ' is a man / lady.');
}
*/

/************************************
* Truthy and Falsy values
*/


// false values : undefined, null, 0, '', NaN
//Truthy values : Non Falsy values

var height;

height = ' ';
if(height || height === 0){
  console.log('variable is defined');
}else {
  console.log('variable is not defined');
}


//Equality comparators
var h = '23';
if(h== 23){
console.log('Type coercion done');
}
if (h === 23) {
  console.log('h and 23 match the data type');
}
