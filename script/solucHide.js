var texto1 = document.getElementById("texto1")
var texto2 = document.getElementById("texto2")
var texto3 = document.getElementById("texto3")

var midia = document.getElementById("midiaB")
var seo = document.getElementById("seoB")
var web = document.getElementById("webB")

var dMidia = window.getComputedStyle(midia)
var dSeo = window.getComputedStyle(seo)
var dWeb = window.getComputedStyle(web)

function textoSeo(){
    texto1.style.display = "none"
    texto2.style.display = "flex"
    texto3.style.display = "none"

    if(texto2.style.display === "flex"){
        midia.style.borderBottomColor = "#FFAA00"
        seo.style.borderBottomColor = "#172F63"
        web.style.borderBottomColor = "#FFAA00"
    }
}

function textoMidia(){
    texto1.style.display = "flex"
    texto2.style.display = "none"
    texto3.style.display = "none"

    if(texto1.style.display === "flex"){
        midia.style.borderBottomColor = "#172F63"
        seo.style.borderBottomColor = "#FFAA00"
        web.style.borderBottomColor = "#FFAA00"
    }
}

function textoWeb(){
    texto1.style.display = "none"
    texto2.style.display = "none"
    texto3.style.display = "flex"

    if(texto3.style.display === "flex"){
        midia.style.borderBottomColor = "#FFAA00"
        seo.style.borderBottomColor = "#FFAA00"
        web.style.borderBottomColor = "#172F63"
    }
}