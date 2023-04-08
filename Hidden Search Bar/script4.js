

const button = document.getElementById('search-bar');
const input = document.getElementById('input');
const container = document.querySelector('.container');


button.addEventListener('click', () =>{
    container.classList.toggle('active');
    input.focus();
})