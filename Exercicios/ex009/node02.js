// Soma 

function soma(n1=0, n2=0){ // Definindo um valor padrão para os parametro, podemos prevenir erros caso deixemos de especificar um valor. 
    return n1 + n2
}

var res = soma(56,32)
console.log(res)

// Fatorial

/* function fatorial(n){
    let fat = 1
    for (let c = n; c > 0; c--){
        fat *= c
    }
    return fat
}

var res = fatorial(5)
console.log(res) */

// Fatorial também, utilizando RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

var res = fatorial(5)
console.log(res)