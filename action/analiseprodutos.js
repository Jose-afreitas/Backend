const mysql = require('../configs/databases').pool


exports.getProdutos = (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM vendas_sucos.produtos;',
            (error, resultado, fields) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({ response: resultado })
            }
        )
    })
}


//=====
//______________git remote add origin https://github.com/Jose-afreitas/Backend.git
