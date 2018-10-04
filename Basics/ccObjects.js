var john = {
  name    : 'John Smith',
  mass    : 70, //kg
  height  : 1.65, //mtrs
  calcBmi : function(){
    this.bmi =  this.mass / (this.height ** 2);
  }
}

var mark = {
  name    : 'Mark Sen',
  mass    : 65, //kg
  height  : 1.65, //mtrs
  calcBmi : function(){
    this.bmi =  this.mass / (this.height ** 2);
  }
}

john.calcBmi();
mark.calcBmi();

console.log('John BMI '+ john.bmi);
console.log('Mark BMI '+mark.bmi);

if(john.bmi > mark.bmi){
  console.log(john.name +' has a higher bmi of '+john.bmi);
}else if (john.bmi < mark.bmi) {
  console.log(mark.name +' has a higher bmi of '+mark.bmi);
}else{
  console.log('Both '+john.name +' and '+mark.name+
              ' have same Body Mass Index');
}
