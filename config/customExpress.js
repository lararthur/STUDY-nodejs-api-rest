const express = require('express');
// o consign vai agrupar as rotas criadas fora do entry point (no caso, este arquivo aqui, o index.js)
// depois, ele coloca todas as rotas detro do app
const consign = require('consign');

module.exports = () => {
    const app = express();
    
    // primeiro, executamos o consign, depois chamamos a pasta controllers, onde estarão as rotas
    // e depois, jogá-las no app.
    consign()
        .include('controllers')
        .into(app);

    return app;
}

