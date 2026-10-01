/*10. Escreva um programa completo para análise de uma turma contendo três 
funções: 
a) verificarAprovacao(nota): retorna true se a nota for ≥ 60 e false caso 
contrário. 
b) contarAprovados(listaAlunos): recebe um array de objetos (onde cada 
objeto é um aluno com {nome, nota}). Percorre a lista, chama a função 
verificarAprovacao para cada aluno e retorna o total de alunos aprovados. 
c) executarAnalise(): função principal que solicita via prompt o cadastro de 4 
alunos (armazenando-os num array de objetos), chama contarAprovados e 
exibe o total de aprovados no console.log.

entrada: O array com os objetos contendo nome e nota
processamneto: verifica se a nota do aluno é menor, maior ou igual a 60 e retorna true ou false, e depois retorna quantos e quais alunos foram aprovados
saída: Total de aprovados

------function executarAnalise(){
    let array = []
    for(let i = 0; i < 4;  i++){
        array[i] = {
            nome: prompt(`Digite o nome do ${i + 1}º aluno`),
            nota: Number(prompt(`Digite a nota do ${i + 1} aluno`)),
        }
    }
    let number = contarAprovados(array)
    console.log(`O número de alunos aprovados foi ${number}`)
}

function contarAprovados(elementos){
    let situation = 0
    let soma = 0
    for(let item in elementos){
        let totally = elementos[item].nota
        situation = verificarAprovacao(totally)
        if(situation){
            soma += 1
        }
        return totally
    }
}

function verificarAprovacao(pontos){
    if(pontos >= 60){
        return 1
    } else{
        return 0
    }
}

executarAnalise()--------

a questão acima foi oq eu havia feito olhando como base a do Nikolas, por algum erro que eu não consegui reconhecer, não deu certo, portanto a resolução apresentada é a mesma do Nikolas, em relação a dificuldade se encaixa na mesma da questão nove, não é difícil, pela função em si, porém eu ainda sou ruim com arrays e objetos na prática, além de problemas de raciocínio mesmo.*/

function executarAnalise(){
    const alunos = [];
    for(let i = 0; i < 4; i++){
        alunos[i] = {
               nome: prompt(`Digite o nome do ${i+1}º aluno`),
               nota: Number(prompt(`Digite a nota do ${i+1}º aluno`))
        }
    }
    let numero = contarAprovados(alunos)
    console.log(`Foram ${numero.length} alunos aprovados, sendo eles: ${numero}`)
}
function contarAprovados(listaAlunos){
    let estado = 0
    let name = ""
    let soma = []
   for(const item in listaAlunos){
    let notas = listaAlunos[item].nota
     estado = verificarAprovacao(notas)
      if(estado){
        name = listaAlunos[item].nome
        soma.push(name)
      }
   }
   return soma
}
function verificarAprovacao(pontos){
    if(pontos >= 60){
        return 1
    } else{
        return 0
    }
}

executarAnalise()