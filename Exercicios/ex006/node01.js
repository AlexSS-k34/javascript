var idade = 50
console.log(`Sua idade atual é de ${idade} anos.`)
if (idade < 16){
    console.log(`Vôçe não pode votar ainda.`)
}
else if (idade < 18 || idade > 65){
    console.log(`Voçê tem direito ao voto opcional.`)
}
else{
    console.log(`Voçê deve votar para um candidato de sua escolha. Não esqueça de comparecer no dia.`)
}