//dependencias para funcionar

const express = require('express')
const router = express.Router();

const clientes = require('./controllers/clientes')

// rota (endpoint) de teste 

const teste = (req, res)=>{
    res.json("API Loja TI respondendo com sucesso!");
}

router.get('/',teste);
router.get('/clientes', clientes.read);

module.exports = router; 