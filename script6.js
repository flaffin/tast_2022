'use strict';

// Задача 1

function game(){

let number = prompt('Угадай число от 1 до 100');

let x = 10;

function findNumber(number){

    if (number === null){
        alert('Игра окончена');
        return;
    }
    
    number = Number(number);
    console.log('number = ' + number);

    if (isNaN(number) === true){
        alert('Введи число!');
    } else if (number > x){
        alert('Загаданное число меньше');
    } else if ((number < x) && (number !== null)){
        alert('Загаданное число больше');
    } else if (number === x){
        alert('Поздравляю, Вы угадали!!!');
        return;
    } 
    number = prompt('Введи число еще раз');
   findNumber(number);
}
 findNumber(number)
}

game();

