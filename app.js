function validaFormulario(){

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if (nome== "" || email== "" || senha == "") {
        alert("error")
    }
    const emailRegex = /^[\s@]+@[^\s@]\.[\s@]+$/
    if (!emailRegex.test(email)) {
        alert("error1")
    }

    if (senha.lenght >8) {
        alert("Limite de caracteres excedido!")
        
    }
}