

let money = 100;
let income = "фриланс";
let addExpenses = "КАФЕ, магазин, аптека";
let deposit = true;
let mission =200;
let period = 3;

console.log(typeof money);
console.log(typeof deposit);
console.log(typeof income);
console.log("Длина строки income = " + income.length);
console.log("Период " + period + " месяца" + "\nЦель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(","));

let budgetDay = money / 30;
console.log("Дневной бюджет = " + budgetDay + " Остаток от деления = " +  money % 30 );




