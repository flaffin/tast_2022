'use strict';

const start = document.getElementById('start'),
plus1 = document.getElementsByTagName('button')[0],
plus2 = document.getElementsByTagName('button')[1],
// let checkBox = document.querySelector('.deposit');
checkBox1 = document.querySelector('#deposit-check'),
inpFields= document.querySelectorAll('.additional_income-item'),
inpFields1 = inpFields[0],
inpFields2 = inpFields[1],
budgetMonth = document.getElementsByClassName('result-total')[0],
budgetDay = document.getElementsByClassName('result-total')[1],
expensesMonth = document.getElementsByClassName('result-total')[2],
additionalIncome = document.getElementsByClassName('result-total')[3],
additionalExpenses = document.getElementsByClassName('result-total')[4],
incomePeriod = document.getElementsByClassName('result-total')[5],
targetMonth = document.getElementsByClassName('result-total')[6],
leftSide =  document.querySelector('.data'),
salaryAmount = leftSide.querySelectorAll('[type="text"]')[0],
incomeTitle = leftSide.querySelectorAll('[type="text"]')[1],
incomeAmount = leftSide.querySelectorAll('[type="text"]')[2],
additionalIncome1 = leftSide.querySelectorAll('[type="text"]')[3],
additionalIncome2 = leftSide.querySelectorAll('[type="text"]')[4],
expensesTitle = leftSide.querySelectorAll('[type="text"]')[5],
expensesAmount = leftSide.querySelectorAll('[type="text"]')[6],
additionalExpensesItem = leftSide.querySelectorAll('[type="text"]')[7],
depositAmount = leftSide.querySelectorAll('[type="text"]')[8],
depositPercent = leftSide.querySelectorAll('[type="text"]')[9],
targetAmount = leftSide.querySelectorAll('[type="text"]')[10],
periodSelect = leftSide.querySelector('[type="range"]');

