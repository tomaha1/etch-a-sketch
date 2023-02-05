let container = document.querySelector('.container');
let button = document.querySelector('button');
let div1 = document.querySelectorAll('.box1');
let div2 = document.querySelectorAll('.box2');

button.addEventListener('click', sketchSize);

function sketchSize() {
let size;
while (size > 100 || size <= 0 || !Number.isInteger(size)) {
size = +prompt('How many squares per side would you like to have? Maximum is 100.');
}
eraseField();
drawField(size);
};

function drawField(size) {
for (let i=1; i<=size; i++) {
    let div1 = document.createElement('div');
    div1.classList.add('box1');
    container.appendChild(div1);
        for (let i=1; i<=size; i++) {
            let div2 = document.createElement('div');
            div2.classList.add('box2');
            div1.appendChild(div2);
        }
    }
    let divList = document.querySelectorAll('.box2');
    divList.forEach(item => {
        item.lightness = 100;
        let hue = 0;
        item.addEventListener('mouseover', () => {
            hue = Math.floor(Math.random() * (360 - 0 + 1) + 0);
            item.style.backgroundColor = `hsl(${hue},100%,${item.lightness}%)`;
            if (item.lightness > 0) {
            item.lightness -=10;
            }
        }
    )}); 
};

// 1st solution for removing last  - forEach
/* function eraseField() {
    let div1List = document.querySelectorAll('.box1');
    div1List.forEach(item => {
        container.removeChild(item);
    });
}; */

// 2nd solution - for loop
function eraseField() {
    let div1List = document.querySelectorAll('.box1');
    for (i=0; i < div1List.length; i++) {
        container.removeChild(div1List[i]);
    }
}

