
// ===========================
// OBJETIVOS
// ===========================

const objetivosBtns =
document.querySelectorAll(
    ".option-btn:not(.rotina-btn):not(.horario-btn):not(.treino-btn):not(.estudos-btn):not(.sono-btn)"
);

let objetivos = [];

objetivosBtns.forEach(button => {

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

        console.log("Objetivos:", objetivos);
    });

});


// ===========================
// ROTINA
// ===========================

const rotinaUsuario = {
    rotina: "",
    horarios: "",
    treino: "",
    estudos: "",
    sono: ""
};


// função reutilizável
function selecionarOpcao(
    classe,
    chave
){

    const botoes =
    document.querySelectorAll(
        `.${classe}`
    );

    botoes.forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                // remove seleção anterior
                botoes.forEach(btn => {
                    btn.classList.remove(
                        "selected"
                    );
                });

                // adiciona seleção
                botao.classList.add(
                    "selected"
                );

                // salva valor
                rotinaUsuario[chave] =
                botao.getAttribute(
                    "data-value"
                );

                console.log(
                    rotinaUsuario
                );
            }
        );
    });
}


// aplicar função
selecionarOpcao(
    "rotina-btn",
    "rotina"
);

selecionarOpcao(
    "horario-btn",
    "horarios"
);

selecionarOpcao(
    "treino-btn",
    "treino"
);

selecionarOpcao(
    "estudos-btn",
    "estudos"
);

selecionarOpcao(
    "sono-btn",
    "sono"
);


// ===========================
// FINALIZAR
// ===========================

document
.getElementById(
    "finishBtn"
)
.addEventListener(
    "click",
    () => {

        const onboardingData = {

            objetivos,

            rotina:
            rotinaUsuario.rotina,

            horarios:
            rotinaUsuario.horarios,

            treino:
            rotinaUsuario.treino,

            estudos:
            rotinaUsuario.estudos,

            sono:
            rotinaUsuario.sono,

            idade:
            document
            .getElementById(
                "idade"
            ).value,

            peso:
            document
            .getElementById(
                "peso"
            ).value,

            altura:
            document
            .getElementById(
                "altura"
            ).value
        };

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
    }
);

