let elements = document.querySelectorAll('.element');
let output = document.querySelector('.output');
let del = document.getElementById('delete');
let enter = document.getElementById('enter');
container = document.querySelector('.container');




elements.forEach((element) =>{
    element.addEventListener('click', () => {
        let el = document.createElement('span');
        el.classList.add('circle');
        element.appendChild(el);
    });
});

elements.forEach((element) =>{
    element.addEventListener('click', () => {
        output.innerHTML += element.firstChild.innerHTML;
    });
});

del.addEventListener('click', () => {
    let x = output.innerHTML;
    output.innerHTML = x.slice(0, x.length-1);
    console.log(output.innerHTML);
});

enter.addEventListener('click', () => {
    if(output.innerHTML === '0000'){
        output.innerHTML = 'Screen Unlocked';
        container.style.display = 'none';
    }
    else{
        output.innerHTML = 'PIN gresit';
        setTimeout(()=>{output.innerHTML = ''}, 3000);
    }
});
