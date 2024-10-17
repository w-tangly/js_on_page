function converteDuracao(){
    let inTitulo=document.getElementById("inTitulo")
    let inDuracao=document.getElementById("inDuracao")
    let outTitulo=document.getElementById("outTitulo")
    let outResposta=document.getElementById("outResposta")
    //obtem todos os conteudos dos campos de entrada
    let titulo=inTitulo.value
    let duracao=Number(inDuracao.value)
    //arredonda para baixo o resultado da divisão
    let horas=Math.floor(duracao)/60
    //obtem o resto da divisao entre os numeros
    let minutos=duracao%60
    //altera o conteudo dos paragrafos de resposta
    outTitulo.innerHTML=titulo
    outResposta.innerHTML=horas+"hora(s) e "+minutos+"minuto(s)"
}

//cria referencia ao elemento btConverter (botao)
let btConverter = document.getElementById("btConverter")
//registra um evento associado ao botao, para carregar uma funcao
btConverter.addEventListener("click", converteDuracao)