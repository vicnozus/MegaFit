## Pré-requisitos (O que instalar)
        Antes de qualquer coisa, você precisa do Node.js na sua máquina:

        Acesse: nodejs.org

        Baixe a versão LTS (é a mais estável).

        Instale seguindo o "next, next, finish".

        Para conferir se deu certo, abra o terminal e digite: node -v

## 2. Rodando o Projeto
        Siga estes passos sempre que baixar uma atualização do código:

        Passo A: Entrar na pasta
        No terminal (ou no terminal do VS Code), entre na pasta do projeto:

        # Bash
            cd MegaFit
        Passo B: Instalar as bibliotecas
            Se for a primeira vez, ou se alguém da equipe adicionou uma função nova, você precisa baixar as dependências:

        # Bash
            npm install
        Passo C: Escolher o modo de execução
            "Vou programar agora": Use o comando abaixo. Ele fica vigiando suas alterações e atualiza o site sozinho:

        # Bash
            npm run dev
        "Só quero ver como ficou / Apresentar":

        # Bash
            npm start
## Endereço Local
        Após rodar um dos comandos acima, abra o navegador e acesse:
        http://localhost:3000

## ⚠️ Avisos do Backend
Mudanças no Banco: Se eu alterar algo no login ou no banco de dados, avisarei aqui ou no grupo.

Erros de Dependência: Se o projeto não subir, tente deletar a pasta node_modules e rodar npm install de novo.