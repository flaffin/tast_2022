
const num = "266219";
const numArray = num.split("");

const result = numArray.reduce((mult, item) => mult * item);

const resultDegree = result**3;

console.log("Умножение чисел = " + result);
console.log("Cтепень = " + resultDegree);

const numMultStr = String(resultDegree);
console.log("Первые два символа: " + numMultStr.substr(0 , 2));