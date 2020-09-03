module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de antedimentos e está realizando um GET'));

    app.post('/atendimentos', (req, res) => {
        console.log('---réqui bári', req.body);

        res.send('Este carro está sendo roubado, e é monitorado pela car system');
    });
}