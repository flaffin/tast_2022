'use strict';
let money = prompt('Ваш месячный доход?');
console.log(money);

let addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(','));

let deposit = !!prompt('есть ли у вас депозит в банке?');

console.log('Тип money ' + typeof money);
console.log('Тип income ' + typeof income);
console.log('Тип deposit ' + typeof deposit);

let answer1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let answer2 = prompt('Во сколько это обойдется?');
let answer3 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let answer4 = prompt('Во сколько это обойдется?');


let budgetMonth = money - answer2 - answer4;
console.log('Доход за месяц:' + budgetMonth);1000

let mission =200;
let missionMonth = Math.ceil(mission/budgetMonth);
console.log('За сколько месяцев достигним цели:' + missionMonth);

let budgetDay = Math.floor(budgetMonth/30);
console.log('Бюждет в день:' + budgetDay);

if (budgetDay > 800){
        console.log('Высокий уровень дохода');
    } else if ((budgetDay > 300) && (budgetDay <= 800)){
        console.log('Средний уровень дохода');
    } else if ((budgetDay >= 0) && (budgetDay <= 300)){
        console.log('Низкий уровень дохода');
    } else if (budgetDay < 0){
        console.log('Что то пошло не так');
}

