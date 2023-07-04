
// Função Normal
function soma(n1,n2){
    return n1 + n2
}
console.log(`Soma ${soma(5,6)}`)

// Arrow Function
const sub = (n1,n2) => {
    return n1 - n2
}
console.log(`Sub ${sub(50,6)}`)

// Retornando um valor sem o return
const mult = (n1,n2) => n1 * n2
console.log(`Mult ${mult(4,6)}`)
