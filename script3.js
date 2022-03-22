'use strict';

const money = prompt('Ваш месячный доход?'),
 addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую'),
 deposit = !!prompt('есть ли у вас депозит в банке?'),
 answer1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
 answer2 = prompt('Во сколько это обойдется?'),
 answer3 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
 answer4 = prompt('Во сколько это обойдется?'),
 mission =200,
 budgetMonth = money - answer2 - answer4,
 missionMonth = Math.ceil(mission/budgetMonth),
 budgetDay = Math.floor(budgetMonth/30);

console.log(addExpenses.split(','));
console.log('Доход за месяц: ' + budgetMonth);
console.log('За сколько месяцев достигним цели: ' + missionMonth);
console.log('Бюждет в день: ' + budgetDay);

if (budgetDay > 800){
        console.log('Высокий уровень дохода');
    } else if ((budgetDay > 300) && (budgetDay <= 800)){
        console.log('Средний уровень дохода');
    } else if ((budgetDay >= 0) && (budgetDay <= 300)){
        console.log('Низкий уровень дохода');
    } else if (budgetDay < 0){
        console.log('Что то пошло не так');
}
