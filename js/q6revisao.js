/*
6. Crie duas funções para gerenciar a fila de reprodução de um usuário: 
• a) converterParaSegundos(minutos, segundos): Recebe os minutos e 
segundos de uma faixa e retorna a duração total convertida apenas para 
segundos (totalSegundos = (minutos × 60) + segundos). 
• b) calcularTempoPlaylist(playlist): Recebe um array de objetos (onde cada 
objeto é uma música com as propriedades {titulo, minutos, segundos}). A 
função deve percorrer a lista de músicas, chamar internamente a função 
converterParaSegundos para cada faixa e retornar a duração total de toda a 
playlist em segundos. 

entrada: array de objetos com nome, minutos e segundos de várias músicas
processamento: calcular o tempo de cada música em segundos, e depois, o tempo total da plylist em segundos
saída:O tempo total da playlist em segundos


*/

function receberarray(){
    const array = []
    let qt = Number(prompt("Digite a quantidade de músicas na playlist:"))

    for(let i = 0; i < qt; i++){
    const objeto = {
        titulo: prompt(`Digite o titulo da ${i + 1}ª música:`),
        minutos: Number(prompt(`Digite a quantidade de minutos que tem a ${i + 1}ª música: (apenas os minutos inteiros)`)),
        segundos: Number(prompt(`Digite a quantidade de segundos restantes da ${i + 1}ª música:`)),
    }
    array.push(converterParaSegundos(objeto))
    }
    return array
}

function converterParaSegundos(play){
    let totalSegundos = (play.minutos * 60) + play.segundos
    return totalSegundos
}

function calcularTempoPlaylist(pl){
    let totalpl = 0
    for(let i = 0; i < pl.length; i ++){
        totalpl += pl[i]
    }
    return totalpl
}

function exibir(resul){
    alert(`O tempo total da playlist em segundos é de ${resul} segundos!`)
}

let playlist = receberarray()
let list = calcularTempoPlaylist(playlist)
exibir(list)
