const buttons =
document.querySelectorAll(".option-btn");

let objetivos = [];

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const valor =
        button.innerText.trim();

        button.classList.toggle("selected");

        if(objetivos.includes(valor)){

            objetivos =
            objetivos.filter(
                item => item !== valor
            );

        } else {

            objetivos.push(valor);
        }

        console.log(objetivos);
    });

});

document
.getElementById("finishBtn")
.addEventListener("click", () => {

    const onboardingData = {

        objetivos,

        rotina:
        document
        .getElementById("rotina").value,

        horarios:
        document
        .getElementById("horarios").value,

        treino:
        document
        .getElementById("treino").value,

        estudos:
        document
        .getElementById("estudos").value,

        sono:
        document
        .getElementById("sono").value,

        idade:
        document
        .getElementById("idade").value,

        peso:
        document
        .getElementById("peso").value,

        altura:
        document
        .getElementById("altura").value
    };

    console.log(onboardingData);

    localStorage.setItem(
        "onboarding",
        JSON.stringify(onboardingData)
    );

    alert("Plano salvo com sucesso 💪");

    window.location.href =
    "/dashboard";
});