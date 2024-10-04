const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");
const tituloListaComprados = document.getElementById("titulo-lista-comprado");

export function verificarListaVazia() {
    if (listaDeCompras.querySelectorAll("li").length === 0){
        mensagemListaVazia.style.display = "block";
    }
    else{
        mensagemListaVazia.style.display = "none";
    }

    if (listaComprados.querySelectorAll("li").length != 0){
        tituloListaComprados.style.display = "block";
    }
    else{
        tituloListaComprados.style.display = "none";
    }
}