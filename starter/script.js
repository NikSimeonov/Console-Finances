//Adding this scirpt JS file for better readability of the code.

// 1) Printing the tolal number of months in the dataset.
var totalMonths = finances.length;

var totalProfitLosses = 0;

//2) Net total amount of Profit/Losses over the entire period.

  for (var i = 0; i < finances.length; i++) { 
      totalProfitLosses += finances[i][1]; 
      
//3 Average change in Profit/Losses over the entire period.

var averageChange = Math.round(totalProfitLosses / totalMonths);

//4 Greatest increase in profits (month and amount) over the entire period.
var greatestIncrease = finances.reduce((previous, current) => {
  return current[0] > previous[0] ? current : previous
});
  
//5 Greatest decrease in losses (month and amount) over the entire period.
var greatestDecrease = finances.reduce((previous, current) => {
  return current[0] < previous[0] ? current : previous
});

}

console.log('Financial Analysis');
console.log('---------------------------------');
console.log('Total Months:' + ' ' + finances.length);
console.log('Total:' + ' ' + '$' + totalProfitLosses);
console.log('Average  Change ' + '$' + averageChange);
console.log('Greatest Increase in Profits:' + greatestIncrease);
console.log('Greatest Decrease in Profits:' + greatestDecrease);