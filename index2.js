'use strict';

let start = document.getElementById('start'),

plus1 = document.getElementsByTagName('button')[0],
plus2 = document.getElementsByTagName('button')[1],
// let checkBox = document.querySelector('.deposit');
checkBox1 = document.querySelector('#deposit-check'),
inpFields= document.querySelectorAll('.additional_income-item'),
inpFields1 = inpFields[0],
inpFields2 = inpFields[1],
// budgetMonth = document.getElementsByClassName('result-total')[0],
budgetMonth = document.querySelector('.budget_month-value'),
budgetDay = document.getElementsByClassName('result-total')[1],
expensesMonth = document.getElementsByClassName('result-total')[2],
additionalIncome = document.getElementsByClassName('result-total')[3],
additionalExpenses = document.getElementsByClassName('result-total')[4],
incomePeriod = document.getElementsByClassName('result-total')[5],
// targetMonth = document.getElementsByClassName('result-total')[6],
targetMonth = document.querySelector('.additional_expenses-item'),
leftSide =  document.querySelector('.data'),
// salaryAmount = leftSide.querySelectorAll('[type="text"]')[0],
incomeTitle = leftSide.querySelectorAll('[type="text"]')[1],
incomeAmount = leftSide.querySelectorAll('[type="text"]')[2],
additionalIncome1 = leftSide.querySelectorAll('[type="text"]')[3],
additionalIncome2 = leftSide.querySelectorAll('[type="text"]')[4],
expensesTitle = leftSide.querySelectorAll('[type="text"]')[5],
// expensesAmount = leftSide.querySelectorAll('[type="text"]')[6],
// additionalExpensesItem = leftSide.querySelectorAll('[type="text"]')[7],
depositAmount = leftSide.querySelectorAll('[type="text"]')[8],
depositPercent = leftSide.querySelectorAll('[type="text"]')[9],
// targetAmount = leftSide.querySelectorAll('[type="text"]')[10],
inputSelect = leftSide.querySelector('[type="range"]');


let expensesItems = document.querySelectorAll('.expenses-items'),
 salaryAmount = leftSide.querySelectorAll('[type="text"]')[0],
 additionalExpensesItem = document.querySelector('.additional_expenses-value'),
 expensesAmount =  document.querySelector('.additional_income-value'),
 targetAmount = document.querySelector('.target-amount'),
 targetMonthValue = document.querySelector('.target_month-value'),
 incomeItem = document.querySelectorAll('.income-items'),
 periodSelect = document.querySelector('.period-select'),
 periodAmount = document.querySelector('.period-amount'),
 placeholderName = document.querySelectorAll('[placeholder="Наименование"]');
console.log(placeholderName);

let isNumber = function(n) {
    return !isNaN((parseFloat(n))) && isFinite(n);
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    incomePeriod: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    
    start: function(){
  
        appData.budget = +salaryAmount.value;  
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpensees();
        appData.getAddIncome();
        appData.getBudget();


        appData.showResult();
        
        },
    showResult: function(){
        budgetMonth.value = appData.budgetMonth;
        budgetDay.value = appData.budgetDay;
        expensesMonth.value = appData.expensesMonth;
        additionalExpensesItem.value = appData.addExpenses.join(', ');
        expensesAmount.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriod.value = appData.calcSavedMoney();
        inputSelect.addEventListener('input', appData.calcSavedMoney);
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        cloneExpensesItem.querySelector('.expenses-title').value = '';
        cloneExpensesItem.querySelector('.expenses-amount').value = ''; 
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plus2);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            plus2.style.display = 'none';
        }
    },
    getExpenses: function (){
        expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== ''){
            appData.expenses[itemExpenses] = cashExpenses;
        }
        });
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        cloneIncomeItem.querySelector('.income-title').value = '';
        cloneIncomeItem.querySelector('.income-amount').value = ''; 
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, plus1);
        incomeItem = document.querySelectorAll('.income-items');
        if (incomeItem.length === 3){
            plus1.style.display = 'none';
        }
    },
    getIncome: function(){
        incomeItem.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }
            });

        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        };
    },
    getAddExpensees: function(){
        let addExpenses = targetMonth.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        inpFields.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function(){
         let sum =0;
        for (let key in appData.expenses){
            appData.expenses[key] = Number(appData.expenses[key]);
          sum+=appData.expenses[key];
        }
    appData.expensesMonth = sum;
    },
    getBudget: function(){
        appData.budgetMonth =  appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },
    getTargetMonth: function(){
        return targetAmount.value / appData.budgetMonth;
    },
    getStatusIncome: function(){
        if (budgetDay >= 800){
            console.log('Высокий уровень дохода');
        } else if (budgetDay >= 300){
            console.log('Средний уровень дохода');
        } else if (budgetDay >= 0){
            console.log('Низкий уровень дохода');
        } else {
            console.log('Что то пошло не так');
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
        return appData.budgetMonth * periodSelect.value;
    },
    addInputSelect: function(){
        periodAmount.innerHTML = periodSelect.value;
    },
};

start.addEventListener('click', function(){
    if (salaryAmount.value === ''){
                alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
                return;
    } else {
        appData.start();
    }
});

plus2.addEventListener('click', appData.addExpensesBlock); 
plus1.addEventListener('click', appData.addIncomeBlock);
inputSelect.addEventListener('input', appData.addInputSelect);

document.addEventListener('keydown', function(event){
if (event.target.placeholder === "Наименование"){
let currentElement = event.target;
let poi = event.key;
let  regx = /^[а-яА-ЯёЁ\.\,]$/;
    if ((poi.match(regx)) || (event.keyCode === 32) || (event.keyCode === 8) || (event.keyCode === 16) || (event.keyCode === 17)){
    return;
    } else {
    event.preventDefault();
    alert('Используйте только русские буквы');
    }
}
});
document.addEventListener('keydown', function(event){
    if (event.target.placeholder === "Сумма"){
    let currentElement = event.target;
    let poi = event.key;
    let  regx = /^[0-9]$/;
        if (poi.match(regx)){
        return;
        } else {
        event.preventDefault();
        alert('Используйте только цифры');
        }
    }
    });

