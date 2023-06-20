
// Output
var saida = document.getElementById('saida')
var p_saida = document.createElement('p')
var txt_saida = document.createTextNode('Contando:')
p_saida.appendChild(txt_saida)
saida.appendChild(p_saida)


function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passos = document.getElementById('txtpassos')
    saida = document.querySelector("#saida>p")
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        alert('Prencha todos os campos requisitados ')
        
    } else{
        saida.innerText = "Contando:"
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passos = Number(passos.value)

        for (let i = inicio;i <= fim;i += passos){
            saida.innerText += ` \u{1f449} ${i}`
        }
    }
}