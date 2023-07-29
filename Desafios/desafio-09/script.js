var saida = document.querySelector("output")

const limpar = () =>{
    saida.textContent = ""
}

const voltar = () =>{ 
    saida.textContent = `${saida.value.substring(0, saida.value.length -1)}`
}

const num = (n) =>{
    saida.value += n
}

const calc = () =>{
    if (saida.value.length != ""){
        saida.textContent = `${eval(saida.value)}`
    }
}