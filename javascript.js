let container = document.querySelector('.container');
let max = 10;

for (let i=1; i<=max; i++) {
    let div1 = document.createElement('div');
    div1.classList.add('box1');
    container.appendChild(div1);
        for (let i=1; i<=max; i++) {
            let div2 = document.createElement('div');
            div2.classList.add('box2');
            div1.appendChild(div2);
        }
};

