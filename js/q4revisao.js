/*4. Crie uma função chamada exibirResumoProduto que receba um objeto
representando um item do estoque com as propriedades nome, preco e quantidade.
A função deve retornar uma string formatada no padrão:

"Produto: [nome] | Preço: R$ [preco] | Estoque: [quantidade] unidades."

entrada: objeto com nome, preço e quantidade
processamento: formatar a string do item
saída: A srtring formatada

Eu achei a questão muito fácil, para executar, eu apenas criei uma função para entrada e saída

*/

function receberobjeto(){
    const item = {
        nome: prompt("Digite o nome do item:"),
        preco: Number(prompt("Digite o preço do item:")),
        quantidade: Number(prompt("Digite a quantidade do iten desejada:")),
    }
    return item
}

function exibirResumoProduto(resul){
    alert(`Produto: ${resul.nome} | preço: ${resul.preco} | Estoque: ${resul.quantidade} unidades.`)
}

let i = receberobjeto()
exibirResumoProduto(i)
