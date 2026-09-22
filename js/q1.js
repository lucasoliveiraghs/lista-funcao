/*1. Crie uma função chamada calcularAreaRetangulo que receba dois parâmetros:
base e altura. A função deve calcular e retornar o valor da área (área = base ×
altura).

entradas: Base e altura.
Processamento: clacular a área.
saída: resultado da área.

Para resolver a atividade eu recebi dois valores multipliquei dentro da função e peguei o resultado, retornei e voltei*/

function calcularAreaRetangulo (base, altura){
    let area = base * altura;
    return area
}

let n1 = Number(prompt("Digite o valor da base do retângulo:"))

let n2 = Number(prompt("Digite o valor da altura do retângulo:"))

let resultado = calcularAreaRetangulo(n1, n2)

alert(`O resultado da área do Retângulo ${resultado}`)




