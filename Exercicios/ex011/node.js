
(() => { // IIFE == Immediately Invoked Function Expression.
    
    // Objeto
    var pessoa = { // Objeto pessoa.
        nome: "Alex",
        sobreNome: ["Simão", "Souza"],
        idade: 20,
        altura: 1.66,
        casado: false,
        estudando: true,
        aniversario: () => { // Cada vez que essa função/método for invocado, a idade aumenta em +1. 
            pessoa.idade++
        },
        nomeSobreNome: () => { // Quando esse método é invovada, o pessoa.nome se torna o nome completo.
            pessoa.nome = `${pessoa.nome} ${pessoa.sobreNome[0]} de ${pessoa.sobreNome[1]}`
        }
    }
    pessoa.aniversario()
    pessoa.nomeSobreNome()

    console.log(pessoa)
})()