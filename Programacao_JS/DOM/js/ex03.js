function calcular(){
    var peso, altura, imc
    peso=parseFloat(document.getElementById("peso").value)
    altura=parseFloat(document.getElementById("altura").value)

    imc= peso/(altura*altura)
    if(imc<18.5){
        document.getElementById("resultadoAbaixo").innerHTML=`Voce está abaixo do peso, IMC:${imc}`
    }else if(imc> 18,5 && imc<24.9){
       document.getElementById("resultadoNormal").innerHTML=`Voce está com o peso normal, IMC:${imc}` 
    }else if(imc> 24.9 && imc<29.9){
       document.getElementById("resultadoAcima").innerHTML=`Voce está acima do peso, IMC:${imc}` 
    }else{
       document.getElementById("resultadoObeso").innerHTML=`Voce está obeso, IMC:${imc}`  
    }
    
}