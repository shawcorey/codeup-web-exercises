(function (){
    "use strict";
    // TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

    var days = ["Monday", "Tuesday", "Wednesday"];
    var missingDays = ["Thursday", "Friday", "Saturday", "Sunday"];

    missingDays.forEach(function(day ){
        days.push(day);
    });
    console.log(days);
    console.log(missingDays);



// TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array

    console.log('This is the current array for days ' + days);
    function daysOftheWeek(placeholder){
        console.log(`${placeholder}`)
        var newWeek = [];
        var arrayLength = daysOftheWeek.length;
        console.log(`Test parameters: ${placeholder}` )
        for (let i = 0; i < arrayLength; i++){
            newWeek.unshift( placeholder.pop() );
        };
        console.log(newWeek);
    }
    console.log(newWeek);

    daysOftheWeek(days);


})();