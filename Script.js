function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    // Esconder todo o conteúdo das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.add("hide"); // Adiciona a classe hide para esconder
    }

    // Remover a classe "active" de todos os links
    tablinks = document.getElementsByTagName("a");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostrar a aba atual
    document.getElementById(tabName).classList.remove("hide"); // Remove a classe hide para mostrar
    event.currentTarget.classList.add("active"); // Adiciona a classe active ao link clicado
}

// Exibir a aba "Nossa História" por padrão ao clicar no link
document.querySelector("nav a").click();
