const lista =["Um","Dois","Três"];
export function getLista(){
    return  structuredClone(lista);;
}
export function limpaLista(){
    lista.splice(0);
}
export function removeDaLista(posicao){
    lista.splice(posicao,1);
}
export function adicionaNaLista(pEntrada) {
    let texto;

    if (typeof pEntrada === "string") {
        texto = pEntrada.trim(); 
        
    } else if (pEntrada && typeof pEntrada.textContent === "string") {
        texto = pEntrada.textContent.trim(); 
        pEntrada.textContent = ""; 
    }

    if (texto !== "") {
        lista.push(texto);
    }
}