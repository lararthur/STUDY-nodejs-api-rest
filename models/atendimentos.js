const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {
    adiciona(atendimento) {
        // data do atendimento com o moment
        // o moment subtitui o new date() padrão do JavaScript
        const dataCriacao = moment()
        .format('YYYY-MM-DD HH:MM:SS'); // no .format(), estamos dizendo em que formato o moment vai nos devolver a data.

        // manipulando a data agendada com o moment :)
        const data = moment(
            // aqui no primeiro parametro, passamos a data vinda da requisição
            atendimento.data,
            // como o moment trabalha com o padrão americano (ao invés de DD/MM/YYYY, ele é MM/DD/YYYY)
            // então, no segundo parâmetro, especificamos como queremos que o moment leia nossa data
            'DD/MM/YYYY'
        ).format('YYYY-MM-DD HH:MM:SS');

        const atendimentoDatado = {...atendimento, dataCriacao, data};
        const sql = `INSERT INTO Atendimentos SET ?`;

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            }
        });
    }
}

module.exports = new Atendimento;