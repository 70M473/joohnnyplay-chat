const express = require('express');
const path = require('path');
const app = express();

// 1. Libera a pasta de imagens para o navegador acessar
app.use('/img', express.static(path.join(__dirname, 'img')));

// 2. Se você tiver um arquivo index.html na raiz, essa linha faz ele abrir na página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// =======================================================
// 3. COLE AQUI AS ROTAS DO SEU CÓDIGO ORIGINAL
// (Aquelas com app.get('/youtube', ...), app.get('/twitch', ...) ou app.use(...))
// =======================================================
// Exemplo: 
// app.get('/youtube', (req, res) => { res.send('Aqui vai a imagem do youtube'); });



// =======================================================
// 4. NÃO MEXA NESSA PARTE DAQUI PARA BAIXO (É o que faz funcionar no Render)
// =======================================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor do JoohnnyPlay rodando na porta ${PORT}`);
});
