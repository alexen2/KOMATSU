$(document).ready(function() {
  $('.header__btn').click(function() {
    $('.header__mobile').toggleClass('header__mobile--open');
    $('body').toggleClass('overflow-heidden ');
  });

  $('.header-mobile__btn').click(function() {
    $('.header__mobile').toggleClass('header__mobile--open');
    $('body').toggleClass('overflow-heidden ');
  });
});

$(window).resize(function(){
  let st = $(window).width();

  menuDesktopShow(st);
});

function menuDesktopShow(st) {
  if(st > 991) {
    if($('.overflow-heidden').length) {
      $('.header__mobile').toggleClass('header__mobile--open');
      $('body').toggleClass('overflow-heidden');
    }
  }
};