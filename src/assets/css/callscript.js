$(document).ready(function(){
  $('button.mode-switch').click(function(){
    if (localStorage.getItem('theme_mode') == 'dark') {
      window.localStorage.setItem('theme_mode','ligh');
    } else {
      window.localStorage.setItem('theme_mode','dark');
    }
    $('body').toggleClass('dark');
  });
  
  $(".btn-close-right").click(function () {
    $(".right-side").removeClass("show");
    $(".expand-btn").addClass("show");
  });
  
  
  $(".expand-btn").click(function () {
    $(".right-side").addClass("show");
    $(this).removeClass("show");
  });

  if (localStorage.getItem('theme_mode') == 'dark') {
    $('body').addClass('dark');
  } else {
    $('body').removeClass('dark');
  }
});