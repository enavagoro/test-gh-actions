const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('server working');
})

app.get('/hola', (req, res) =>{
    res.send('hola compa');
})

app.get('/chao', (req, res) =>{
    res.send('chao pescao');
})

app.listen(port, ()=>{
    console.log(`servidor corriendo en el puerto: ${port}`);
})