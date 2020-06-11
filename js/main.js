const LANGUAGE1 = 'ESP';
const LANGUAGE2 = 'CN';

let words1 = ['hola'];//sustituir por llamada a back
let words2 = ['nihao'];//sustituir por llamada a back



load.generateWords(words1,words2);






const containers = document.getElementsByClassName('container');
const options = document.getElementsByClassName('option');

for (const container of containers) {
    container.setAttribute("ondragover", "allowDrop(event)");
    container.setAttribute("ondrop", "drop(event)");
}

for (const option of options) {
    option.setAttribute("draggable", true);
    option.setAttribute("ondragstart", "drag(event)");
    option.setAttribute("ondrop", "drop(event)");
}

//Drag and Drop methods
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}