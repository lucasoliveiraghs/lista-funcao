/*
2. Escreva uma função chamada verificarOrcamento que receba dois parâmetros:
valorProduto e saldoDisponivel. A função deve retornar true se o saldo for suficiente
para comprar o produto (saldo maior ou igual ao valor) e false caso contrário.

entrada: valor do produto e saldo disponível
processamento: verificar se há dinheiro suficiente no saldo para comprar o produto
saída: se é possível ou não comprar o produto

Questão muito fácil novamente, o pensamento é o mesmo, separar tudo em diferentes funções.
*/

function recebervalorproduto(){
    let produto = Number(prompt("Digite o valor do produto:"))
    return produto
}

function recebersaldo(){
    let saldo = Number(prompt("Digite o saldo disponível:"))
    return saldo
}

function verificar(pro, sal){
    if(pro <= sal){
        return 1
    }else{
        return 0
    }
}

function exibir(resul){
    if(resul == 1){
        alert("O saldo é suficiente para a compra do produto")
    }else{
        alert("O saldo não é suficiente para a compra do produto")
    }
}

let vp = recebervalorproduto()
let sd = recebersaldo()
let resultado = verificar(vp , sd)
exibir(resultado)