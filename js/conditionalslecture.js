(function(){
    "usestrict";

    // var hasCar;
    // if (hasCar){
    //    console.log("lets get in and go!");
    // }else{
    //    console.log("we need to call a rideshare!");

   // }
// )()


var age = 22;
var islicensed = age >= 16;
var isInsured = true;
var isLegalDriver = islicensed && isInsured;
var hasCar = true;

if (isLegalDriver && hasCar) {
    console.log("lets get in and go!");
}else{
    console.log("We need to call a rideshare!");
}

}
)()