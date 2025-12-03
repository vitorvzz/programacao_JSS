function conversao(){
    var dolar, real, conv
    dolar=parseFloat(document.getElementById("dolar").value)
    real=parseFloat(document.getElementById("real").value)

    conv=real/dolar
    document.getElementById("resultado").innerHTML=`Seu dinheiro convertido de Real para Dolar é de: ${conv}`
}