function authenticate() {
    const campologin = document.getElementById("login");
    const camposenha = document.getElementById("senha");

    const valorlogin = campologin.value.trim();
    const valorsenha = camposenha.value.trim();

    if (valorlogin && valorsenha) {

        const user = {
            usuario: valorlogin,
            senha: valorsenha,
        };

        localStorage.setItem("user", JSON.stringify(user));

        window.location.href = "index.html";
    } else {
        alert("Informe os dados de autenticação.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is authenticated by looking in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const userLoginInfo = document.getElementById("user-login-info");
    const userPhoto = document.getElementById("user-photo");

    if (storedUser && storedUser.usuario) {
        // User is authenticated
        userLoginInfo.textContent = `Bem-vindo, ${storedUser.usuario}`;
    } else {
        // User is not authenticated
        userLoginInfo.textContent = "Usuário não autenticado";
    }
});

function MudarCorPagina() {
    const Seletor = document.getElementById("page-mode");
    const body = document.body;
    const headerLogin = document.querySelector(".headerLogin");
    const mainLogin = document.querySelector(".mainLogin");
    

    if (Seletor.value === "customizado") {
        headerLogin.classList.add('modo-noturno'); // Aplicar classe ao cabeçalho principal
        headerLogin.classList.remove('modo-normal');
        body.classList.add('modo-noturno');
        body.classList.remove('modo-normal');
        mainLogin.classList.add('modo-noturno'); // Aplicar classe ao cabeçalho principal
        mainLogin.classList.remove('modo-normal');

        
    } else if (Seletor.value === "normal") {
        headerLogin.classList.add('modo-normal'); // Aplicar classe ao cabeçalho principal
        headerLogin.classList.remove('modo-noturno');
        mainLogin.classList.add('modo-normal'); // Aplicar classe ao cabeçalho principal
        mainLogin.classList.remove('modo-noturno');
        body.classList.add('modo-normal');
        body.classList.remove('modo-noturno');
    }
}

