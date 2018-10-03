/*************************************
* Functions
*/

/*
function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1985);
var ageJane = calculateAge(1969);

// console.log(ageJohn,ageMike,ageJane);


function yearsUntilRetirement(year,name) {
  var age = calculateAge(year);

  retirement = 65 - age;

  if(retirement>0){
    console.log(name + ' retires in ' + retirement + ' years ');
  }else {
    console.log(name + ' is already retired ');
  }



}

yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1947,'Jane');
yearsUntilRetirement(1985,'Mike');

*/

/*************************************
* Function statements and expressions
*/

//function declaration
// function whatDoYouDo(job, name){
//
//
// }

//function expression
var whatDoYouDo =  function(name,job){

  switch (job) {
    case 'teacher':
      return name + ' teaches how to code';
    case 'driver':
        return name + ' drives a cab in Texas';
    case 'designer':
        return name + ' designes beautiful websites';
    default:
        return name + ' does his job very well !!'
    }
}

console.log(whatDoYouDo('John','teacher'));
console.log(whatDoYouDo('Jane','designer'));
console.log(whatDoYouDo('Mike','driver'));
console.log(whatDoYouDo('Mark','Coder'));
