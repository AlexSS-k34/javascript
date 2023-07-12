setInterval(() => {
    const docHora = document.querySelector("#hora")
    const docMin = document.querySelector("#min")
    const docSec = document.querySelector("#sec")

    const date = new Date
    const relogio = {
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds(),
    }

    docHora.textContent = `${relogio.horas}`
    docMin.textContent = `${relogio.minutos}`
    docSec.textContent = `${relogio.segundos}`
}, 1000)

