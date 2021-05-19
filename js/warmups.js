"use strict";

function lastString(input) {
    return
};


// May 6th, 2021

function remainder(number, divisor) {
    return number % divisor;
}

console.log(remainder(9, 4))

// 5/13/2021 Javascript warmup
// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *


// function showStars(str) {
//
//     for( var x = 1; x <= 5; x++){
//
//         console.log(placeholder + " x " + x + " = " +(placeholder * x));
//     }

// }
//
// //
// function secondToLast(array) {
//     var dataType = [1, "one"];
//
// }
// console.log(dataType)


// Array Example
//Reach into the paintbox and retrieve the orange tubeOfPaint with a serialNumber of 7783
var paintBox = {
    tubesOfPaint: [
        //tube of paint item/ collection of paint in the paintbox.
        {name: "Red", serialNumber: 5678},
        {name: "Orange", serialNumber: 7783},
        {name: "Yellow", serialNumber: 2345},
    ],
    paintBrushes: [
        {type: "Small Brush", bristleCount: 10},
        {type: "Medium Brush", bristleCount: 20},
        {type: "Large Brush", bristleCount: 30},
        {type: "Xtra-Large Brush", bristleCount: 50}
    ],

}
var tubeOfOrangePaint = paintBox.tubesOfPaint[1].serialNumber;
console.log(tubeOfOrangePaint)

//
var tubeOfPaint = paintBox.tubesOfPaint[2];
//                                           Bracket Notation                                  Dot Notation
console.log("Selected Tube Of Paint " + tubeOfPaint["name"] + " with serialnumber of " + tubeOfPaint.serialNumber)

// var selectedPaintBrush = paintBox.paintBrushes[1]
console.log("Selected Brush is " + paintBox.paintBrushes[2]["type"] + " with bristle count of " + paintBox.paintBrushes[2].bristleCount)
//For Loop Exmaple
var paintBrushes = paintBox.paintBrushes;
for (var i = 0; i < paintBrushes.length; i++) {
    // This variable references this item in the Array at the specified index. i represents the index
    var  paintBrush = paintBrushes[i];
    console.log("Selected Brush is " + paintBrush["type"] + " with bristle count of " + paintBrush.bristleCount)


}
//05-17-2021 8:14pm
//For Loop Examples.
//Make a For Loop that prints out a number 1-10
var numberZero = 0;
for (var i = 1; i <= 10 ; i++ ) {
    console.log(i)
}
// //Make a For Loop that prints out only odd numbers
// var oddNumber = ;
for (var i = 0; i <= 10; i++) {
    if(i % 2 === 1){
        console.log(i)
    }
}
//    Make a For Loop that prints out only even numbers
for (var i = 1; i <= 10; i++) {
    if(i % 2 === 0){
        console.log(i)
    }
}
//  Make a For Loop that prints out numbers 1-50

for (let i = 1; i <= 50; i++) {
    console.log(i)
}
//05-18-2021
//Make a Number Tree starting at one
//Make a For Loop that increases by line

//
// function numberTree (= {
// 50; i++) {
// //
// function numberTree (tree) {
//             for (let i = 0; i > tree; i++) {
//                 let number = 0;
//     }
// }
// //

function generatePyramid() {
    let totalNumberofRows = 10;
    let output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        let j = i.toString()
        output += j.repeat(i)
        output += '\n';
    }
console.log(i)
}

