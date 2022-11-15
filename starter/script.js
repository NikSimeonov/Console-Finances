//Adding new JS file for better readability of the code.

// 1) Printing the tolal number of months in the dataset.
console.log('Total Months:' + ' ' + finances.length);

//2) Net total amount of Profit/Losses over the entire period.

var totalProfitLosses = 0;

  for (var i = 0; i < finances.length; i++) { 
      totalProfitLosses += finances[i][1]; 
  }
  console.log(totalProfitLosses);

//3 Average change in Profit/Losses over the entire period.

// var averageChange = Math.round(totalProfitLosses / 86) *100;
// console.log(averageChange);

//4 Greatest increase in profits (month and amount) over the entire period.

//5 Greatest decrease in losses (month and amount) over the entire period.



