$(document).ready(function(){
    $('.burger-menu').on('click', function(){
        $(this).toggleClass('burger-menu-active');
       
    });

    $('.burger-menu').on('click', function(e){
        $('.header__menu').toggleClass('header__menu-active');
      
     });
      
    // var menu = $('.menu__item');
    // console.log(menu);

    $('.menu__item').on('click', function(){ 
        if ($(this).find('span').hasClass('options-choice')) {
             $(this).find('span').toggleClass('active');
             
             } else {
                  $('.options-choice').removeClass('active');
                  $(this).find('span').addClass('active');
                // return false;
             }
       
     });


})
