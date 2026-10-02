/*
3. Crie uma função que apresente um menu ao usuário com as seguintes opções:
a. Converter de real para euro
b. Converter de euro para real
c. Converter de real para dólar
d. Converter de dólar para real
e. Fechar o programa.
O programa deve apresentar esse menu em loop até o usuário selecionar fechar
programa. Caso ele escolha outras opções, o usuário deve entrar com os dados
e o resultado deve ser mostrado na tela. Após mostrar o resultado da conversão
pedida, o programa volta para o menu.

entrada: O que o usuário deseja fazer
processamento: conversão e repetição
saída: o resultado da conversão

O raciocínio foi um pouco diferente pois não consegui dividir em pequenas funções, fiz uma única função com o switch, essa questão é mais trabalhosa do que as outras duas anteriores, porém, ainda achei fácil.
*/

function cases(){


    let menu = Number(prompt("Digite a opção que deseja: \n 1.Converter de real para euro \n 2.Converter de euro para real \n 3.Converter de real para dólar \n 4.Converter de dólar para real \n 5.Fechar o programa."))
    switch(menu){
        case 1: 
        let realeuro = Number(prompt("DIgite o valor a ser convertido:"))
        let euro = realeuro * 5.88
        alert(`O resultado convertido é de ${euro}`)
        break;

        case 2: 
        let euroreal = Number(prompt("Digite o valor a ser convertido:"))
        let real1 = euroreal / 5.88 
        alert(`O resultado convertido é de ${real1}`)
        break;

        case 3:
        let realdolar = Number(prompt("Digite o valor a ser convertido:"))
        let dolar = realdolar * 5.23
        alert(`O resultado convertido é de ${dolar}`)
        break;

        case 4:
        let dolarreal = Number(prompt("Digite o valor a ser convertido:"))
        let real2 = dolarreal / 5.23
        alert(`O resultado convertido é de ${real2}`)
        break;

        case 5: 
        alert(`Programa encerrado`)
        break;

        default: 
        alert(`Inválido`)
        break;
    }
    if(menu !== 5){
        cases()
    }
}
 
cases()

