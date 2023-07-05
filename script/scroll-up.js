var scroller = document.querySelector(".scroll-up");

window.onscroll = function(){scrollFunction()};

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroller.style.display = "grid";
    }
    else {
        scroller.style.display = "none";
    }
}