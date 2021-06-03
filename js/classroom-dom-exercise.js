$("form").submit(function (event) {
    $("#post-container").text($("input").first().val());
    event.preventDefault();

});

$("#post-container").css( {
    "font-size": "64px",
    "color": "orange"
    }
);