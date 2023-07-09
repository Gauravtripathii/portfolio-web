

window.onscroll = function(){scrollFunction()};


var header = document.querySelector(".header");
var nav = document.querySelector(".nav");
var icon = document.querySelector(".icon");
const scrollFunctionHeader = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.height = "0";
        nav.style.fontSize = "0";
        icon.style.fontSize = "0";
    }
    else {
        header.style.height = "70px";
        nav.style.fontSize = "1.33rem";
        icon.style.fontSize = "3rem";
    }
}


var scroller = document.querySelector(".scroll-up");
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroller.style.display = "grid";
    }
    else {
        scroller.style.display = "none";
    }
    scrollFunctionHeader();
}