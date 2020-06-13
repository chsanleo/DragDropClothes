const PORT = 3000;

const express = require('express');
const app = express();

const mainRouter = require('./routes/main');

app.use(express.json());

app.use((req, res, next) => {
    //el * todos los dominios son aceptados
    res.header('Access-Control-Allow-Origin', '*');
    next();//imprescindible next para que se ejecute la siguiente 
});

app.use('/main', mainRouter);

app.listen(PORT, () => console.log('Server online'));