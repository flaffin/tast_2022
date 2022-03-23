'use strict';

let money;

let isNumber = function(n) {
    return !isNaN((parseFloat(n))) && isFinite(n);
};

let start = function(){
        money = prompt('Ваш месячный доход?', '10000');
        
            while (!isNumber(money)) {
                money = prompt('Ваш месячный доход?', '10000');
            }
            return money;
    };
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function(){
        let addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую', 'Кафе, еда, вода');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = !!prompt('есть ли у вас депозит в банке?', 'Да');
        let question;
        let  answer;

        for (let i = 0; i<2; i++){

            question = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кафе/еда/вода');

            answer = prompt('Во сколько это обойдется?');
            while (!isNumber(answer)) {
                answer = prompt('Во сколько это обойдется?');
            }
            answer =Number(answer);
            appData.expenses[question] =  answer;
        }

        console.log(appData.expenses);
        
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function(){
  
         let sum =0;
        for (let key in appData.expenses){ 
          sum+=appData.expenses[key];   
        }
    appData.expensesMonth = sum;
    },
    getBudget: function(){

        appData.budgetMonth =  appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth/30);

        console.log('Бюждет в месяц:' + appData.budgetMonth);
        console.log('Бюждет в день:' + appData.budgetDay);
    },
    getTargetMonth: function(){

        let missionMonth = Math.floor(appData.mission/appData.budgetMonth);
        if (missionMonth >= 0){
            console.log('Цель будет достигнута за: ' + missionMonth + ' месяца');
        } else {
            console.log('Цель НЕ будет достигнута');

        }
    },
    getStatusIncome: function(){
    if (appData.budgetDay > 800){
            return('Высокий уровень дохода');
        } else if ((appData.budgetDay > 300) && (appData.budgetDay <= 800)){
            return('Средний уровень дохода');
        } else if ((appData.budgetDay >= 0) && (appData.budgetDay <= 300)){
            return('Низкий уровень дохода');
        } else if (appData.budgetDay < 0){  
            return('Что то пошло не так');
        }
    }
};

appData.asking();
appData.getExpensesMonth();
let expensesAmount = appData.expensesMonth;
console.log('Расходы за месяц:' + expensesAmount);
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

