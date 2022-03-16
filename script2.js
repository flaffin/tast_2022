
let num = "266219";
num = num.split("");

let numMult = 1;

for (let i = 0; i<= num.length-1; i++) {
    numMult = numMult * num[i];
}

console.log("Умножение чисел = " + numMult);
console.log("степень = " + numMult**3);

numMultStr = String(numMult**3);
console.log("Первые два символа: " + numMultStr.substring(0 , 2));