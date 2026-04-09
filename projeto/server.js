const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));


// 🧠 "Banco fake" (array)
let usuarios = [];


// =========================
// 📌 ROTA DE CADASTRO
// =========================
app.post("/cadastro", (req, res) => {
  const { nome, email, senha } = req.body;

  // Verifica se já existe
  const existe = usuarios.find(user => user.email === email);

  if (existe) {
    return res.json({ mensagem: "Email já cadastrado ❌" });
  }

  // Salva usuário
  usuarios.push({ nome, email, senha });

  console.log("Usuários:", usuarios); // debug (pode ver no terminal)

  res.json({ mensagem: "Cadastro realizado com sucesso 🎉" });
});


// =========================
// 📌 ROTA DE LOGIN
// =========================
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  // Procura usuário
  const usuario = usuarios.find(
    user => user.email === email && user.senha === senha
  );

  if (usuario) {
    res.json({
      mensagem: `Bem-vindo, ${usuario.nome} 😎`
    });
  } else {
    res.json({
      mensagem: "Email ou senha incorretos ❌"
    });
  }
});


// =========================
// 🚀 INICIAR SERVIDOR
// =========================
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});