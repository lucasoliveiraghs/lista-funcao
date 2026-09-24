/* Crie duas funções para autenticação de acesso:
a) validarSenha(senha): retorna true se a string senha tiver pelo menos 6
caracteres, ou false caso contrário.
b) autenticarUsuario(usuario, senha): chama internamente a função
validarSenha. Se a senha for válida, retorna "Acesso concedido para
[usuario]". Caso contrário, retorna "Senha muito curta para o usuário
[usuario]".
 
entrada: receber uma senha e o usuário
processamento: verificar se o tamanho da senha
saída: Mostrar se o acesso foi concedido ou não

foi bem chata de fazer pois a parte do processamento do tamanho da letra deu pronblema devido a principalmente errode portugues (no caso ingles) 
fora isso, o pensamento foi o mesmo de sempre.

*/

function recebersenha (){
    let senha = prompt("Digite a senha:")
    return senha
}

function receberusuario(valid){
    let usuario = prompt("Digite seu usuário")
    return usuario
}

function validarSenha(id){
    let tamanho = id.length
    if(tamanho >= 6){
        return 1
    } else{
        return 0
    }
}

function autenticarUsuario(us,se){
    if(validarSenha(se)){
        let confirmacao = `Acesso concedido para ${us}` 
        return confirmacao
    } else{
        let negacao = `Senha muito curta para o usuário ${us}`
        return negacao
    }
}

function exibir(result){
    alert(`${result}`)
}
let s = recebersenha()
let u = receberusuario()
let val = autenticarUsuario(u,s)
exibir(val)