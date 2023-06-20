
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
        alert('[ERRO] Prencha todos os campos requisitados ')
        saida.innerText = "Não foi possivel contar..."
        
    } else{
        saida.innerText = "Contando:"
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passos = Number(passos.value)

        if (passos <= 0){
            // Para evitar um loop infinito, passos deve ser maior que 0.
            alert('[ERRO] Passos invalido: Considerando PASSOS = 1')
            passos = 1
        }
        if (inicio <= fim){
            // Contagem Crescente
            for (let i = inicio;i <= fim;i += passos){
                saida.innerText += ` \u{1f449} ${i}`
            }
        } else if (inicio > fim){
            // Contagem Decrecente
            for (let i = inicio;i >= fim;i -=passos){
                saida.innerText += ` \u{1f449} ${i}`
            }
        }
    }
}