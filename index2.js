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
rightSide = document.querySelectorAll('.result-total'),
leftInput = leftSide.querySelectorAll('[type="text"]'),
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
 placeholderName = document.querySelectorAll('[placeholder="Наименование"]'),
 cancel = document.querySelector('#cancel');
console.log(placeholderName);

let isNumber = function(n) {
    return !isNaN((parseFloat(n))) && isFinite(n);
};

const AppData = function(){
    this.budget= 0;
    this.budgetDay= 0;
    this.budgetMonth= 0;
    this.expensesMonth= 0;
    this.income= {};
    this.incomeMonth= 0;
    this.addIncome= [];
    this.expenses= {};
    this.addExpenses= [];
    this.incomePeriod= 0;
    this.deposit= false;
    this.percentDeposit= 0;
    this.moneyDeposit= 0;
};

AppData.prototype.start = function(){
    this.budget = +salaryAmount.value; 
    this.changeButton();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpensees();
    this.getAddIncome();
    this.getBudget();
    this.addInputSelect();
    this.showResult();
    };

AppData.prototype.showResult= function(){
        budgetMonth.value = this.budgetMonth;
        budgetDay.value = this.budgetDay;
        expensesMonth.value = this.expensesMonth;
        additionalExpensesItem.value = this.addExpenses.join(', ');
        expensesAmount.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriod.value = this.calcSavedMoney();
        inputSelect.addEventListener('input', this.calcSavedMoney);
    };
AppData.prototype.changeButton= function(){
        leftInput.forEach(etem => etem.disabled = true);
        // leftInput.forEach(etem => etem.style.backgroundColor="Yellow");
        start.style.display = 'none';
        cancel.style.display = 'initial';
    };
AppData.prototype.reset= function(){
        leftInput.forEach(etem => etem.value = '');
         leftInput.forEach(etem => etem.disabled = false);
        // leftInput.forEach(etem => etem.style.backgroundColor="pink");=leftInput.forEach(etem => etem.disabled = false);
        cancel.style.display = 'none';
        start.style.display = 'initial';
        periodSelect.value = '1';
        periodAmount.innerHTML = 1;
        rightSide.forEach(etem => etem.value = '');

        incomeItem = document.querySelectorAll('.income-items');
        let  incomeItemLenght= incomeItem.length;
        while  (incomeItemLenght > 1){
            incomeItem[incomeItemLenght-1].remove();
            incomeItemLenght = incomeItemLenght - 1;
        }
        document.querySelector('.income-amount').value = '';
        plus1.style.display = 'initial';

        expensesItems = document.querySelectorAll('.expenses-items');
        let  expensesItemsLenght= expensesItems.length;
        while  (expensesItemsLenght > 1){
            expensesItems[expensesItemsLenght-1].remove();
            expensesItemsLenght = expensesItemsLenght - 1;
        }
        document.querySelector('.expenses-amount').value = '';

        plus2.style.display = 'initial';

    };
AppData.prototype.addExpensesBlock= function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        cloneExpensesItem.querySelector('.expenses-title').value = '';
        cloneExpensesItem.querySelector('.expenses-amount').value = ''; 
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plus2);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            plus2.style.display = 'none';
        }
    };
AppData.prototype.getExpenses= function (){
        const _this = this;
expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = cashExpenses;
        }
        });
    };
 AppData.prototype.addIncomeBlocK= function(){
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        cloneIncomeItem.querySelector('.income-title').value = '';
        cloneIncomeItem.querySelector('.income-amount').value = ''; 
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, plus1);
        incomeItem = document.querySelectorAll('.income-items');
        if (incomeItem.length === 3){
            plus1.style.display = 'none';
        }
    };
AppData.prototype.getIncome= function(){
    const _this = this;
        incomeItem.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== ''){
                _this.income[itemIncome] = cashIncome;
            }
            });

        for (let key in _this.income){
            this.incomeMonth += + _this.income[key];
        };
    };
AppData.prototype.getAddExpensees= function(){
        const _this = this;
        let addExpenses = targetMonth.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                _this.addExpenses.push(item);
            }
        });
    };
AppData.prototype.getAddIncome= function(){
        const _this = this;
        inpFields.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                _this.addIncome.push(itemValue);
            }
        });
    };
 AppData.prototype.getExpensesMonth= function(){
        let sum =0;
        for (let key in this.expenses){
            this.expenses[key] = Number(this.expenses[key]);
          sum+=this.expenses[key];
        }
    this.expensesMonth = sum;
    };
AppData.prototype.getBudget= function(){
        this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth/30);
    };
AppData.prototype.getTargetMonth= function(){
        return targetAmount.value / this.budgetMonth;
    };
AppData.prototype.getStatusIncome= function(){
        if (budgetDay >= 800){
            console.log('Высокий уровень дохода');
        } else if (budgetDay >= 300){
            console.log('Средний уровень дохода');
        } else if (budgetDay >= 0){
            console.log('Низкий уровень дохода');
        } else {
            console.log('Что то пошло не так');
    }
    };
AppData.prototype.getInfoDeposit= function(){
        if(this.deposite){
            this.percentDeposit = promt('Какой годовой процент?', '10');
            while (isNumber(appData.percentDeposit)) {
                this.percentDeposit = prompt('Какой годовой процент?', '10');
            }
            this.moneyDeposit = promt('Какая сумма заложена?', 10000);
            while (!isNumber(appData.moneyDeposit)) {
                this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
        }
    };
AppData.prototype.calcSavedMoney= function(){
        return this.budgetMonth * periodSelect.value;
    };
AppData.prototype.addInputSelect= function(){
        periodAmount.innerHTML = periodSelect.value;
    };
AppData.prototype.addEventListener =function (){
    const _this = this;
    start.addEventListener('click', function(){
        if (salaryAmount.value === ''){
                    alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
                    return;
        } else {
            _this.start();   
        }
    });
    plus2.addEventListener('click', this.addExpensesBlock); 
    plus1.addEventListener('click', this.addIncomeBlocK);
    inputSelect.addEventListener('input', this.addInputSelect);
    cancel.addEventListener('click', this.reset);
    
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
    if (event.target.placeholder === "Сумма"){
        let currentElement = event.target;
        let poi = event.key;
        let  regx = /^[0-9]$/;
            if (poi.match(regx) || (event.keyCode === 8)){
            return;
            } else {
            event.preventDefault();
            alert('Используйте только цифры');
            }
        }
    });

    };

let calc = new AppData();
calc.addEventListener();







