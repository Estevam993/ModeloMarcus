var bola1_2 = document.getElementById("dot1-2");
var bola2_2 = document.getElementById("dot2-2");

var page1 = document.getElementById("desafioBox1")
var page2= document.getElementById("desafioBox2")

var page1Style = window.getComputedStyle(page1);
var page2Style = window.getComputedStyle(page2)

function proximo2() {

    if (page1Style.getPropertyValue("display") === "flex") {
        page1.style.display = "none";
        page2.style.display = "flex";

        bola1_2.style.backgroundColor = "#9c9c9c";
        bola2_2.style.backgroundColor = "#666666";

    }
    else if (page2Style.getPropertyValue("display") === "flex") {
    page2.style.display = "none";
    page1.style.display = "flex";

    bola2_2.style.backgroundColor = "#9c9c9c";
    bola1_2.style.backgroundColor = "#666666";
    }
}
