/* 6. Crie uma função chamada formatarPessoa que receba um objeto representando
uma pessoa com as propriedades nome, idade e profissao. A função deve retornar
uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e
trabalho como [profissao]." 

entrada: Objeto com nome, idade e profissão
processamento: concatenar as informações
saída: a frase

Eu achei que ia ser mais difícil fazer no último terço, porém, foi relativamente fácil.

O raciocínio envolve criar uma função inicial que recebe o objeto, após retorna-la, coloco-a na função formatarPessoa para "concatenação" e por fim exibo em outra função.
*/

function receberobjeto(){
    const pessoa = {
        nome: prompt("Digite o seu nome"),
        idade: Number(prompt("Digite a sua idade")),
        profissao: prompt("Digite a sua profissão"),
    }
    return pessoa
}

function formatarPessoa(id){

    let concatenacao = `Olá, meu nome é ${id.nome}, tenho ${id.idade} anos e
trabalho como ${id.profissao}.`

return concatenacao
}

function exibir(resultado){
    alert(`${resultado}`)
}


let objeto = receberobjeto()

let formatacao = formatarPessoa(objeto)

exibir(formatacao)