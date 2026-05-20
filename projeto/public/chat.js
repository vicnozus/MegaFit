async function sendMessage(){

    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    const text = input.value;

    if(text === "") return;

    // mensagem usuário
    messages.innerHTML += `
        <div class="message user">
            ${text}
        </div>
    `;

    input.value = "";

    // enviando pro backend
    const response = await fetch("/chat", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            message:text
        })

    });

    const data = await response.json();

    // resposta IA
    messages.innerHTML += `
        <div class="message bot">
            ${data.reply}
        </div>
    `;

    messages.scrollTop = messages.scrollHeight;
}