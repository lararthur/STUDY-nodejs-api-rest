const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('servidor rodando e girando na porta 3000');
});

app.get('/atendimentos', (req, res) => res.send('Você está na rota de antedimentos e está realizando um GET'));