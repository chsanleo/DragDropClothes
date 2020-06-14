const LANGUAGE1 = 'ESP'; //recuperar de back
const LANGUAGE2 = 'CN'; //recuperar de back

let words1 = ['hola','hastalavista','gracias'];//sustituir por llamada a back
let words2 = ['nihao','zaijian','xiexie'];//sustituir por llamada a back


load.generateWords(words1,words2);
load.generateDropable();
load.languages();