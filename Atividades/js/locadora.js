function converteDuracao(){
    let inTitulo = document.getElementById("inTitulo")
    let inDuracao = document.getElementById("inDuracao")
    let outTitulo = document.getElementById("outTitulo")
    let outResposta = document.getElementById("outResposta")
    let titulo = inTitulo.value
    let duracao = Number(inDuracao.value)
    let horas = Math.floor(duracao)/60
    let minutos = duracao % 60
    outTitulo.innerHTML = titulo
    outResposta.innerHTML = horas + "hora(s) e " + minutos + "minuto(s)"
}

let btConverter = document.getElementById("btConverter")
btConverter.addEventListener("click", converteDuracao)