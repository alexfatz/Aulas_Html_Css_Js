function coletar_respostas() {
    console.log("atualizando form")
    let p_gabarito = document.getElementById('p-gabarito')
    let p5 = document.getElementById("p5")
    let form = document.getElementById("form")
    /*1 - 2016 <br>
    3 - Abc123!@# <br>
    5 - Lewis <br>
    8 - Fazenda entre riachos <br> */

    p_gabarito.innerHTML = `
        <p>
            1 - 2016 <br>
            3 - Abc123!@# <br>
            ${p5.value == "Lewis" ? "&#x2705;" : "&#x274C;"} 5 - ${p5.value}<br>
            8 - Fazenda entre riachos <br>
        </p>
    `
}