// $("h1").hide();
//
// $("#pink").css("background-color","pink");
//
// $("#orange").css("background-color", "orange");

//

$('#button').click(function() {
    $("h1").css({"backgroundColor" : "blue"});
});

$( "p" ).dblclick(function() {
    $(this).css("font-size", "18px");
});

let hoverIn = function () {
    $(this).css("color","red")
};
let hoverOut = function () {
    $(this).css("color","black")
};
$('p').hover(hoverIn, hoverOut);



