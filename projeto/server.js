const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3. Rota para a página de cadastro (se o botão de cadastro apontar para /cadastro)
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

// Rota para a página de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});