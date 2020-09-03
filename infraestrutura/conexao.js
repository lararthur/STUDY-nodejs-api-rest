const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'MuretaAd@66',
    database: 'agenda-petshop',
});

module.exports = conexao;