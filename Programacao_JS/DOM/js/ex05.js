function gerarPA() {
    var a1, n, r, an, lista=[]
    a1 = parseFloat(document.getElementById("a1").value)
    n = parseInt(document.getElementById("n").value)
    r = parseFloat(document.getElementById("r").value)

    an = a1 + (n - 1) * r
    for (var i = 0; i < n; i++) {
        lista.push(a1 + i * r)
    }
    document.getElementById("resultado").innerHTML = `O ${n} termo da PA é: ${an}`
    document.getElementById("lista").innerHTML = `Os termos da PA são: ${lista.join(", ")}`
}