function tab(){
    var txtnum = document.getElementById('txtnum')
    var saida = document.getElementById('sel_tab')

    if (txtnum.value.length == 0){
        alert('Não esqueça de selecionar um numero.')
    } else{
        let num = Number(txtnum.value)
        let x_num = 0 // Numero multiplicador inicial
        saida.innerText = "" 

        for (let x = x_num;x <= 10;x++){
            item = document.createElement('option')
            item.text = `${num} x ${x} = ${num*x}`
            item.value = `tab${x}`
            saida.appendChild(item)
        }
    }


}