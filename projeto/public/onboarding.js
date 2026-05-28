// =========================
// ELEMENTOS
// =========================

const steps =
document.querySelectorAll(".step");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

const progressBar =
document.getElementById("progressBar");

let currentStep = 0;


// =========================
// DADOS DO ONBOARDING
// =========================

const onboardingData = {
    objetivo: "",
    rotina: "",
    horario: "",
    treino: "",
    estudos: "",
    tempoLivre: "",
    sono: "",
    idade: "",
    peso: "",
    altura: ""
};


// =========================
// MOSTRAR TELA
// =========================

function showStep(index){

    steps.forEach(step => {
        step.classList.remove("active");
    });

    steps[index].classList.add(
        "active"
    );

    // esconder botão voltar
    prevBtn.style.display =
        index === 0
        ? "none"
        : "block";

    // mudar texto do botão
    nextBtn.innerText =
        index === steps.length - 1
        ? "Finalizar"
        : "Próximo";

    // barra progresso
    const progress =
    ((index + 1)
    / steps.length) * 100;

    progressBar.style.width =
        `${progress}%`;
}


// =========================
// PEGAR OPÇÕES
// =========================

const perguntas = [
    "objetivo",
    "rotina",
    "horario",
    "treino",
    "estudos",
    "tempoLivre",
    "sono"
];

steps.forEach((step, index) => {

    const buttons =
    step.querySelectorAll(
        ".option-btn"
    );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                // remove seleção anterior
                buttons.forEach(btn => {
                    btn.classList.remove(
                        "selected"
                    );
                });

                button.classList.add(
                    "selected"
                );

                if(index < perguntas.length){

                    onboardingData[
                        perguntas[index]
                    ] =
                    button.innerText.trim();
                }

                console.log(
                    onboardingData
                );
            }
        );
    });
});


// =========================
// PRÓXIMO
// =========================

nextBtn.addEventListener(
    "click",
    () => {

        // última tela = finalizar
        if(
            currentStep ===
            steps.length - 1
        ){

            onboardingData.idade =
            document.getElementById(
                "idade"
            ).value;

            onboardingData.peso =
            document.getElementById(
                "peso"
            ).value;

            onboardingData.altura =
            document.getElementById(
                "altura"
            ).value;

            console.log(
                onboardingData
            );

            localStorage.setItem(
                "onboarding",
                JSON.stringify(
                    onboardingData
                )
            );

            alert(
                "Plano salvo com sucesso 💪"
            );

            window.location.href =
                "/dashboard";

            return;
        }

        currentStep++;

        showStep(currentStep);
    }
);


// =========================
// VOLTAR
// =========================

prevBtn.addEventListener(
    "click",
    () => {

        if(currentStep > 0){

            currentStep--;

            showStep(
                currentStep
            );
        }
    }
);


// =========================
// INICIAR
// =========================

showStep(currentStep);