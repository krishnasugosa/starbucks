const minum1 = document.getElementById("minum1");
const minum2 = document.getElementById("minum2");
const minum3 = document.getElementById("minum3");
const minumIMG = document.getElementById("minum-image");
const buletan = document.getElementById("buletan");
const togle = document.getElementById("nav-sy");
const togle2 = document.getElementById("nav-sd")
const posisiIMG = document.getElementById("posisi-imgho");

togle.onclick = function(){
    togle.style.display = "none"
    togle2.style.display = "block"
    posisiIMG.style.top = 0 + "px"
    posisiIMG.style.transition = "1s ease-in"
}

togle2.onclick = function(){
    togle.style.display = "block"
    togle2.style.display = "none"
    posisiIMG.style.top = -84 + "px"
    posisiIMG.style.transition = "1s ease-in"
}



minum1.onmouseenter = function(){
    minum1.style.transform = "scale(2)"
    minum1.style.transition = "2s ease"
}

minum2.onmouseenter = function(){
    minum2.style.transform = "scale(2)"
    minum2.style.transition = "2s ease"
}

minum3.onmouseenter = function(){
    minum3.style.transform = "scale(2)"
    minum3.style.transition = "2s ease"
}


minum1.onmouseleave = function(){
    minum1.style.transform = "scale(1)"
    minum1.style.transition = "2s ease"
}

minum2.onmouseleave = function(){
    minum2.style.transform = "scale(1)"
    minum2.style.transition = "2s ease"
}

minum3.onmouseleave = function(){
    minum3.style.transform = "scale(1)"
    minum3.style.transition = "2s ease"
}

minum1.onclick = function(){
    minumIMG.src = "minum1.png"
    buletan.style.backgroundColor = "green"
    buletan.style.transition = "2s ease"
}

minum2.onclick = function(){
    minumIMG.src = "minum2.png"
    buletan.style.backgroundColor = "pink"
    buletan.style.transition = "2s ease"
}

minum3.onclick = function(){
    minumIMG.src = "minum3.png"
    buletan.style.backgroundColor = "purple"
    buletan.style.transition = "2s ease"
}