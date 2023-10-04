function MudarCorPagina() {
    const Seletor = document.getElementById("page-mode");
    const body = document.body;
    const headerCadastro = document.querySelector(".headerCadastro"); // Selecione o elemento do cabeçalho principal
    const mainCadastro = document.querySelector(".mainCadastro");

    if (Seletor.value === "customizado") {
        body.classList.add('modo-noturno');
        body.classList.remove('modo-normal');
        headerCadastro.classList.add('modo-noturno'); // Aplicar classe ao cabeçalho principal
        headerCadastro.classList.remove('modo-normal');
        mainCadastro.classList.add('modo-noturno'); // Aplicar classe ao cabeçalho principal
        mainCadastro.classList.remove('modo-normal');
        
    } else if (Seletor.value === "normal") {
        body.classList.add('modo-normal');
        body.classList.remove('modo-noturno');
        headerCadastro.classList.add('modo-normal'); // Aplicar classe ao cabeçalho principal
        headerCadastro.classList.remove('modo-noturno');
        mainCadastro.classList.add('modo-normal'); // Aplicar classe ao cabeçalho principal
        mainCadastro.classList.remove('modo-noturno');
    }
}

            