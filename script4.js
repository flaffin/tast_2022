'use strict';
 const money = prompt('Ваш месячный доход?', '10000'),
 income = 'фриланс',
 addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую', 'Кафе, еда, вода'),
 deposit = !!prompt('есть ли у вас депозит в банке?', 'Да'),
 answer1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кафе'),
 answer2 = prompt('Во сколько это обойдется?', '100'),
 answer3 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Еда'),
 answer4 = prompt('Во сколько это обойдется?', '200'),
 mission =1000,
 moneyNum = Number(money),
 answer2Num = Number(answer2),
 answer4Num = Number(answer4);

console.log('Ваш месячный доход ' + money);
console.log(addExpenses.split(','));


function showTypeof(type){
    return typeof(type);
}
console.log('type = ' + showTypeof(money));
console.log('type = ' + showTypeof(income));
console.log('type = ' + showTypeof(deposit));

function getExpensesMonth (){
    return  answer2Num + answer4Num;
}
getExpensesMonth();
console.log('Расходы за месяц:' + getExpensesMonth ());

function getAccumulatedMonth(){
    return (moneyNum - answer2Num - answer4Num);
}

const accumulatedMonth = getAccumulatedMonth();
console.log('Накопления за месяц:' + accumulatedMonth);

const budgetDay = Math.floor(accumulatedMonth/30);
console.log('Бюждет в день:' + budgetDay);

function getTargetMonth(){
    return  Math.floor(mission/accumulatedMonth);
}
const missionMonth = getTargetMonth();
console.log('Цель будет достигнута за: ' + missionMonth + ' месяца');

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
}
console.log(getStatusIncome());


