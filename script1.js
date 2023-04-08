const elem = document.querySelectorAll('container');
const texts = document.querySelectorAll('text');

elem.forEach((item,idx) =>{
    item.addEventListener('click', () => {
        remove();
        item.classList.add('active');
        texts[idx].classList.add('active');
    });
});


function remove(){
    elem.forEach((item,idx) =>{
        item.classList.remove('active');
        texts[idx].classList.remove('active');
    });
}