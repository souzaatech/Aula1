const botaoMensagem = document.getElementById("botao") 
const nome = document.getElementById ("nome")
const botaoTrocarCor = document .getElementById("botaoTrocarCor")

function mostrarMensagem() {
    alert (`Olá ${nome.value}!`)
}
function trocarCor() {
    const body = document.getElementById ("body")
    const cor = document.getElementById ("cor")
    body.classList = cor.value
}
botaoMensagem.addEventListener("click", mostrarMensagem)
botaoTrocarCor.addEventListener("click", trocarCor)
