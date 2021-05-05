"use strict";

function getSquare(input) {
    if(isNaN(Math.pow(input, 2))) {
        return false;
    } else {
        return(Math.pow(input, 2));
    }
    console.log(getSquare())

//

function getReverse(string) {
    if (typeof string === "string") {
        return string.split("").reverse().join("");
    } else {
        return false;
    }


}

//

function multiplySquares(input1, input2) {
    if (input1 === null || input2 === null || isNaN(Number(input1)) || isNaN(input2)) {
        return false;
    } else {
        return (Math.pow(input2, 2) * Math.pow(input1, 2));
    }
    console.log(multiplySquares('cat', 2))
}

//
function addTo(input) {
    return

}

//

function subtractFrom(input1) {
    if (isNaN(parseInt(input1))) {
        return false
    }
    input1 -= 3;
    return input1;
}


console.log(subtractFrom(1))

//
function getLowestNumber(input) {
    return
}

//

function isAString(input) {
    return
}