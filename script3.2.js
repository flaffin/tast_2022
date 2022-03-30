'use strict';

// Вывести все дни недели

const ruWeek = 'Понедельник, \nвторник, \nсреда, \nчетверг, \nпятница, \nсуббота, \nвоскресенье';
const enWeek = 'Monday, \nTuesday, \nWednesday, \nThursday, \nFriday, \nSaturday, \nSunday';


// через if


function value(question){
   let lang = prompt(question, 'ru/en');
  
   if (lang === null) {
    return;
}
    if (lang === 'ru'){
        console.log(ruWeek);
        return;
    } if (lang === 'en'){
        console.log(enWeek);
        return;
    }  else {
        // while ((lang === 'en') || ((lang === 'ru'))){
        // }
        value('Введите значение еще раз. Доступно только ru/en :');
    }
   
};

value('Введите значение');



// // через case


function value(question){
    let lang = prompt(question, 'ru/en');

switch (lang){

    case null:
    break;
    case 'ru':
        console.log(ruWeek);
    break;
    case 'en':
        console.log(enWeek);
    break;
    default:
        value('Введите значение еще раз. Доступно только ru/en :');
}
};

value('Введите значение');


// // через масив 

// let lang = prompt('Введите значение', 'ru/en');

function value(question){

let lang = prompt(question, 'ru/en');

lang === null ? false : lang === 'ru' ? console.log(ruWeek.split(', \n')) : lang === 'en' ? console.log(enWeek.split(', \n')) : value('Введите значение еще раз. Доступно только ru/en :');


 };

value('Введите значение');



// // Имена и должности


const namePerson = prompt('введите значение', 'Артем / Максим или другое');

namePerson === 'Артем' ? console.log('директор') : namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');
