

$(document).ready(function(){

    let getMenu =  document.querySelector(".menu-home");
  
    console.log(getMenu);
window.onscroll = function() {menuscrolll()};

function menuscrolll() {
    if (window.pageYOffset > 5) {
            getMenu.classList.add("display-bg");
    } else {
      
        // $('.display-bg').animate({height: '250px'}).fadeTo("slow", 0.0);
        setTimeout(function(){
             getMenu.classList.remove("display-bg");
        },700);
       
    }
}

});
