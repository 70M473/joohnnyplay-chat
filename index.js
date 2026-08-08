const express = require('express');
const path = require('path');
const app = express();

// Servindo a pasta de imagens
app.use('/img', express.static(path.join(__dirname, 'img')));

// COLE AQUI TODAS AS SUAS ROTAS ANTIGAS DE IMAGEM (app.get)
// Exemplo:
app.get('/', (req, res) => {
  res.send('Servidor do JoohnnyPlay rodando no Render!');
});

// A LINHA MÁGICA QUE FAZ FUNCIONAR NO RENDER (SEM FIREBASE E SEM PAGAR):
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
