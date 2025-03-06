function enviarformulario() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    console.log(nome);
    console.log(sobrenome);
    imprimirOlaMundo(nome, sobrenome);
}


document.getElementById("MeuFormulario")
    .addEventListener("submit", function (event) { //
        event.preventDefault();
        console.log(event)
        let html = event.srcElement
        console.log(html);
        let nomehtml = html[0];
        let sobrenomehtml = html[1];
        console.log(nomehtml);
        console.log(sobrenomehtml);
        let nome = nomehtml.value;
        let sobrenome = sobrenomehtml.value;
        imprimirOlaMundo(nome, sobrenome);
    })

document.getElementById("buttonLigaDesliga").addEventListener("click", function (event) {
    let circulohtml = document.getElementById("circulo");
    let buttonhtml = document.getElementById("buttonLigaDesliga")
    console.log(circulohtml.classList)
    circulohtml.classList.toggle("ligado")
    if (circulohtml.classList.contains("ligado")) {
        buttonhtml.innerText = "desliga"
    } else {
        buttonhtml.innerText = "liga"
    }
})