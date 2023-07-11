// const docRelogio = document.querySelector("#relogio")
const date = new Date
const relogio = {
    horas: date.getHours(),
    minutos: date.getMinutes(),
    segundos: date.getSeconds(),
}

console.log(relogio.horas, relogio.minutos, relogio.segundos)


