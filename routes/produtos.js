const express = require('express');
const router = express.Router();
const mysql = require('../configs/databases').pool


const AnaliseProdutos = require('../action/analiseprodutos');
router.get('/', AnaliseProdutos.getProdutos);


module.exports = router;
































// router.get('/', (req, res, next) => {

//     mysql.getConnection((error, conn) => {
//         if (error) { return res.status(500).send({ error: error }) }
//         conn.query(
//             'SELECT * FROM vendas_sucos.produtos;',
//             (error, resultado, fields) => {
//                 if (error) { return res.status(500).send({ error: error }) }
//                 return res.status(200).send({ response: resultado })
//             }
//         )
//     })

// })
// //Retorna todos os produtos.....
// router.get('/', (req, res, next) => {
//     res.status(200).send({
//         mensagem: 'retorna os produtos'
//     })
// });
// // Insere um produto
// router.post('/', (req, res, next) => {
//     res.status(201).send({
//         mensagem: ' produto inserido '
//     })
// });
// // retorna os dados de um produto
// router.get('/:id_produto', (req, res, next) => {
//     const id = req.params.id_produto
//     if (id === 'especial') {
//         res.status(200).send({
//             mensagem: 'Detalhes do Produto',
//             id_produto: id
//         })
//     } else {
//         res.status(200).send({
//             mensagem: 'Você passou um ID'
//         })
//     }
// });
// //Altera um produto
// router.patch('/', (req, res, next) => {
//     res.status(201).send({
//         mensagem: 'Produto Alterado'
//     })
// });

// //Deleta um produto 
// router.delete('/', (req, res, next) => {
//     res.status(201).send({
//         mensagem: 'Produto Deletado'
//     })
// });




