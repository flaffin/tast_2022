'use strict';

let money;
let isNumber = function(n) {
    return !isNaN((parseFloat(n))) && isFinite(n);
};

let start = function(){
    money = prompt('Ваш месячный доход?', '10000');
    money= Number(money);
        while (!isNumber(money)) {
            money = prompt('Ваш месячный доход?', '10000');
        }

};
start();

const income = 'фриланс',
 addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую', 'Кафе, еда, вода'),
 deposit = !!prompt('есть ли у вас депозит в банке?', 'Да'),
 expenses = [],
 mission =100000;


console.log(addExpenses.split(','));



function showTypeof(type){
    console.log('type = ' + typeof type);
}

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

function getExpensesMonth(){
    let sum =0;
    for (let i =0; i<2; i++){
        expenses[i] = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кафе/еда/вода');
        sum+= +prompt('Во сколько это обойдется?');

        while (!isNumber(sum)) {
            sum = prompt('Во сколько это обойдется?');
        }
    }
    console.log(sum);
    return  sum;
}
const expensesAmount = getExpensesMonth();
console.log('Расходы за месяц:' + expensesAmount);

function getAccumulatedMonth(){
    return (money - expensesAmount);
}

const accumulatedMonth = getAccumulatedMonth();
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

const budgetDay = Math.floor(accumulatedMonth/30);
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

