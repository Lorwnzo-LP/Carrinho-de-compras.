import { adicionarData } from "./adicionarData.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";


const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

export function criarItemDaLista(item){
       
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-item");
    
    const containerCheckBox = document.createElement("div");
    containerCheckBox.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input")
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for",checkboxInput.id);

    checkboxLabel.addEventListener("click",function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado")
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
            verificarListaVazia()
        }
        else{
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
            verificarListaVazia()
        }
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckBox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckBox);


    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item;
    nomeDoItem.id = "item-titulo";
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button")
    botaoRemover.classList.add("botao-acao")
    
    const imagemremover = document.createElement("img");
    imagemremover.src = "img/Excluir.svg";
    imagemremover.alt = "Remover";

    botaoRemover.addEventListener("click", function (){
        excluirItem(itemDaLista);
    })


    botaoRemover.appendChild(imagemremover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEdicao = document.createElement("button");
    botaoEdicao.classList.add("botao-acao")
    
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/Edição.svg";
    imagemEditar.alt = "Editar";

    botaoEdicao.addEventListener("click", function() {
        editarItem(itemDaLista);
    })

    botaoEdicao.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEdicao);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    itemDaLista.appendChild(containerItemLista);
    adicionarData(itemDaLista);

    return itemDaLista;
}