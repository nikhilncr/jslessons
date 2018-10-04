

var billAmounts = [124,48,268];
var tips = [], totalAmounts=[];

console.log('Bill Amounts : '+ billAmounts);

for (var i = 0; i < billAmounts.length; i++) {
  tips.push(Math.round(calculateTip(billAmounts[i]),3));
  totalAmounts.push(billAmounts[i]+tips[i]);
}

function calculateTip(billAmount){

  if(billAmount<50){
    return 0.2* billAmount;
  }else if (billAmount >= 50 && billAmount <=200) {
    return 0.15 * billAmount;
  }else if (billAmount > 200) {
    return 0.1 * billAmount;
  }

}

console.log('Tips :'+ tips);
console.log('Total Amounts :'+totalAmounts);
