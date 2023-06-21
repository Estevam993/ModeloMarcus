function arrowDown1(){
    var au = document.querySelector(".au1")
    var ad = document.querySelector(".ad1")
    if(ad.style.display=="block"){
        ad.style.display = 'none'
        au.style.display = 'block'

    }else{
        au.style.display = 'none'
        ad.style.display = 'block'
    }
    var textContainer = document.getElementById("textContainer");
    var hiddenText = document.getElementById("hiddenText");

    if (textContainer.style.maxHeight) {
        textContainer.style.maxHeight = null;
        hiddenText.style.opacity = 0;
    } else {
        textContainer.style.maxHeight = textContainer.scrollHeight + "px";
        hiddenText.style.opacity = 1;
    }
}
function arrowDown2(){
    var au = document.querySelector(".au2")
    var ad = document.querySelector(".ad2")
    if(ad.style.display=="block"){
        ad.style.display = 'none'
        au.style.display = 'block'
    }else{
        au.style.display = 'none'
        ad.style.display = 'block'
    }
    var textContainer = document.getElementById("textContainer1");
    var hiddenText = document.getElementById("hiddenText1");

    if (textContainer.style.maxHeight) {
        textContainer.style.maxHeight = null;
        hiddenText.style.opacity = 0;
    } else {
        textContainer.style.maxHeight = textContainer.scrollHeight + "px";
        hiddenText.style.opacity = 1;
    }
}
function arrowDown3(){
    var au = document.querySelector(".au3")
    var ad = document.querySelector(".ad3")
    if(ad.style.display=="block"){
        ad.style.display = 'none'
        au.style.display = 'block'
    }else{
        au.style.display = 'none'
        ad.style.display = 'block'
    }
    var textContainer = document.getElementById("textContainer2");
    var hiddenText = document.getElementById("hiddenText2");

    if (textContainer.style.maxHeight) {
        textContainer.style.maxHeight = null;
        hiddenText.style.opacity = 0;
    } else {
        textContainer.style.maxHeight = textContainer.scrollHeight + "px";
        hiddenText.style.opacity = 1;
    }
}