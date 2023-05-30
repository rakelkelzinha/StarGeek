const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("iemail");
const senha = document.getElementById("isenha");
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
            sessionStorage.setItem("logado", JSON.stringify(dados));
            mensagem.innerHTML="Logado";
            window.location.assign("catalogo.html")
            return true;
        }else{
            mensagem.innerHTML ="Senha ou E-mail Incorreto"
        }
    });
}