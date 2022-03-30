'use strict';

//  Задача 2

function returnString(arg){

    if (!isNaN(Number(arg))){
        console.log('Число и мы выходим');
        return;
    }

    if (typeof arg === 'string'){
       arg = arg.trim();
        console.log(arg);
        
       let lengthString = arg.length;
        console.log(lengthString);

            if (lengthString > 30) {
                arg = arg.substring(0, 30);
                arg= arg + '...';
                console.log(arg);
            }
} else {
    console.log('Не строка');
}




}
//  returnString('    привет, как дела. Сегодня хорошая погода   ');

  returnString('6546766868');

//   returnString('65fgjhjkskdkfcnskeeeeeeeeeeeeeeeeeecsm46766868hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');