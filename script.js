

const money = 100,
 income = "фриланс",
 addExpenses = "КАФЕ, магазин, аптека",
 deposit = true,
 mission =200,
 period = 3,
 budgetDay = money / 30;

console.log(typeof money);
console.log(typeof deposit);
console.log(typeof income);
console.log("Длина строки income = " + income.length);
console.log("Период " + period + " месяца" + "\nЦель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(","));
console.log("Дневной бюджет = " + budgetDay + " Остаток от деления = " +  money % 30 );




