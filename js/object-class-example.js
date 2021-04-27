"use strict";


var thePistons = new Object();
console.log(typeof thePistons);

//
var thePistons = {};
//
thePistons["city"] = "Detroit";
thePistons["wins"] = -40;
console.log(thePistons)
//
var thisisCorey = {
    name: "Corey",
    favefood: "Squid",
    age: "37",
    yrborn: 1983,
};
console.log(thisisCorey);
//
//
// TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// TODO: write a function that returns the sport and numOfPlayers from your 'team' object
var yourFaveSportsTeam = {};

yourFaveSportsTeam.city = "Detroit"
yourFaveSportsTeam.coach = "Dewayne Casey";
yourFaveSportsTeam.sport = "Basketball";
yourFaveSportsTeam.team = "Detroit Pistons";

console.log(yourFaveSportsTeam);

//
yourFaveSportsTeam["numOfPlayers"] = 18;
yourFaveSportsTeam["numOfChampsWon"] = 3;
yourFaveSportsTeam["isBestTeam"] = true;

console.log(yourFaveSportsTeam);

function sport (){
    return "numOfPlayers";

}
function teamData(obj){
    let data1 = obj.sport;
    let data2 = obj.numOfPlayers;

}
teamData(yourFaveSportsTeam)
console.log(yourFaveSportsTeam);
