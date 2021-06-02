// $("#p-tag").hide();



$(".li").css('font-size', '20px');

$("h1", "p", "li",).css();
$("li").click(function(){
    alert("Whats Good")
    $(this).css({
        "font-size": "20px",
        "list-style": "none",
    })
});

$("h1").dblclick(function(){
    alert("You see me?");
    $(this).css("font-size", "18px");
});

