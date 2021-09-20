$(document).ready(function() {
  
// changes the phone text to a phone number //

if($(document).width() >= 768) {
  $(".phone, .phone + p").hover(function() {
    $(".phone + p").text("0812726384");
    $(".phone + p").css({
      "text-shadow": "black 1px 1px",
      "font-weight": "bold",
      "padding-left": "15px"
    });
  }, function() {
    $(".phone + p").text("Phone");
    $(".phone + p").css({
      "text-shadow": "none",
      "font-weight": "normal",
      "padding-left": "0px"
    });
  });
}

// end of changing the phone text to a phone number //
});