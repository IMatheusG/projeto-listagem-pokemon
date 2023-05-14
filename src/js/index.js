// objetivo 1 - Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

// passo 1 - pegar no JS o elemento HTML corresponde ao botão de troca de tema

const botaoAlterarTema = document.getElementById ("botao-alterar-tema"); // acessando o console do navegador, abrindo document e obtendo o Id do elemento // const indica q o valor da variável não muda

// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body"); // seletor está buscando o body

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {    
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro"); // verificando existência

    body.classList.toggle("modo-escuro") // alterna entre dois estados, true ou false, on ou off, tira ou coloca, etc

    if (modoEscuroEstaAtivo) {
        // body.classList.remove("modo-escuro"); // removendo a classe     
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/imagens/sun.png"); // mudando a imagem
    }
    else
    {
        // body.classList.add("modo-escuro"); // adicionando a classe
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/imagens/moon.png"); // mudando a imagem
    } 
});// função vazia no (), função 'seta', entre {} é oq a função executa

// passo 4 -  adicionar a classe modo-escuro no body

// passo 5 - trocar a imagem do botão de alterar tema pra lua

// objetivo 2 - quando clicar no botão de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol

// passo 6 - verificar se o body já tem a classe modo escuro

// passo 7 - remover a classe do modo-escuro do body

// passo 8 - trocar a imagem do botão para o sol