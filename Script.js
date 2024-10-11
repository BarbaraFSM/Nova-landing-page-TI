
    
        // Seleciona o elemento da div e o conteúdo
        document.getElementById("showHistory").addEventListener("click", function() {
            var content = document.getElementById("historyContent");
            // Alterna entre mostrar ou esconder o conteúdo
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    
