
let el = document.querySelector('.menu-home');
let pos_scoll= document.scrollingElement.scrollTop;
$(document).ready(function(){

    let getMenu =  document.querySelector(".menu-home");
    let sticky = getMenu.offsetTop;
   
    if (pos_scoll > 0) {
      getMenu.classList.add("display-bg");
    }
    window.onscroll = function() {menuscrolll()};
    function menuscrolll() {
        if (window.pageYOffset > sticky) {
            getMenu.classList.add("display-bg");
        } else {
        
                getMenu.classList.remove("display-bg");
        }
    }

});

//------------------ slide --------------------------
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 800,  
      },
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

//-----------------progess bar ---------------------
var elem = document.querySelectorAll(".progress-bar-line");
function ProgressBar(el, width){
    $(el).animate(
        {width: width}, 
        {duration: 300 }       
    );    
}
    let first_scroll = 0;
    let detect = document.getElementById('detect_scroll');
    let pos_detect =detect.offsetTop; // chung
     $(document).on('scroll', function() {
         let incre = window.pageYOffset + 300;
        console.log('fail :'+window.pageYOffset + " -- tằng :" + incre);
        console.log(pos_detect);
        if (incre >= pos_detect)
        {
                        first_scroll++;
                    if(first_scroll ==1)
                    {
                        $(elem).each(function(i){
                                    var el = elem[i];
                                    ProgressBar(elem[i], $(this).data("width")) 
                                });
                    }
        }
    });
    



//-------------- menu mobile -------------------
function close_overplay()
{
    $(".Mobile_slide_menu").toggleClass('slidedown');
    $(".overplay").toggleClass('overplay-block');
}
function call_Menu()
{
    $(".Mobile_slide_menu").toggleClass('slidedown');
    $(".overplay").toggleClass('overplay-block');
}
$(window).resize(function() {
    Menu_Effect();
});
$(document).ready(function(){
    Menu_Effect();
});

function Menu_Effect()
{
    var width = $(window).width();

    if (width < 892) {

        $("#Mobile_menu").css('display','block');
        $("#window_menu").css('display','none');
        $(".bar_menu_mobile").css('display','inline-block');
    } else {
        $("#Mobile_menu").css('display','none');
        $("#window_menu").css('display','block');
        $(".bar_menu_mobile").css('display','none');
    }
}