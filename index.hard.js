'use strict';

function DomElement(selectorString, options) {

    this.selectorString = selectorString;
    options = options || {};
    this.height = options.height,
    this.width = options.width,
    this.bg = options.bg,
    this.position = options.position;
    this.fontSize = options.fontSize,
    this.elem = 0;
    this.build = function(){

        let newString = Array.from(this.selectorString);

            let elem = document.createElement('div');
            newString.splice(0,1);
            newString = newString.join('');
            elem.className = newString;
            elem.innerHTML = 'Квадрат';
            elem.style.height = this.height;
            elem.style.width = this.width;
            elem.style.background = this.bg;
            elem.style.fontSize = this.fontSize;
            elem.style.position =this.position;
            document.body.prepend(elem);
            this.elem = document.querySelector('.' + newString);
            console.log(this.elem );
    },
    this.transition =function(arrow){
        
        let coordinates = this.elem.getBoundingClientRect();
         if (arrow === 'ArrowUp'){
           this.elem.style.top = coordinates.top - 10 + 'px';
         } else if (arrow === 'ArrowDown') {
            this.elem.style.top = coordinates.top + 10 + 'px';
        } else if (arrow === 'ArrowLeft') {
            this.elem.style.left = coordinates.x - 10 + 'px';
        } else if (arrow === 'ArrowRight') {
        this.elem.style.left = coordinates.x + 10 + 'px';
         }
    };
};

let string1 = new DomElement('.best', {height: '100px', width: '100px', bg: 'yellow', position: 'absolute'});


document.addEventListener('DOMContentLoaded', () => {string1.build()});

document.addEventListener('keydown',()=> {string1.transition(event.key)});