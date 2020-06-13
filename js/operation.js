function checkWords(){

    let pool = document.getElementById('pool2');
    if(pool.childElementCount!=2){
        alert('Introduce 2 palabras, de cada idioma');
        return;
    }
    checkCorrect(pool.firstChild,pool.lastChild);
}

//pasar a back
function checkCorrect(word1, word2){
    let id1= word1.id.replace(LANGUAGE1,'');
    id1= id1.replace(LANGUAGE2,'');

    let id2= word2.id.replace(LANGUAGE1,'');
    id2= id2.replace(LANGUAGE2,'');

    if(id1.includes(id2)){
        alert('correct!');
        return;
    }
    alert('not correct');
}