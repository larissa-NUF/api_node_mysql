const express = require('express');
const router = express.Router();
const connection = require('./connection');
// Rotas CRUD

// Criar usuário
router.post('/', (req, res, next) => {
    const { name, email } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO users (name, email) VALUES (?, ?)`;
    connection.query(INSERT_USER_QUERY, [name, email], (err, results) => {
        if (err) throw err;
        res.send('Usuário criado com sucesso');
    });
});

router.put('/', (req, res) => {
    const { name, email } = req.body;
    const idf = req.params.id;
    const UPDATE_USER_QUERY = `update users set name=?, email=? where id=?;`;
    connection.query(UPDATE_USER_QUERY, [name, email, id], (err, results) => {
        if (err) throw err;
        res.send('Usuário atualizado com sucesso');
    });
});

// Obter todos os usuários
router.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Obter um usuário por ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    const SELECT_USER_QUERY = `SELECT * FROM users WHERE id = ?`;
    connection.query(SELECT_USER_QUERY, [userId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;