import { getLista, limpaLista, removeDaLista, adicionaNaLista} from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener("click",limpaItensDeLista);

btnAdicionar.addEventListener("click",() =>{
    adicionaNaLista(pEntrada);
    atualizarLista();
});

function limpaItensDeLista(){
    limpaLista();
    atualizarLista();
}

function atualizarLista(){
    olItens.innerHTML = "";
    let lista = getLista();
    for(let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}