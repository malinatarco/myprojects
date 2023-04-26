let sp = document.querySelector('span');
let text = 'hello world';
let idx = 1;
writeText();

function writeText(){
    sp.innerHTML = text.slice(0, idx);
    idx = idx+1;
    if( idx > text.length ){
        idx = 1;
    }

}

setInterval(writeText, 800);
