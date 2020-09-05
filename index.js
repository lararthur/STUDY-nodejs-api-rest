const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

// aqui, conectamos com o bd indicado no arquivo de conexão em infraestrutura
// e só iremos rodar o servidor de fato após a conexão estar funcionando
conexao.connect((erro) => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('conectado com o bd');

        Tabelas.init(conexao);
        const app = customExpress();

        app.listen(3000, () => console.log('servidor rodando e girando na porta 3000'));
    }
});