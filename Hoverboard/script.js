let container = document.querySelector('.container');
let elements = 20;
let rows = 25;
let i,j;
let colors = ['#b38b6d', '#ff4500', '#ffff00', '#800080', '#76ff7a', '#ff00ff', '#1e90ff', '#00ff00'];

for( i= 0 ; i < rows; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let j = 0; j < elements; j++){
        let el = document.createElement('div');
        el.classList.add('element');
        row.appendChild(el);
    }
}

let allEl = document.querySelectorAll('.element');

allEl.forEach((el) => {
    el.addEventListener('mouseover', () => {
        let c = getColor();
        el.style.backgroundColor = colors[c];
    });
});

allEl.forEach((el) => {
    el.addEventListener('mouseout', () => {
        setTimeout(() => {
            el.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        }, 5000);
    });
});

function getColor(){
    return Math.floor(Math.random() * colors.length);
}
