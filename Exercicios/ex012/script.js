let preco = 5.20
console.log(preco.toLocaleString("pt-br", {style: "currency", currency: "brl"}))

const pessoa = {
    nome: "Alex Simão de Souza",
    peso: 52.5,
    altura: 1.67
}
const imc = pessoa.peso / pessoa.altura**2

console.log(imc.toFixed(3))
document.write(imc.toFixed(3))