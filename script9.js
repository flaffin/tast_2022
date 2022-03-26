'use strict';

const dayWeek = ['Воскресенье', 'понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


// Пунк 2  функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"

function result(){


    const now = new Date(),
    day = new Date().toLocaleDateString(),
    nowMass = day.split('.'),
    todayWeek = dayWeek[now.getDay()],
    todayMonth = month[now.getMonth()],
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();

   
    let word = 'минут';
    let wordhours = 'час';
    let wordseconds = 'секунд';

    let  wordMas = word.split('');
    wordhours = wordhours.split('');
    wordseconds = wordseconds.split('');
    let wordMasResult =[];
    let hoursMasResult=[];
    let secondsMasResult=[];

        // Преобразование Часов
        let hoursMas= String(hours).split('');
        if (hoursMas.length === 1){
            hoursMas.unshift('0');
            hours = hoursMas.join('');
        }

        if (hoursMas[1] == 1){
            hoursMasResult = wordhours;
        } else if (hoursMas[1] == 0){
            wordhours.push('ов');
            hoursMasResult = wordhours.join('');
        } else if ((hoursMas[1] == 2) || (hoursMas[1] == 3) || (hoursMas[1] == 4)){
            wordhours.push('а');
            hoursMasResult = wordhours.join('');
        } else {
            wordhours.push('ов');
            hoursMasResult = wordhours.join('');
            
        }
    
    // Преобразование МИНУТ
    let minutesMas= String(minutes).split('');
        if (minutesMas.length === 1){
        minutesMas.unshift('0');
        minutes = minutesMas.join('');
        }

        if ((minutesMas[0] == 1) || (minutesMas[0] == 0)){
            wordMasResult = wordMas.join('');
        }
        if (minutesMas[1] == 1){
            wordMas.push('a');
            wordMasResult = wordMas.join('');
        } else if ((minutesMas[1] == 2) || (minutesMas[1] == 3) || (minutesMas[1] == 4)){
            wordMas.push('ы');
            wordMasResult = wordMas.join('');
        } else {
            wordMasResult = wordMas.join('');
            
        }

    // Преобразование СЕКУНД
    let secondsMas= String(seconds).split('');
    if (secondsMas.length === 1){
        secondsMas.unshift('0');
        seconds = secondsMas.join('');
    }

    if ((secondsMas[0] == 1) && (secondsMas[1] == 1)){
        secondsMasResult = wordseconds.join('');
    } else if (secondsMas[1] == 1){
        wordseconds.push('а');
        secondsMasResult = wordseconds.join('');
    } else if ((secondsMas[1] == 2) || (secondsMas[1] == 3) || (secondsMas[1] == 4)){
        wordseconds.push('ы');
        secondsMasResult = wordseconds.join('');  
    } else {
        secondsMasResult = wordseconds.join('');   
    }
   

    // console.log(hours + ' ' + hoursMasResult); 
    // console.log(minutes + ' ' + wordMasResult); 
    // console.log(seconds + ' ' + secondsMasResult); 

    console.log('Сегодня ' + todayWeek + ', ' + day[1] + ' ' + todayMonth + ', ' + hours + ' ' + hoursMasResult + ' ' + minutes + ' ' + wordMasResult + ' ' + seconds + ' ' + secondsMasResult);

}

 let timerId = setInterval(() => result(), 1000);

setTimeout(() => { clearInterval(timerId); alert('stop'); }, 15000);



//  3 пункт
let nowDate = new Date().toLocaleDateString(); 
let nowHours = new Date().toLocaleTimeString(); 

console.log(nowDate + ' - ' + nowHours);




