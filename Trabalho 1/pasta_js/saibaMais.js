function MudarCorPagina() {
    const Seletor = document.getElementById("page-mode");
    const body = document.body;
    const headerLogin = document.querySelector(".headerLogin");
    

    if (Seletor.value === "customizado") {
        headerLogin.classList.add('modo-noturno'); // Aplicar classe ao cabeçalho principal
        headerLogin.classList.remove('modo-normal');
        body.classList.add('modo-noturno');
        body.classList.remove('modo-normal');

        
    } else if (Seletor.value === "normal") {
        headerLogin.classList.add('modo-normal'); // Aplicar classe ao cabeçalho principal
        headerLogin.classList.remove('modo-noturno');
        body.classList.add('modo-normal');
        body.classList.remove('modo-noturno');
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