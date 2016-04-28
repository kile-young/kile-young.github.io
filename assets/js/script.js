$(document).ready(function() {
  
$('#carousel-next').click(function() {
  var marginL = parseInt($('#carousel').css('margin-left').replace("px",""));
  if (marginL == 3720) {
    return false;
  } else {
    $('#carousel').css('margin-left', marginL-1080);
  }
})

$('#carousel-prev').click(function() {
  var marginL = parseInt($('#carousel').css('margin-left').replace("px",""));
  if (marginL == 0) {
    return false;
  } else {
    $('#carousel').css('margin-left', marginL+1080);
  }
})
  

});