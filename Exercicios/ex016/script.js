// Tipos de Laços
const main = document.querySelector("#main")
const title = document.querySelector("#title")
const sect = document.querySelector("#sect")

//FOR ==== for (Index; Condição; Acréscimo){}
const carros = ["Ford", "Sedan", "Toyota", "Tesla"]

for (let i = 5; i > 0; i--) {
    console.log(i);   
    sect.textContent += sect.textContent = i 
}

for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);   
    sect.textContent += sect.textContent = carros[i]
    // sect.appendChild(document.createTextNode(carros[i]))
}

// FOR EACH ==== array.forEach((a, b) => {})
const frutas = ["Banana", "Uva", "Limão", "Maça", "Mamão", "Abacaxi"]

frutas.forEach((element, i) => {
    sect.textContent += sect.textContent = ` ${i} ${element}`
});
