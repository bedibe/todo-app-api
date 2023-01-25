const express = require('express');
const app = express();


app.get('/entidade1', (req, res) => {
    res.send('Rota ativada com GET e recurso entidade1: valores de entidade1 devem ser retornados');
  });
  
  app.get('/entidade2', (req, res) => {
    res.send('Rota ativada com GET e recurso entidade2: valores de entidade2 devem ser retornados');
  });
  app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
  });