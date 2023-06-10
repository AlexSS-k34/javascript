var img = document.getElementById('imagem')
img.style.backgroundImage = "url(imagens/sombra.jpg)"

function Click(){
    var data = new Date().getFullYear()
    var nac = document.getElementById('nacimento')
    var saida = document.querySelector('#saida')
    

    if (nac.value > data || nac.value == 0){
        alert('Verifique as Informações.')
        img.style.backgroundImage = "url(imagens/sombra.jpg)"
    }
    else{
        var idade = data - nac.value
        var sexo = document.getElementsByName('sexo')
        
        if (sexo[0].checked){
            sexo = "Homem"

            if (idade >= 0 && idade <= 10){
                img.style.backgroundImage = "url(imagens/homem_10.jpg)"
            }
            else if (idade <= 20){
                img.style.backgroundImage = 'url(imagens/homem_20.jpg)'
            }
            else if (idade <= 30){
                img.style.backgroundImage = 'url(imagens/homem_30.jpg)'
            }
            else if (idade <= 40){
                img.style.backgroundImage = 'url(imagens/homem_40.jpg)'
            }
            else if (idade > 40 && idade < 150){
                img.style.backgroundImage = 'url(imagens/homem_50+.jpg)'
            }
            else{
                alert('Verifique as Informações.')
                img.style.backgroundImage = "url(imagens/sombra.jpg)"
            }
        }
        else if (sexo[1].checked){
            sexo = "Mulher"

            if (idade >= 0 && idade <= 10){
                img.style.backgroundImage = "url(imagens/mulher_10.jpg)"
            }
            else if (idade <= 20){
                img.style.backgroundImage = "url(imagens/mulher_20.jpg)"
            }
            else if (idade <= 30){
                img.style.backgroundImage = "url(imagens/mulher_30.jpg)"
            }
            else if (idade <= 40){
                img.style.backgroundImage = "url(imagens/mulher_40.jpg)"
            }
            else if (idade > 40 && idade < 150){
                img.style.backgroundImage = "url(imagens/mulher_50+.jpg)"
            }
            else{
                alert('Verifique as Informações.')
                img.style.backgroundImage = "url(imagens/sombra.jpg)"
            }
        }
        saida.innerText = `${sexo}, com idade de ${idade}.`
    }
}