'use strict';
let money = prompt('Ваш месячный доход?');
console.log('Ваш месячный доход ' + money);
let income = 'фриланс';
let addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(','));

let deposit = !!prompt('есть ли у вас депозит в банке?');

function showTypeof(){
    return typeof(type);
}

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log('type = ' + showTypeof());


let answer1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let answer2 = prompt('Во сколько это обойдется?');
let answer3 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let answer4 = prompt('Во сколько это обойдется?');

money = Number(money);
answer2 = Number(answer2);
answer4 = Number(answer4);

let mission =1000;

function getExpensesMonth (){
    return  answer2 + answer4;
}
getExpensesMonth();

console.log('Расходы за месяц:' + getExpensesMonth ());

function getAccumulatedMonth(){
    return (money - answer2 - answer4);
}

let accumulatedMonth = getAccumulatedMonth();

console.log('Накопления за месяц:' + accumulatedMonth);

function getTargetMonth(){
    return  Math.floor(mission/accumulatedMonth);
}
let missionMonth = getTargetMonth();

console.log('Цель будет достигнута за: ' + missionMonth + ' месяца');

let budgetDay = Math.floor(accumulatedMonth/30);
console.log('Бюждет в день:' + budgetDay);

let getStatusIncome = function(){
if (budgetDay > 800){
        return('Высокий уровень дохода');
    } else if ((budgetDay > 300) && (budgetDay <= 800)){
        console.log('Средний уровень дохода');
    } else if ((budgetDay >= 0) && (budgetDay <= 300)){
        return('Низкий уровень дохода');
    } else if (budgetDay < 0){
        return('Что то пошло не так');
}
}
console.log(getStatusIncome());


