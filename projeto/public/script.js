const loginBtn = document.getElementById("loginBtn");
const cadastroBtn = document.getElementById("cadastroBtn");

loginBtn.addEventListener("click", () => {

    window.location.href = "/login";

});

cadastroBtn.addEventListener("click", () => {

    window.location.href = "/cadastro";

});