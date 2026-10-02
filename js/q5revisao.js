/* 5. Crie duas funções para cálculo total de um carrinho de compras:
• a) calcularSubtotalItem(item): Recebe um objeto item com as propriedades
preco e quantidade, e retorna o valor total do item (subtotal = preco ×
quantidade).
• b) calcularTotalCarrinho(carrinho): Recebe um array de objetos (itens do
carrinho). A função deve percorrer a lista, chamar internamente a função
calcularSubtotalItem para cada produto e retornar o valor total acumulado da
compra.

entrada: array de objetos contendo preço e quantidade
processamento: calcular o subtotal e o total da compra
saída: Valor total da compra

*/

function receberarray(){
    const array = []
    let qt = Number(prompt("Digite a quantidade de produtos do carrinho"))

    for(let i = 0; i < qt; i++){
    const objeto = {
        preco: Number(prompt(`Digite o preço do ${i + 1}º produto`)),
        quantidade: Number(prompt(`Digite a quantidade de produtos desejada do ${i + 1}º produto`)),
    }
    array.push(calcularSubtotalItem(objeto))
    }
    return array
}

function calcularSubtotalItem(obj){
    let subtot = obj.preco * obj.quantidade  
    return subtot
}

function calcularTotalCarrinho(carr){
    let somas = 0
    for(let i = 0; i < carr.length; i++){
        somas += carr[i]
    }
    return somas
}

function exibir(total){
    alert(`O total da comprsa é de: ${total} R$`)
}

let carrinho = receberarray()
let resultado = calcularTotalCarrinho(carrinho)
exibir(resultado)
