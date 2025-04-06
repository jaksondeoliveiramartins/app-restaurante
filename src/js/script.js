/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele .

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
*/
//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const btn = document.querySelectorAll(".botao");
const produtos = document.querySelectorAll(".produto");

//passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou.
btn.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele .
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");
        
        //OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do produto.

        //passo 1 - pegar os produtos no JS pra poder mostrar ou esconder ele
        const produtoSelecionado = document.querySelector(".produto.selecionado");
        produtoSelecionado.classList.remove("selecionado");
        
        //passo 2 - adicionar a classe "selecionado" no produto que o usuário selecionou.
       
        
        produtos[indice].classList.add("selecionado");

    });
});