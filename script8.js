'use strict';

let money;

let isNumber = function(n) {
    return !isNaN((parseFloat(n))) && isFinite(n);
};

let start = function(){
        money = prompt('Ваш месячный доход?', '10000');
        
            while (!isNumber(money)) {
                money = prompt('Ваш месячный доход?','10000');
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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function(){

        if (confirm('Есть ли у Вас дополнительный источник заработка?')){
            let itemIncome = prompt('Какой у Вас есть дополнительный заработок?', 'ИП');
            
            while (isNumber(itemIncome)) {
                itemIncome = prompt('Какой у Вас есть дополнительный заработок?', 'ИП');
            }
            let cashIncome = prompt('Сколько в месяц Вы на этом зарабатываете?', '10000');
            
            while (!isNumber(cashIncome)) {
                cashIncome = prompt('Сколько в месяц Вы на этом зарабатываете?', '10000');
            }
            appData.income[itemIncome] =cashIncome;
        }

        let addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую', 'кAфе,дOмиНо,кино,бокс');
        
        addExpenses = addExpenses.toLowerCase().split(',');
        let newaddExpenses =[];

        for (let i = 0; i < addExpenses.length; i++){
            let test = addExpenses[i];
            let first = test.substring(0,1).toUpperCase();
            let second = test.substring(1);
            let newtest = first + second;
            newaddExpenses.push(newtest);
            newaddExpenses.join(', ');
        }

        appData.addExpenses = newaddExpenses.join(', ');
        
        appData.deposit = !!prompt('есть ли у вас депозит в банке?');
       
        let question;
        let  answer;

        for (let i = 0; i<2; i++){

            question = prompt('Какие обязательные ежемесячные расходы у вас есть?');
            while (isNumber(question)) {
                question = prompt('Какие обязательные ежемесячные расходы у вас есть?');
            }
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
    },

    getInfoDeposit: function(){

        if(appData.deposite){
            appData.percentDeposit = promt('Какой годовой процент?', '10');
            while (isNumber(appData.percentDeposit)) {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }
            appData.moneyDeposit = promt('Какая сумма заложена?', 10000);
            while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
let expensesAmount = appData.expensesMonth;
console.log('Расходы за месяц:' + expensesAmount);
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
   
console.log('Обязательные расходы: ' + appData.addExpenses);

// console.log(appData.percentDeposit, appData.moneyDeposit, appData.budgetMonth * appData.period);

