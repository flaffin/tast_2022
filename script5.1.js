'use strict';

// Задача 1

const arr = [];

function fillArray(number){ 
arr.push(number);
}

fillArray('23');
fillArray('55');
fillArray('109');
fillArray('467');
fillArray('23444');
fillArray('489');
fillArray('76');

console.log(arr);

function showValues(){ 

    for (let i= 0; i < arr.length; i++){
        let findNumber= arr[i];
        if ((findNumber.charAt(0) === '2') || (findNumber.charAt(0) === '4') ){
            console.log(findNumber);
        }
    }
}
showValues();


// Задача 2

// const arrNew = [];

// function fillArray(){

// for (let i=1; i<101; i++){
//     arrNew.push(i); 
// }
// }
// fillArray();
// // console.log(arr1);

// let result = arrNew.map(function(item, index, arrNew){
//     let arrDivide = [];
//     for (let j = 1; j <= index + 1; j++){
//                     if (item % j === 0){
//                         arrDivide.push(j);
//                     }
//                 }
//     const word = 'Чило = '+ item + ' Делители у числа:  ' + arrDivide;

//      if (arrDivide.length === 2){
//         console.log(word);
//      }
// });