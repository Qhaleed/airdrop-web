const navbar = document.getElementById('navbar');
const mobileWidth = 768;
window.onscroll = function (){
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        navbar.style.background = "linear-gradient(115deg, #262935, #b30938)";
        if (window.innerWidth > mobileWidth) { // Check if it's not a mobile device
          
            
        
        } 
    } else {
        navbar.style.background = "linear-gradient(115deg, #b30938, #262935)";
        navbar.style.transition = "1000ms";
        if (window.innerWidth > mobileWidth) { // Check if it's not a mobile device
            
        }
    }
}