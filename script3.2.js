'use strict';

// Вывести все дни недели

let lang = prompt('введите значение_дни недели');

// через if

if (lang === 'ru'){
    console.log('Понедельник, \nвторник, \nсреда, \nчетверг, \nпятница, \nсуббота, \nвоскресенье');
} else if (lang === 'en'){
    console.log('Monday, \nTuesday, \nWednesday, \nThursday, \nFriday, \nSaturday, \nSunday');
} 

// через case
switch (lang){
    case 'ru':
        console.log('Понедельник, \nвторник, \nсреда, \nчетверг, \nпятница, \nсуббота, \nвоскресенье');
    break;
    case 'en':
        console.log('Monday, \nTuesday, \nWednesday, \nThursday, \nFriday, \nSaturday, \nSunday');
    break;
}

// через масив 
let masRU = ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'];
let masEn = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];

lang === 'ru' ? console.log(masRU) :  false;
lang === 'en' ? console.log(masEn) : false;

 
// Имена и должности
let namePerson = prompt('введите значение_Имя');

namePerson === 'Артем' ? console.log('директор') : false; 
namePerson === 'Максим' ? console.log('преподаватель') : false; 
namePerson != 'Артем' && namePerson != 'Максим' ? console.log('студент') : false; 

