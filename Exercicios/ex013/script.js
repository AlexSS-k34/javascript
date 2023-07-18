document.write(" <h2>Informações </h2>")

let nomeLutador = "Anderson Silva" 
let nacLutador = "Brasilero"
let idadeLutador = 48
let pesoLutador = 84.4
let alturaLutador = 1.88

document.write(`<p> Lutador: ${nomeLutador} </p>`)
document.write(`<p> Nacionalidade: ${nacLutador} </p>`)
document.write("<p> Idade: " + idadeLutador + " anos </p>")
document.write("<p> Peso: " + pesoLutador + " Kg </p>")
document.write("<p> Altura: " + alturaLutador + " m </p> <hr>")
//=====================================================

document.write("<h2> Frase do Dia </h2>")

const dia = 10
const mes = 9
const ano = 2021
const frase = "Toda manhã você tem duas escolhas: continuar dormindo com seus sonhos ou acordar e persegui-los!"
const autor = "Desconhecido"

document.write(`<p> ${dia}/${mes}/${ano} </p>`)
document.write(`<p> ${frase} </p> <hr>`)
//=====================================================

document.write("<h2> Array de Meses do Ano </h2>")

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

document.write(`<p> ${meses[0]}, ${meses[1]}, ${meses[2]}, ${meses[3]}, ${meses[4]}, ${meses[5]}, ${meses[6]}, ${meses[7]}, ${meses[8]}, ${meses[9]}, ${meses[10]}, ${meses[11]} </p> <hr>`)
//======================================================
