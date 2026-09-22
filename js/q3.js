/*3. Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32).]

entrada: receber a temperatura em celsius.
processamento: converter celsius para fahrenheit.
saída:O reultado da conversão

Eu usei a mesma lógica de dividir em funções.

mesmo nível da passada. (moderadamente fácil)
*/

function receberatemperatura(){
    let c = Number(prompt("Digite a temperatura em °C"))
    return c
}

function celsiusParaFahrenheit(convertor){

    let fah = (celsius * 1.8) + 32;
    return fah
}

function exibir(tp){
    alert(`A temperatura em °C ${celsius} é de °F ${valor}`)
}
let celsius = receberatemperatura()

let valor = celsiusParaFahrenheit(celsius)

exibir(valor)