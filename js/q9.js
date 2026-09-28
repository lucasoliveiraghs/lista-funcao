/* 9. Crie duas funções para avaliar o desempenho de um aluno:
a) calcularMediaArray(notas): recebe um array de números (notas) e retorna
a média aritmética simples dessas notas.
b) avaliarAluno(aluno): recebe um objeto aluno contendo as propriedades
nome e notas (onde notas é um array com 3 notas). A função deve chamar
internamente a função calcularMediaArray. Se a média for ≥ 60, retorna
"Aprovado", caso contrário, retorna "Reprovado".

entrada: receber um objeto com nomes e notas dos alunos
Processamento: calcular a média das notas e classificar se o aluno foi aprovado ou não
saída:Exibir se o aluno foi aprovado ou reprovado

foi difícil pois errei em questão de raciocínios e em questão de uso de array e objeto, porém, com ajuda da atividade do Nikolas consegui compreender melhor, em questão de raciocínio não foi tanto problema, foi mais a prática e interpretação que me atrapalhou.*/

function receberaluno(){
    const objetoaluno = {
        nome: prompt("Digite o nome do aluno")
    }
    const nota = []
    for(let i = 0; i < 3; i ++){
        nota [i] = Number(prompt(`Digite a ${i + 1}º nota do aluno ${objetoaluno.nome}`))
    }
    objetoaluno.notas = nota
    return objetoaluno
}

function calcularMediaArray(valor){
    let soma = 0
    for(let item of valor){
        soma += item
    }
    soma = soma/3
    return soma
}

function avaliarAluno(passar){
    let result = calcularMediaArray(passar.notas)
    if(result >= 60){
        let situacao = "Aprovado"
        return situacao
    }else{
        let situacao = "Reprovado"
        return situacao
    }
}

function exibir(estado){
    alert(`O aluno ${person.nome} está ${estado}`)
}

let person = receberaluno()
let estado = avaliarAluno(person)
exibir(estado)