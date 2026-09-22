/*4. Crie uma função chamada calcularIMC que receba o peso (kg) e a altura (m). A
função deve calcular o IMC e retornar uma string com a classificação:
• IMC < 18.5: "Abaixo do peso"
• IMC entre 18.5 e 24.9: "Peso normal"
• IMC ≥ 25.0: "Sobrepeso"

entrada: receber o valor do peso e da altura.
Processamento: calcular e classificar.
saída: A classificação de IMC.

O raciocínio, foi o mesmo  das questões anteriores, fazendo funções específicas para cada processo de resolução.

achei no limite entre médio e fácil.
*/

function rv(parametro){

    if(parametro){
        let  n1 = Number(prompt("Digite seu peso em Kg:"))
        return n1
    } else{
        let  n2 = Number(prompt("Digite sua altura em Kg:")) 
        return n2
    }
    
}

function calculoimc(h, p){
    let result = p/(h*h)
    return result
}

function rater(im){
    if(im < 18.5){
        alert("Abaixo do peso")
    }else if(im > 18.5 && im < 24.9){
        alert("Peso Normal")
    }else{
        alert("Sobrepeso")
    }
}

let altura = rv(0)
let peso = rv(1)

let imc = calculoimc(altura, peso)

rater(imc)