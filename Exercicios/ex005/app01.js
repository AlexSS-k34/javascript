var vel = 70
var vel_max = 60
if (vel > 60){
    console.log(`Sua velocidade é maior que a velocidade permitida, voçe foi MULTADO. Reduza a sua velocidade em ${vel - vel_max}km`)
}
else{
    console.log(`Velocidade atual ${vel}km/h. Continue dirigindo com segurança.`)
}