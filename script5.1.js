'use strict';

// Задача 1

let arr = [];

function fillArray(number){ 
arr.push(number);
}

fillArray('23')
fillArray('55')
fillArray('109')
fillArray('467')
fillArray('23444')
fillArray('489')
fillArray('76')

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

 function outputNumber(){
    for (let i= 2; i < 101; i++){
        for (let j = 2; j < i; j++){
            if ((i % j) === 0){
                continue;
            } 
            j++;
            }
            console.log(i);
    }
    
}
outputNumber();