'use strict';

function DomElement(selectorString, options) {

    this.selectorString = selectorString;
    options = options || {};
    this.height = options.height,
    this.width = options.width,
    this.bg = options.bg,
    this.fontSize = options.fontSize,
    this.build = function(){

        let newString = Array.from(this.selectorString);

        if (newString[0] === '.'){
            let elem = document.createElement('div');
            newString.splice(0,1);
            newString = newString.join('');
            elem.className = newString;
            elem.innerHTML = 'Фигура';
            elem.style.height = this.height;
            elem.style.width = this.width;
            elem.style.background = this.bg;
            elem.style.fontSize = this.fontSize;
            document.body.prepend(elem);

        } else if (newString[0] === '#'){
            let elem = document.createElement('p');
            newString.splice(0,1);
            newString = newString.join('');
            elem.id = newString;
            elem.innerHTML = 'Привет, сегодня хорошая погода! Светит солнце';
            document.body.prepend(elem);
            elem.style.height = this.height;
            elem.style.width = this.width;
            elem.style.background = this.bg;
            elem.style.fontSize = this.fontSize;

        } else {
           console.log('ошибка ввода');
        }
    };

    
    

};


let string1 = new DomElement('.best', {height: '100px', width: '150px', bg: 'red'});
let string2 = new DomElement('#best', {fontSize: '50px'});
let string3 = new DomElement('.bestFig', {height: '50px', width: '100px', bg: 'yellow', fontSize: '30px'});
let string4 = new DomElement('#bestString', {fontSize: '30px', bg: 'green'});
let string5 = new DomElement('bestString', {fontSize: '30px', bg: 'green'});

string1.build();
string2.build();
string3.build();
string4.build();
string5.build();

