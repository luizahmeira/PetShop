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
    const main = document.main
    const headerPrincipal = document.querySelector(".headerPrincipal");
    

    if (Seletor.value === "customizado") {
        headerPrincipal.classList.add('modo-noturno'); // Aplicar classe ao cabeçalho principal
        headerPrincipal.classList.remove('modo-normal');
        body.classList.add('modo-noturno');
        body.classList.remove('modo-normal');
        main.classList.add('modo-noturno');
        main.classList.remove('modo-normal');

        
    } else if (Seletor.value === "normal") {
        headerPrincipal.classList.add('modo-normal'); // Aplicar classe ao cabeçalho principal
        headerPrincipal.classList.remove('modo-noturno');
        body.classList.add('modo-normal');
        body.classList.remove('modo-noturno');
        main.classList.add('modo-normal');
        main.classList.remove('modo-noturno');
}}