$(document).ready(function() {
    
    // code to make the hidden introdcution text appear and disappear //
    
    $(".personal-statemet .read-more-target").click(function() {
        if($(this).text() === "...read more") {
            $(this).text("read less");
            $(".read-more-text").css("display", "inline");
        } else {
            $(this).text("...read more");
            $(".read-more-text").css("display", "none");
        }
    });

    // end of code to make the hidden introdcution text appear and disappear //
});