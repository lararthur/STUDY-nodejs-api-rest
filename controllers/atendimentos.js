module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de antedimentos e está realizando um GET'));
}