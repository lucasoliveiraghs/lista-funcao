/* 7. Crie duas funções para processar o valor de uma venda:
a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de
desconto, retornando o valor com o desconto aplicado.
b) processarVenda(valorBruto): recebe o valor bruto. Se for maior que 100,
chama internamente a função aplicarDesconto (com 10% de desconto) e
retorna o valor ajustado. Caso contrário, retorna o valor bruto sem
alterações. 

entrada: o valor e a porcentagem de desconto aplicado
processamento: verificar se o valor do produto é aoplicável desconto e ajustar o valor
saída: O valor bruto ou com desconto

A questão foi relativamente fácil, principalente por ter sido possível reutilizar 80% do raciocínio da letra A na B.

A lógica foi criar uma função para receber valor e desco0nto (ou não) e aplicar o desconto (ou não), e no fim, exibir.
*/

/*

A)

function recebervalor(){
    let valor = Number(prompt("DIgite o valor do produto"));
    return valor
}

function receberdesconto(){
    let desconto = Number(prompt("Digite a quantidade de desconto a ser aplicada"))
    return desconto
}

function aplicarDesconto(val,des){
    let descontoaplicado = val - [val*(des/100)]
    return descontoaplicado
}

function exibir(total){
    alert(`O valor final do produto é ${total}`)
}


let v = recebervalor()
let d = receberdesconto()
let result = aplicarDesconto(v,d)
exibir(result)

*/

function recebervalor(){
    let valor = Number(prompt("DIgite o valor do produto"));
    return valor
}

function processarVenda(bruto){
    if(bruto > 100){
    let aplicado = aplicarDesconto(bruto)
    return aplicado
    }else{
        return bruto
    }
}

function aplicarDesconto(val){
    let descontoaplicado = val - [val*10/100]
    return descontoaplicado
}

function exibir(total){
    alert(`O valor final do produto é ${total}`)
}


let v = recebervalor()
let result = processarVenda(v)
exibir(result)

