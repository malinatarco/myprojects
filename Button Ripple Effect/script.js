const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) =>{
    button.addEventListener('click', (e) => {
        const x= e.pageX;
        const y = e.pageY;
        console.log(x);
        console.log(y);

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        console.log(buttonTop);
        console.log(buttonLeft);

        const xInside = x-buttonLeft;
        const yInside = y- buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        button.appendChild(circle);

        setTimeout(() => circle.remove(), 500);

    });
});
