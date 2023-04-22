let button = document.querySelector('.myBtn');
const text = ['Notification one', 'Notificatio two', 'Notification three', 'Notification four'];
const colors = ['#ff0000', '#00ff00', '#ff4500', '#00ced1', '#c71585'];
let container = document.getElementById('showNotifications');

button.addEventListener('click', () => {
    let nBtn = document.createElement('button');
    nBtn.classList.add('notifications');
    nBtn.innerHTML = text[pickText()];
    nBtn.style.color = colors[pickColor()];
    container.appendChild(nBtn);
    setTimeout(() => {
        nBtn.style.opacity = '0';
    }, 5000);
});

function pickColor(){
    let x = Math.floor(Math.random()* (colors.length));
    return x;
}

function pickText(){
    let x = Math.floor(Math.random()* (text.length));
    return x;
}
