const loginBtn = document.getElementById("loginBtn");
const cadastroBtn = document.getElementById("cadastroBtn");
const primarybtn = document.getElementById("btn-primary")

loginBtn.addEventListener("click", () => {

    window.location.href = "/login";

});

cadastroBtn.addEventListener("click", () => {

    window.location.href = "/cadastro";

});

primarybtn.addEventListener("click", () => {

    window.location.href = "/cadastro"

})