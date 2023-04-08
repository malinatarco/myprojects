const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');


textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter') { //verifica daca a fost introdus 'Enter' la tastatura
        setTimeout( () =>{
            e.target.value = '';
        },10);

        randomSelect();
    }
});


function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });

}

function randomSelect() {
    const times = 30;//de cate ori vor fi evidentiate 'alegerile' cu alta culoare

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() =>{
            unhighlightTag(randomTag);
        }, 100);
    }, 100);  //highlights and unhighlights tagurile dupa un interval de timp

    setTimeout(() => {
        clearInterval(interval); //opreste highlight/unhighlight anterior
        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
            //apoi, se alege un tag random si se evidentiaza(highlight)
        });
    }, times*100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
    //functia returneaza un tag random
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unhighlightTag(tag){
    tag.classList.remove('highlight');
}



