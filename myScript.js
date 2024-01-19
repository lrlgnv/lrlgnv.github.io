window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > ((window.innerHeight)*0.2) || document.documentElement.scrollTop > ((window.innerHeight)*0.2)){
        document.getElementById("NavBar").className = "solid";
    }
    else{
        document.getElementById("NavBar").className = "";
    }
}