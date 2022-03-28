'use strict';


const listBook = document.querySelectorAll('.book'),
advertising = document.querySelector('.adv');

// Удаление рекламы
advertising.remove();

// Получаю элементы, присваиваю ID и меняю местами
let listBookArray = Array.from(listBook);
let numberId=1;
listBookArray.forEach(element => {
    
        element.setAttribute('id', numberId);
        numberId++;
});

let book1 = document.querySelector('[id="1"]');
let book2 = document.querySelector('[id="2"]');
let book3 = document.querySelector('[id="3"]');
let book4 = document.querySelector('[id="4"]');
let book5 = document.querySelector('[id="5"]');
let book6 = document.querySelector('[id="6"]');

book2.insertAdjacentElement('afterend', book1);
book1.insertAdjacentElement('afterend', book5);
book5.insertAdjacentElement('afterend', book4);
book4.insertAdjacentElement('afterend', book6);

//  Изменение заголовка
book5.querySelector('a').innerHTML = 'Книга 3. this и Прототипы Объектов';

// Добавить картинку
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Востановить порядок глав 
// Книга2
let book1Head = book1.querySelectorAll('li');
let book1HeadArray = Array.from(book1Head);
let numberIdBook1=1;
book1HeadArray.forEach(element => {
    
        element.setAttribute('id', 'book2.' + numberIdBook1);
        numberIdBook1++;
});
let book23 = document.querySelector('[id="book2.3"]');
let book24 = document.querySelector('[id="book2.4"]');
let book25 = document.querySelector('[id="book2.5"]');
let book26 = document.querySelector('[id="book2.6"]');
let book27 = document.querySelector('[id="book2.7"]');
let book28 = document.querySelector('[id="book2.8"]');
let book29 = document.querySelector('[id="book2.9"]');
let book210 = document.querySelector('[id="book2.10"]');
let book211 = document.querySelector('[id="book2.11"]');

book24.insertAdjacentElement('afterend', book27);
book27.insertAdjacentElement('afterend', book29);
book210.insertAdjacentElement('afterend', book23);

// книга 5

let book6Head = book6.querySelectorAll('li');
let book6HeadArray = Array.from(book6Head);
let numberIdBook6=1;
book6HeadArray.forEach(element => {
    
        element.setAttribute('id', 'book6.' + numberIdBook6);
        numberIdBook6++;
});
let book62 = document.querySelector('[id="book6.2"]');
let book63 = document.querySelector('[id="book6.3"]');
let book64 = document.querySelector('[id="book6.4"]');
let book65 = document.querySelector('[id="book6.5"]');
let book66 = document.querySelector('[id="book6.6"]');
let book67 = document.querySelector('[id="book6.7"]');
let book68 = document.querySelector('[id="book6.8"]');
let book69 = document.querySelector('[id="book6.9"]');
let book610 = document.querySelector('[id="book6.10"]');
let book611 = document.querySelector('[id="book6.11"]');

book62.insertAdjacentElement('afterend', book610);
book610.insertAdjacentElement('afterend', book64);
book64.insertAdjacentElement('afterend', book65);
book68.insertAdjacentElement('afterend', book66);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let book3Head = book3.querySelectorAll('li');
let book3collektion = book3.querySelector('ul');
console.log(book3collektion);
let book3HeadArray = Array.from(book3Head);
let numberIdBook3=1;
book3HeadArray.forEach(element => {
    
        element.setAttribute('id', 'book3.' + numberIdBook3);
        numberIdBook3++;
});
const book39 = document.querySelector('[id="book3.9"]');
let book311 = book39.cloneNode(true);
book311.id = 'book3.11';
book311.innerHTML = 'Глава 8: За пределами ES6';
book3collektion.append(book311);
book39.after(book311);
