const express = require('express');
const app = express();

const rotaClientes = require('./routes/clientes');
const rotaProdutos = require('./routes/produtos');

app.use('/clientes', rotaClientes);
app.use('/produtos', rotaProdutos);



// //Quando não encontra rota
// app.use((req, res, next) => {
//     const erro = new Error('Não encontrado');
//     erro.statu = 404;
//     next(erro);
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500)
//     return send.send({
//         erro: {
//             mensagem: error.mensagem
//         }
//     });
// });


module.exports = app;
