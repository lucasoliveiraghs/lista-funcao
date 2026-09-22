/*2. Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar.

entrada: receber um número de parâmetro.
processamento: verificar se é par ou ímpar.
Saída: Se é par ou ímpar

*/

function ehpar (imparoupar){
    if(imparoupar % 2 == 0){
        return 1
    } else {
        return 0
    }
}

function recebern (){
    let n = Number(prompt("Digite um número"));
    return n
}

function exibir(tela){
    if(tela){
    alert(`O número ${valor} é Par `)
    }else{
    alert(`O número ${valor} é ímpar`)
    }
}

let valor = recebern()

let result = ehpar(valor)

exibir(result)

