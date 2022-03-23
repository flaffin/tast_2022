'use strict';


// Задача 2

const numberMoves = 10; // колличество попыток
const number = prompt('Угадай число от 1 до 100');

function game(x){

function findNumber(number, numberMoves){
    numberMoves = numberMoves - 1; 
    if (numberMoves === 0){
        if (confirm("Вы не угадали. Попытки закончились, хотите сыграть еще?")){
            number = prompt('Введи число еще раз');
            findNumber(number, 10);
        } else {
            alert('Очень жаль!');
            return;
        }
        
        numberMoves = 3;
    }
    console.log('numberMoves = ' + numberMoves);

    if (number === null){
        alert('Игра окончена');
        return;
    }
    
    number = Number(number);
    console.log('number = ' + number);

    if (isNaN(number) === true){
        alert('Введи число!. Осталось ' + numberMoves + ' попыток');
    } else if (number > x){
        alert('Загаданное число меньше. Осталось ' + numberMoves + ' попыток');
    } else if ((number < x) && (number !== null)){
        alert('Загаданное число больше. Осталось ' + numberMoves + ' попыток');
    } else if (number === x){
        if (confirm ('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')){
            game(4);
        } else {
            alert('Очень жаль!');
            return;
        } 
    }   
    number = prompt('Введи число еще раз');
    
   findNumber(number, numberMoves);
}
 findNumber(number, numberMoves);
}

game(10);
