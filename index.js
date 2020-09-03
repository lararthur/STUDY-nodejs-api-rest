const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(3000, () => {
    console.log('servidor rodando e girando na porta 3000');
});