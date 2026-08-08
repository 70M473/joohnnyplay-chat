/* functions/index.js */
const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();

// ============================================
// 1. SERVIDOR DE IMAGENS E ARQUIVOS ESTÁTICOS
// ============================================
// Nota: Certifique-se de que a pasta 'img' esteja dentro da pasta 'public'
// que fica na raiz do seu projeto (fora da pasta 'functions').
app.use('/img', express.static(path.join(__dirname, '../public/img')));

// ============================================
// 2. AS ROTAS DO SEU SITE (COLE O SEU CÓDIGO AQUI!)
// ============================================
// Abaixo, cole todas as suas rotas antigas, exemplo:
// app.get('/', (req, res) => { ... });
// app.get('/youtube', (req, res) => { ... });
// ou app.use('...')
// ----------------------------------------------------

// 💡 EXEMPLO DE ROTA BÁSICA (Você pode apagar isso se já tiver as suas):
app.get('/', (req, res) => {
  res.send('Servidor do JoohnnyPlay Chat rodando no Firebase!');
});

// ============================================
// 3. EXPORTAÇÃO PARA O FIREBASE (NÃO MEXA AQUI!)
// ============================================
// Isso substitui o seu antigo app.listen(5000)!!!
exports.api = functions.https.onRequest(app);