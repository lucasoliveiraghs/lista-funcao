/*1. Crie uma função chamada calcularJurosSimples que receba três parâmetros:
capital, taxa (em porcentagem) e tempo (em meses). A função deve calcular e
retornar o valor dos juros:

entrada: capital, taxa e tempo
processamento: calcular o juros
saida: o resultado do juros

o pensamento é fazer uma função para cada processo dentro da questão
Questão bem fácil, sem nenhum comentário adicional.
*/

function recebercapital(){
    let cap = Number(prompt("Digite o capital:"))
    return cap
}

function recebertaxa(){
    let tax = Number(prompt("Digite a taxa em porcentagem:"))
    return tax
}

function recebertempo(){
    let tem = Number(prompt("Digite o tempo em meses:"))
    return tem
}

function calcularJurosSimples(valor, taxas, meses){
    let juros = valor * (taxas / 100) * meses
    return juros
}

function exibir(resul){
    alert(`O juros simples é de ${resul} R$`)
}

let c = recebercapital()
let tax = recebertaxa()
let tem = recebertempo()
let resultado = calcularJurosSimples(c,tax,tem)
exibir(resultado)