var btnLimpar = document.querySelector("#btnLimpar")
var espaco = document.querySelector("#espaco")
var body = document.querySelector("body")

btnLimpar.addEventListener("click", () => {
    espaco.textContent = "Limpou a tela "
})

espaco.addEventListener("click", () => {
    if (espaco.textContent == "Limpou a tela "){
        espaco.textContent = ""
    }
    espaco.textContent += "Clicou na tela "
})

body.onscroll = () => {
    if (espaco.textContent == "Limpou a tela "){
        espaco.textContent = ""
    }
    espaco.textContent += "Rolou a tela "
}
