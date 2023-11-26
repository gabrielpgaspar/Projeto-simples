function adicionarItemAoCarrinho(identificador) {
   const item = document.getElementById(identificador);
   const carrinho = document.getElementById('carrinho');

   
   carrinho.innerHTML = item;
   alert("oiii");
}

const botoes = document.querySelectorAll("button");
const itens = document.querySelectorAll("h2");

itens.forEach(item => () => {
    botoes.forEach(botao => botao.addEventListener("click", adicionarItemAoCarrinho(item.id)))
})

