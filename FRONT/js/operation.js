function chekResults() {

    let pool = document.getElementById('pool2');

    if (pool.childElementCount != 2) {
        resultMssg('Choose two words, one of each language');
        return;
    }
    checkCorrect(pool.firstChild, pool.lastChild);
}

function resultMssg(mssg) {
    let message = document.getElementById('resultMssg');
    message.innerHTML = mssg;

    let clase = message.getAttribute("class");

    if (mssg.includes('Correct')) { clase = clase.replace('incorrect', 'ok'); }
    else { clase = clase.replace('ok', 'incorrect'); }

    message.setAttribute("class", clase);
}


//pasar a back
function checkCorrect(word1, word2) {
    let id1 = word1.id.replace(LANGUAGE1, '').replace(LANGUAGE2, '');
    let id2 = word2.id.replace(LANGUAGE1, '').replace(LANGUAGE2, '');

    if (id1.includes(id2)) {
        resultMssg('Correct!');
        return;
    }
    resultMssg('Try Again!');
}