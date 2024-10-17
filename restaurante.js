function calcularPreco(){
    //cria referencia aos elementos da página
    let inQuilo=document.getElementById("inQuilo")
    let inConsumo=document.getElementById("inConsumo")
    let outValor=document.getElementsById("outValor")
    //abtem conteudom dos campos de edição da página
    let quilo=Number(inQuilo.value)
    let consumo=Number(inConsumo.value)
    //calcula o valor a ser pago
    let valor=(quilo/1000)*consumo
    //altera o conteúdo da linha de resposta
    outValor.innerHTML="Valor a pagar R$: "+valor.toFixed(2)
}

//cria referencia ao elemento btCalcular (botao)
let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPreco)