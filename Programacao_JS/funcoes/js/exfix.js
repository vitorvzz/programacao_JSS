// Exercicio de fixação 
// 1)Sem parametros e sem retorno. Crie uma função que leia 3 valores digitados pelo usuario. e apresnete a multiplicação dos valores e apresente em tela
// 2)Com parametro e sem retorno. Crie um script que leia 3 valores digitados pelo usuario, crie uma funcao de multiplicacao dos vlaores e apresnete em tela. Os parametros devem ser passados para a função
// 3) Com parametro e com retorno. Crie um script que leia 3 valores digitados pelo usuario, crie uma funcao de multiplicacao dos vlaores retorne para que chamou e apresente em tela
// 4)Varia funções. Crie um script que leia 3 valores digitados pelo usuario, chame a função multiplicação passando os valores e retorne para quem chamou, crie uma função para apresentar o resultado em tela


function exercicio1() {
  var n1 = parseFloat(prompt("Digite o primeiro valor"))
  var n2 = parseFloat(prompt("Digite o segundo valor"))
  var n3 = parseFloat(prompt("Digite o terceiro valor"))

  var resultado = n1 * n2 * n3
  alert("A multiplicação dos valores digitados é: " + resultado)
}

function exercicio2() {
  function multiComParametro(n1, n2, n3) {
    var r = n1 * n2 * n3
    alert("A multiplicação dos valores digitados é: " + r)
  }

  var n1 = parseFloat(prompt("Digite o primeiro valor"))
  var n2 = parseFloat(prompt("Digite o segundo valor"))
  var n3 = parseFloat(prompt("Digite o terceiro valor"))

  multiComParametro(n1, n2, n3)
}

function exercicio3() {
  function parametro_retorno(n1, n2, n3) {
    var r = n1 * n2 * n3
    return(r)
  }

  var n1 = parseFloat(prompt("Digite o primeiro valor"))
  var n2 = parseFloat(prompt("Digite o segundo valor"))
  var n3 = parseFloat(prompt("Digite o terceiro valor"))

  var resultadoMulti = parametro_retorno(n1, n2, n3)
  alert("A multiplicação dos valores digitados é: " + resultadoMulti)
}

function exercicio4() {
  function multi(n1, n2, n3) {
    var r = n1 * n2 * n3
    return(r)
  }

  function exibirResultado(resultado) {
    alert("O resultado da multiplicação é: " + resultado)
  }

  var n1 = parseFloat(prompt("Digite o primeiro valor"))
  var n2 = parseFloat(prompt("Digite o segundo valor"))
  var n3 = parseFloat(prompt("Digite o terceiro valor"))

  var resultadoMulti = multi(n1, n2, n3)
  exibirResultado(resultadoMulti)
}