var john = {
  name: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalAmount = [];
    for (var i = 0; i < this.bills.length; i++) {

      var bill = this.bills[i];
      var perc;

      if (bill < 50) {
        perc = 0.2;
      } else if (bill >= 50 && bill < 200) {
        perc = 0.15;
      } else {
        perc = 0.1;
      }
      var tip = bill * perc;
      this.tips.push(tip);
      this.finalAmount.push(bill + tip);
    }
  }
}


john.calcTips();
console.log(john);

console.log('==================================');

var mark = {
  name: 'Mark Marsh',
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalAmount = [];
    for (var i = 0; i < this.bills.length; i++) {

      var bill = this.bills[i];
      var perc;

      if (bill < 100) {
        perc = 0.2;
      } else if (bill >= 100 && bill < 300) {
        perc = 0.1;
      } else {
        perc = 0.25;
      }
      var tip = bill * perc;
      this.tips.push(tip);
      this.finalAmount.push(bill + tip);
    }
  }
}

mark.calcTips();
console.log(mark);


function calcAvg(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

var johnAvg = calcAvg(john.tips);
var markAvg = calcAvg(mark.tips);

console.log(johnAvg, markAvg);

if (johnAvg > markAvg) {
  console.log('John\'s family tips higher than Mark\'s  on average');
}else if (johnAvg < markAvg) {
  console.log('Mark\'s family tips higher than John\'s  on average');
}else{
  console.log('John\'s family tips as much as Mark\'s  on average');
}
