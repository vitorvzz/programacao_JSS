function calcular(){

    var trabalho, prova, lista

    prova = parseFloat(prompt("Digite a nota do prova: "))
    trabalho = parseFloat(prompt("Digite a nota do trabalho: "))
    lista = parseFloat(prompt("Digite a nota da lista: "))

    function notas(trabalho, prova, lista) {
    var nFinal = (trabalho * 0.2) + (prova * 0.7) + (lista * 0.1)
    if(nFinal >= 7){
        return("Aprovado")
    }else if(nFinal >=4 && nFinal < 7){
        return("Exame")
    }
    else{
        return("Reprovado")
    }
}
function resultado(r){
    alert("O aluno está: " + r)
}

var resultadoFinal = notas(trabalho, prova, lista)
resultado(resultadoFinal)
}
