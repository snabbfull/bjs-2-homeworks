"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2) - 4 * a * c;
  let root1;
  let root2;
 
  if (d === 0) {
    root1 = -b / (2 * a);
    arr.push(root1);
  }

  if (d > 0) {
    root1 = (-b + Math.sqrt(d)) / (2 * a);
    root2 = (-b - Math.sqrt(d))/ (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let payment = loanBody * (p + (p / (((1 + p) ** countMonths) - 1)));
  let totalPayment = Number((payment * countMonths).toFixed(2));
  return totalPayment;
}

