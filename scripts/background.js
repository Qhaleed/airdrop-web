const navbar = document.getElementById('navbar');

window.onscroll = function (){
    scrollFuncntion()
}

function scrollFuncntion () {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        navbar.style.background = " linear-gradient(115deg, #262935, #b30938)";
        navbar.style.backgroundPosition = "100%";
    }
    else  {
        navbar.style.background = " linear-gradient(115deg, #b30938, #262935)";
        navbar.style.transition = "1000ms";
    }
}
