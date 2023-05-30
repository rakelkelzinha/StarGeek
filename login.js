const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById ("formulario")

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    dados.forEach((elementO) => {
        if (elementO.email == email.value && elementO.senha == senha.value) {
            evento.preventDefault();
            let dados = JSON.parse(sessionStorage.getItem("logado"))||[];
            dados.push(
                {
                    email:email.value
                }
            )
            sessionStorage.setItem("loagado", JSON.stringify(dados));
            mensagem.innerHTML="Logado";
            return true;
        }else{
            mensagem.innerHTML ="Senha ou E-mail Incorreto"
        }
    });
}