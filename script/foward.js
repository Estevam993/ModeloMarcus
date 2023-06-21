var bola1 = document.getElementById("dot1");
var bola2 = document.getElementById("dot2");
var bola3 = document.getElementById("dot3");

var caixa1 = document.getElementById("caixa1");
var caixa2 = document.getElementById("caixa2");
var caixa3 = document.getElementById("caixa3");

var estiloCaixa1 = window.getComputedStyle(caixa1);
var estiloCaixa2 = window.getComputedStyle(caixa2)
var estiloCaixa3 = window.getComputedStyle(caixa3)

function proximo() {

    if (estiloCaixa1.getPropertyValue("display") === "block") {
        caixa1.style.display = "none";
        caixa2.style.display = "block";

        bola1.style.backgroundColor = "#9c9c9c";
        bola2.style.backgroundColor = "#666666";
    }
    else if (estiloCaixa2.getPropertyValue("display") === "block") {
    caixa2.style.display = "none";
    caixa3.style.display = "block";

    bola2.style.backgroundColor = "#9c9c9c";
    bola3.style.backgroundColor = "#666666";
    }
    else if (estiloCaixa3.getPropertyValue("display") === "block") {
        caixa3.style.display = "none";
        caixa1.style.display = "block";

        bola3.style.backgroundColor = "#9c9c9c";
        bola1.style.backgroundColor = "#666666";
    }
}
