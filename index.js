'use strict';

let color = document.querySelector('#color'),
btnChange = document.querySelector('#change'),
wrapper = document.querySelector('.wrapper');

btnChange.style.backgroundColor = "#ffffff";
wrapper.style.position= 'absolute';
wrapper.style.top= '50%';
wrapper.style.left= '50%';
btnChange.style.fontSize = '20px';
btnChange.style.fontWeight = '600';


btnChange.addEventListener('click', function(){

    function randColor() {
        var r = Math.floor(Math.random() * (256)),
            g = Math.floor(Math.random() * (256)),
            b = Math.floor(Math.random() * (256));
        let newColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return newColor;

    }
    color.innerHTML = randColor();
    document.body.style.backgroundColor = color.innerHTML;
    btnChange.style.color = color.innerHTML;
   
});


