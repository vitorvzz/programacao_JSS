function somar(){
    var r, v1, v2

    v1=document.getElementById("primeiroValor").value 
    v2=document.getElementById("segundoValor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        r = parseFloat(v1) + parseFloat(v2)
        document.getElementById("resultadoSoma").innerHTML=`O resultado da soma é: ${r}`
    }
}

function sub(){
    var r, v1, v2

    v1=document.getElementById("primeiroValor").value 
    v2=document.getElementById("segundoValor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        r = parseFloat(v1) - parseFloat(v2)
        document.getElementById("resultadoSub").innerHTML=`O resultado da subtração é: ${r}`
    }
}

function multi(){
    var r, v1, v2

    v1=document.getElementById("primeiroValor").value 
    v2=document.getElementById("segundoValor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        r = parseFloat(v1) * parseFloat(v2)
        document.getElementById("resultadoMulti").innerHTML=`O resultado da Multiplicação é: ${r}`
    }
}

function div(){
    var r, v1, v2

    v1=document.getElementById("primeiroValor").value 
    v2=document.getElementById("segundoValor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }  
    else{
        r = parseFloat(v1) / parseFloat(v2)
        if(v2==0){
            document.getElementById("resultadoDiv").innerHTML=`Divisão por 0 é impossivel`
        }else{
            document.getElementById("resultadoDiv").innerHTML=`O resultado da divisão é: ${r}`
        }
        
    }
}