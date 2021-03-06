(function () {
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';

    function addClickEvents(elementsToBind, color1, color2) {
        let handlerBlueBckGnd = function () {
            elementsToBind.css('background-color', color1);
            $(this).css('background-color', color2);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }

    addClickEvents(jqElements, backgroundReset, backgroundBlue);
    addClickEvents($(".card"), "", "red");
    //make sure the DOM is loaded first
    document.addEventListener("DOMContentLoaded", function () {
        addListeners();
    });

    //parent method for adding all listeners
    function addListeners() {
        //get the elements to add listener and change image
        let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
        addEvents(cardContainers, 'images/jazz-music-rubber-duck.jpg', 'mouseover');
        addEvents(cardContainers, 'images/question.png', 'mouseout');
    }

    //add mouseover/mouseout events to all selected elements
    function addEvents(cardContainers, imgPath, listenerType) {
        cardContainers.forEach((cc) => {
            let card = cc;
            //create listener which will call function change the image
            let listener = function (event) {
                let cardImg = card.querySelector(".card .card-img-top");
                changeImage(cardImg, imgPath);
            };
            cc.addEventListener(listenerType, listener);
        });
    }

    //actual function to swap images
    function changeImage(card, imgPath) {
        card.setAttribute('src', imgPath);
    }

//    1. Declare a variable that selects all card container
//    2. Once the variable is declared; create a hover event for said variable. Will take two inputs
//    3. Find the function

    let allContainers = $('col-md-3')

    let hoverIn = function () {
        $().attr('src', "images/jazz-music-rubber-duck.jpg")
    };
    let hoverOut = function () {
        $(this).attr("src", "images/question.png")
    };
    allContainers.hover(hoverIn, hoverOut);

    //When a user clicks the submit button, the background color changes to red
    $(document).ready(function () {
        $('#submitBtn').click(function () {
            $("#override-bootstrap").css("background-color", "red");
        })
        // When a user clicks a .card-text element, change its background color to Red
    });
    // When a user clicks; change background to red
    $(document).ready(function () {
        $('.card-text').click(function () {
            $(this).css("background-color", "red");
        })

    });
    // Create a button that reloads on button click
    $(document).ready(function () {
        $('.resetBtn').click(function () {
            location.reload()
        })

    });
    // Double the font size on click
    $(document).ready(function () {
        $('#main-title').click(function () {
            $(this).css('font-size', "12")
        })
    })
})();

