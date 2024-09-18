const button = document.querySelector("#btn");

const LoginSenha = () => {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const resultado = document.getElementById("result");

    if (input1 == "gabriel" && input2 == "12345") {
        resultado.innerHTML = "senha correta!";

    } else if (input1 == "" || input2 == "") {
        resultado.innerHTML = "ESPAÇO VAZIO!";

    } else {
        resultado.innerHTML = "senha incorreta!";
    }
};

button.addEventListener("click", LoginSenha);
