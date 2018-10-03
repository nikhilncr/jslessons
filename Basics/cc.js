/*********************************
*  Coding challenge 1

//John's data
var massJohn,heightJohn, bmiJohn;
massJohn = 70; //kg
heightJohn = 1.65;  //mtrs
bmiJohn = massJohn / (heightJohn ** 2);
console.log('BMI John : '+bmiJohn);

//Mark's data
var massMark, heightMark, bmiMark;
massMark = 60; //kg
heightMark = 1.70; //mtrs
bmiMark = massMark / (heightMark ** 2);

console.log('BMI Mark : '+bmiMark);

var isMarkHigherBMI = bmiMark > bmiJohn;

console.log(isMarkHigherBMI);

if(bmiMark > bmiJohn){
  console.log('Mark\'s BMI is higher than John\'s');
}else {
  console.log('John\'s BMI is higher than Mark\'s');
}

*/

/********************************
*  Coding challenge 2
*/

var j1, j2, j3,jAvg;
j1 = 96; j2 =  127; j3 = 110;
jAvg = (j1 + j2 + j3)/3;
console.log('John\'s Team Average :'+jAvg);

var m1, m2, m3, mAvg;
m1 = 116; m2=94; m3=123;
mAvg = (m1+m2+m3)/3;
console.log('Mike\'s Team Average :'+mAvg);

var ma1, ma2, ma3, maAvg;
ma1 = 97; ma2=134; ma3=105;
maAvg = (ma1+ma2+ma3)/3;
console.log('Mary\'s Team Average :'+maAvg);

if(jAvg > mAvg){
  console.log('John\'s team is the Winner !!');
}
else if (jAvg < mAvg) {
    console.log('Mike\'s team is the Winner !!');
}else {
    console.log('It\'s a draw!!');
}
