/* 5. Crie uma função chamada somarElementos que receba um array de números
como parâmetro, percorra o vetor, some todos os valores e retorne o total.

entrada: array e os elementos dentro do array
processamento: somar os valores dentro do array
saída: exibir o valor da soma

A questão foi mais fácil do que a última
utilizei a mesma lógica de separar entrada, processamento e saída em funções.
*/

function receberarray(){
    const valores = []
    let tamanho = Number(prompt("Digite quantos valores que deseja colocar:"))
    for(let i = 0; i < tamanho; i ++){
        valores[i] = Number(prompt(`Digite o ${i + 1}° valor`))
    }
    return valores
}

function somarElementos(vetor){

    let soma = 0

    for(let elemento of vetor){
        soma += elemento
    }   
    return soma
}


function exibir(resu){
    alert(`O valor da soma é: ${resu} `)
}

const array = receberarray()

let resultado = somarElementos(array)

exibir(resultado)