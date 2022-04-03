'use strict';

// Задача 1

const arr = ['23', '55', '109', '467', '23444', '489','76'];

arr.forEach((elem) =>{
    if ((elem[0] === '2') || (elem[0] === '4') ){
    console.log(elem);
    }
});



// Задача 2

const arrNew = [];

function fillArray(){

for (let i=1; i<101; i++){
    arrNew.push(i); 
}
}
fillArray();

let result = arrNew.map(function(item, index, arrNew){
    let arrDivide = [];
    for (let j = 1; j <= index + 1; j++){
                    if (item % j === 0){
                        arrDivide.push(j);
                    }
                }
    const word = 'Чило = '+ item + ' Делители у числа:  ' + arrDivide;

     if (arrDivide.length === 2){
        console.log(word);
     }
});