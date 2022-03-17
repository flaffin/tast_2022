'use strict';

let income = 'фриланс';
let addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(','));

let isNumber = function(n) {
    return !isNaN((parseFloat(n))) && isFinite(n);
};


let deposit = !!prompt('есть ли у вас депозит в банке?');
let money;

let start = function(){
    money = prompt('Ваш месячный доход?');
    
        while (!isNumber(money)) {
            money = prompt('Ваш месячный доход?');
        }

};
start();

function showTypeof(type){
    console.log('type = ' + typeof type);
}

showTypeof(money);
showTypeof(income);
showTypeof(deposit);


let expenses = [];

let mission =100000;

function getExpensesMonth(){
    let sum =0;
    for (let i =0; i<2; i++){
        expenses[i] = prompt('Какие обязательные ежемесячные расходы у вас есть?');
        sum+= +prompt('Во сколько это обойдется?');

        while (!isNumber(sum)) {
            sum = prompt('Во сколько это обойдется?');
        }
    }
    console.log(sum);
    return  sum;
}
let expensesAmount = getExpensesMonth();


console.log('Расходы за месяц:' + expensesAmount);

function getAccumulatedMonth(){
    return (money - expensesAmount);
}

let accumulatedMonth = getAccumulatedMonth();

console.log('Накопления за месяц:' + accumulatedMonth);

function getTargetMonth(){

    let missionMonth = Math.floor(mission/accumulatedMonth);
    if (missionMonth >= 0){
        console.log('Цель будет достигнута за: ' + missionMonth + ' месяца');
    } else {
        console.log('Цель НЕ будет достигнута');

            }
}
getTargetMonth();

let budgetDay = Math.floor(accumulatedMonth/30);
console.log('Бюждет в день:' + budgetDay);

let getStatusIncome = function(){
if (budgetDay > 800){
        return('Высокий уровень дохода');
    } else if ((budgetDay > 300) && (budgetDay <= 800)){
        return('Средний уровень дохода');
    } else if ((budgetDay >= 0) && (budgetDay <= 300)){
        return('Низкий уровень дохода');
    } else if (budgetDay < 0){
        return('Что то пошло не так');
}
};

console.log(getStatusIncome());

