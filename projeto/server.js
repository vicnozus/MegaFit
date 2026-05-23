const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));


// =========================
// PÁGINA INICIAL
// =========================
app.get('/', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'public', 'login.html')
    );
});


// =========================
// LOGIN
// =========================
app.get('/login', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'public', 'login.html')
    );
});


// =========================
// CADASTRO
// =========================
app.get('/cadastro', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'public', 'cadastro.html')
    );
});


// =========================
// ONBOARDING (NOVA PÁGINA)
// =========================
app.get('/onboarding', (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            'public',
            'onboarding.html'
        )
    );
});


// =========================
// SERVIDOR
// =========================
app.listen(PORT, () => {
    console.log(
        `Servidor rodando em http://localhost:${PORT}`
    );
});