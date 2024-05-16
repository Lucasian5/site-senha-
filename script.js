function verificarSenha() {
    var senhaInserida = document.getElementById("senha").value;

    // Verifique se a senha está correta
    if (senhaInserida === "123") { // Modifique "senhasecreta" para sua senha desejada
        document.getElementById("inicio").style.display = "none";
        document.getElementById("conteudoProtegido").style.display = "block";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}

function voltarInicio() {
    document.getElementById("conteudoProtegido").style.display = "none";
    document.getElementById("inicio").style.display = "block";
}
