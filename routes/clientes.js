const express = require('express');
const router = express.Router();
const mysql = require('../configs/databases').pool


const AnaliseClientes = require('../action/analiseclientes');
router.get('/', AnaliseClientes.getClientes);


module.exports = router;

































// // retorna os dados de um cliente
// router.get('/:nome', (req, res, next) => {
//     mysql.getConnection((error, conn) => {
//         if (error) { return res.status(500).send({ error: error }) }
//         conn.query(
//             `SELECT * FROM vendas_sucos.clientes WHERE nome LIKE '${req.params.nome}%';`,
//             [req.params.nome],
//             (error, resultado, fields) => {
//    conn.release();
//                 if (error) { return res.status(500).send({ error: error }) }
//                 return res.status(200).send({ response: resultado })
//             }
//         )
//     })
// });
// // retorna os dados de um cliente
// router.get('/:cpf', (req, res, next) => {
//     mysql.getConnection((error, conn) => {
//         if (error) { return res.status(500).send({ error: error }) }
//         conn.query(
//             `SELECT * FROM vendas_sucos.clientes WHERE cpf = ?;`,
//             [req.params.cpf],
//             (error, resultado, fields) => {
//                 conn.release();
//                 if (error) { return res.status(500).send({ error: error }) }
//                 return res.status(200).send({ response: resultado })
//             }
//         )
//     })
// });

// //Retorna todos os clientes.....
// router.get('/', (req, res, next) => {
//     res.status(200).send({
//         mensagem: 'Retorna todos os clientes'
//     })
// });
// // Insere um cliente
// router.post('/', (req, res, next) => {
//     res.status(201).send({
//         mensagem: 'Cliente Inserido'
//     })
// });
// // retorna os dados de um cliente
// router.get('/:id_cliente', (req, res, next) => {
//     const id = req.params.id_cliente
//     if (id === 'especial') {
//         res.status(200).send({
//             mensagem: 'Detalhes do Cliente',
//             id_cliente: id
//         })
//     } else {
//         res.status(200).send({
//             mensagem: 'Você passou um ID'
//         })
//     }
// });
// //Altera um cleinte
// router.patch('/', (req, res, next) => {
//     res.status(201).send({
//         mensagem: 'Usando o PATCH dentro da rota de clientes'
//     })
// });
// // Deleta um cliente
// router.delete('/', (req, res, next) => {
//     res.status(201).send({
//         mensagem: 'Usando o DELETE dentro da rota de clientes'
//     })
// });
