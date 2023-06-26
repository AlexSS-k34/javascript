
var txtnum = document.querySelector('#txtnum')
var sel = document.querySelector('#sel')
var tab = []

function adicionar(){
    if (txtnum.value.length = 0 || txtnum.value < 1 || txtnum.value > 100 || tab.indexOf(Number(txtnum.value)) != -1){
        alert('[ERRO] Valor invalido ou ja adicionado.')

    } else{
        let num = Number(txtnum.value)        
        let new_opt = document.createElement("option")
        new_opt.text = `Valor ${num} adicionado`
        sel.appendChild(new_opt)
        tab.push(num)
        txtnum.value = ""
    }
    console.log(tab)
    console.log(tab.indexOf(Number(txtnum.value)))
}


