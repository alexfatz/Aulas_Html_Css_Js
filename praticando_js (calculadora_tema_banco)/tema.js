let tema = localStorage.getItem("tema") || "escuro"


function mudarTema(first_start = false) {
    let header = document.querySelector("header")
    let main = document.querySelector("main")
    let footer = document.querySelector("footer")
    let img = document.querySelector("img")
    let h1 = document.querySelector("h1")
    let p_footer = footer.getElementsByTagName("p")[0]

    if (!first_start) {
        tema = tema == "escuro" ? "claro" : "escuro"
        localStorage.setItem("tema", tema)
    }

    header.style.backgroundColor = tema == "escuro" ? "#747474" : "#e0e0e0"
    main.style.backgroundColor = tema == "escuro" ? "#616161" : "#f5f5f5"
    footer.style.backgroundColor = tema == "escuro" ? "#4f4f4f" : "#d6d6d6"
    img.src = tema == "escuro" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgc1ifLTcnNZlYqp48K9smqAEyvd7ErFqYMQ&s" : "https://images.vexels.com/media/users/3/145134/isolated/preview/46b65a02ff99e7bb4e84d4d3d627a729-icone-de-raios-nitidos-do-sol.png"
    img.alt = tema == "escuro" ? "logo tema escuro" : "logo tema claro"
    h1.style.color = tema == "escuro" ? "#f2f2f2" : "#3a3a3a"
    p_footer.style.color = tema == "escuro" ? "#cfcfcf" : "#5a5a5a"

}

window.onload = () => mudarTema(true)