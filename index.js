const express = require('express');
const path = require('path');
const app = express();

// 1. Libera o acesso à pasta 'img' (as imagens do seu chat)
app.use('/img', express.static(path.join(__dirname, 'img')));

// 2. Quando alguém abrir o site, ele vai abrir o seu 'index.html' que está na raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. A linha que liga o servidor no Render (não mexa nisso!)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
