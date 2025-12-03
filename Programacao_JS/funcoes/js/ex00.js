// Função sem retorno e sem parametro

function exibir_mensagem(){
    alert("Função sem retorno e sem parametro")
    var n1, n2, r 
    n1=4
    n2=8
    r = n2-n1
    alert("O resultado da subtração é: "+r)
}

exibir_mensagem()

// Função com parametro

function subtrair(n1, n2){
    var r // As variaveis não são as mesmas da função exibir mensagem
    r = n2-n1
    alert("O resultado da subtração é: "+r)
}
var x, y
x=10
y=6
// Chamando a função e passando valores com variaveis
subtrair(x,y)
// Chamando a função e passando valores com diretamente
subtrair(3,9)

// Função com parametro e com retorno

function somar(n1,n2){
    var s
    s=n1+n2
    return(s)
}

var resultado_soma
resultado_soma=somar(5,9)
alert(resultado_soma)

// Exercicio de fixação 
// 1)Sem parametros e sem retorno. Crie uma função que leia 3 valores digitados pelo usuario. e apresnete a multiplicação dos valores e apresente em tela
// 2)Com parametro e sem retorno. Crie um script que leia 3 valores digitados pelo usuario, crie uma funcao de multiplicacao dos vlaores e apresnete em tela. Os parametros devem ser passados para a função
// 3) Com parametro e sem retorno. Crie um script que leia 3 valores digitados pelo usuario, crie uma funcao de multiplicacao dos vlaores retorne para que chamou e apresente em tela
// 4)Varia funções. Crie um script que leia 3 valores digitados pelo usuario, chame a função multiplicação passando os valores e retorne para quem chamou, crie uma função para apresentar o resultado em tela
