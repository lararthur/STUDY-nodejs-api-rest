const Atendimento = require('../models/atendimentos');

module.exports = app => {
    // listar todos os atendimentos
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });

    // buscar atendimento
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Atendimento.buscaPorId(id, res);
    });

    // cadastrar atendimentos
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento, res);
    });

    // aterar dados do atendimento
    // utiliza-se o verbo PATCH para alterar os dados.
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Atendimento.altera(id, valores, res);
    });
}