"use strict";

// var aboutMe = new Object (); ///NEW OBJECT
//
//
//     var thisIsMe = {   /// OBJECT literals/// unlike functions the curly braces stroes information vs fucntions {} the execute code
//         city: `Detroit`,
//         age: `37`,
//         sex: `Male`,
//         status: `Divorced`,
//         hobbies: `Working Out`,
//         aboutMe["city"] = "Detroit"
//     };
//     console.log(thisIsMe);
//
//     var aboutMe = new Object (); /// dot notation nameOfObject.nameOfProperty = Value
//     console.log(aboutMe)
//
//     aboutMe.city = `Detroit`;
//     aboutMe.age = `37`;
//
//     // / BRACKET NOTATION BRACKETS AND QUOTES
//
//     var aboutMe = {};
//
//     aboutMe["city"] = "Detroit"
//     aboutMe["age"] = "37"
//     aboutMe["sex"] = "Male"
//     console.log(aboutMe)
//
//     aboutMe.age = 36
//     aboutMe.city = "Detroit"
//
//
// let bracketObj = {
//         cat: "meow",
//     dog: "woof"
// };
//     let dog = "cat";
//     let sound = bracketObj["cat"];
//     console.log(sound);
// //
// // TODO: create an empty 'yourFaveSportsTeam' object using object literals
// // TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// // TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// // TODO: write a function that returns the sport and numOfPlayers from your 'team' object
//
// //
//     var yourFaveSportsTeam = {};
//         yourFaveSportsTeam.city = "Detroit"
//         yourFaveSportsTeam.coach = "Dewayne Casey"
//         yourFaveSportsTeam.sport = "Basketball"
//
//
//         yourFaveSportsTeam["numOfPlayers"] = "18"
//     yourFaveSportsTeam["numOfChampsWon"] = "3"
//     yourFaveSportsTeam["isBestTeam"] = "Yes"
//
//     function team(obj){
//             return [obj.numOfPlayers, obj.numOfChampsWon];
//     }
//     console.log(yourFaveSportsTeam.city);
//     console.log(yourFaveSportsTeam["coach"]);
//
//     yourFaveSportsTeam.coach = "Casey"; //// REPLACING MATT NAGY WITH NAGY
//     console.log(yourFaveSportsTeam)
//
//     var laptop = {
//         color: "space gray",
//         make: "mac",
//         shutDown: function (){
//             return "laptop is shutting down";
//         }
//     }
//
//     console.log(laptop.shutDown())
// laptop.turnOn = function(){
//         return "laptop is now starting";
// }
//     console.log(laptop);

/** Mini Exercises */
/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
      isOpen, ranking, yearOpened), as
      well as, information about at least 5 different animals (think nested objects). For each
      Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
       livingPlace). Each animal must also contain a method that returns the sound of that
        animal using the THIS keyword.
       hint: Each animal should have at least 5 properties (one of them being animalSound)

//
//  */
// var zoo = [{
//     name: "Detroit Zoo",
//     city: "Detroit",
//     isOpen: "Yes",
//     Ranking: "12th",
//     yearOpened: "1883",},
//
//     {
//         hasFur: "Yes",
//         isMammal: "Yes",
//         canFly: "No",
//         animalSound: "Growl",
//         livingPlace: "Forests",
//
//     },
//     {
//         hasFur: "Yes",
//         isMammal: "Yes",
//         canFly: "No",
//         animalSound: "Ring_ding_ding_ding_ding_er_inge_ding",
//         livingPlace: "Forests",},
//
//     {
//
//
//     }
// ];
//
//
// console.log(zoo);
//
//
// var random = Math.random();
// console.log(random);
//
// var fixed = random.toFixed(3);
// console.log(fixed);
//
// var inBetween = Math.floor(Math.random() * (40 - 20 + 1) + 20);
// console.log(inBetween);

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 //      */
// var firstLast = [
//         { firstName: "Corey",
//             lastName: "Shaw",}
//     ]
//
//     var person = firstLast
//
//     function
//
//     console.log(sayHello(firstLast) + person)





/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
    {name: 'Corey', amount: 180},
    {name: 'Daniel', amount: 250},
    {name: 'Brandon', amount: 320}
];

shoppers.forEach(offer);

function offer(shopper){
    var discount = 0;
    var newTotal = 0;

    console.log('${shopper.name} has a bill of $${shopper.amount}.');

    if (shopper.amount > 200){
        discount = shopper.amount * 0.12;
        newTotal = shopper.amount - discount;
        console.log('after the discount ${shopper.name} total is $${newTotal}')
    }
}

/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
var books = [
    {title: "Life of Pi", author: { firstName:"Yann", lastName:"Martel"}},
    {title: "Cujo", author:{firstName:"Stephen", lastName: "King"}},
    {title: "The Dark Tower", author:{firstName:"Stephen", lastName: "King"}},
    {title: "Christine", author:{firstName:"Stephen", lastName: "King"}},
    {title: "Bag of Bones", author:{firstName:"Stephen", lastName: "King"}},
]

console.log(books[0].title);
console.log(books[0].author.firstName);
console.log(books[0].author.lastName);



/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
function booksILike(obj){
    for(var i = 0; i < obj.length; i++){

        console.log(`Book # ${i + 1}`);
        console.log(`Title: ${obj[i].title}`);
        console.log(`Author: ${obj[i].author.firstName} ${obj[i].author.lastName}`)
        console.log("--------------")
    }
}
booksILike(books)