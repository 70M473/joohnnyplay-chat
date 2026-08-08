const express = require('express');
const path = require('path');
const app = express();

// Servindo a pasta de imagens que está na raiz
app.use('/img', express.static(path.join(__dirname, 'img')));

// =======================================================
// COLE AQUI AS ROTAS DO SEU CÓDIGO ORIGINAL
// (Aquelas com app.get('/youtube', ...), app.get('/twitch', ...))
// =======================================================
// NÃO ESQUEÇA DE APAGAR O app.get('/') que está logo abaixo!
// =======================================================

// A LINHA MÁGICA QUE FAZ O RENDER FUNCIONAR (SEM FIREBASE, SEM PAGAR)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
