$(function(){
  $('#Container').mixItUp();
});

/*bottom nav shows after scroll*/

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('.navbar-fixed-bottom').fadeIn();
  } else {
    $('.navbar-fixed-bottom').fadeOut();
  }
});
