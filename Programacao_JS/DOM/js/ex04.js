function verificar(){
    var usuario, senha

    usuario= document.getElementById("usuario").value
    senha= document.getElementById("senha").value

    if(usuario=="joao" && senha=="TI3M"){
        alert("Acesso permitido")
    }else{
        alert("Acesso negado")
    }
}