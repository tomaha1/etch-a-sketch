let container = document.querySelector('.container');

for (let i=1; i<=4; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div);
};