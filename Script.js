function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    // Esconder todo o conteúdo das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover a classe "active" de todos os links
    tablinks = document.getElementsByTagName("a");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar a aba atual
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}
