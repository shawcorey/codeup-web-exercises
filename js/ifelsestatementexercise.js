"usestrict";
// TODO: MINI EXERCISE -> IF / ELSE IF / ELSE
//  -> Let's augment our getToDestination() function
//  -> Create a function called canGetRideshare() which will *RETURN* a boolean
//      -> It will determine if there are drivers nearby and the person has enough money for the ride
//  -> Now, when you call getToDestination(), your canGetRideshare parameter will be an argument that is
//  -> fulfilled by a call to canGetRideshare() (yes, I know, the whole parameter name vs argument name thing)
//  -> Be sure to log to the user if they can or cannot get a rideshare
// TODO: BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
//  -> Consider this: What if mileage determined:
//      -> If the rider has enough funds?
//      -> If there is a driver close enough to service the rider?


function getToDestination(age, isInsured, hasCar, canGetRideshare){
    var isLicensed = age >= 16;
    var isLegalDriver = isLicensed && isInsured;
    if (isLegalDriver && hasCar){
        console.log("Let's get in and go!");
    } else if(!isLegalDriver && canGetRideshare){
        console.log("Let's call a rideshare!");
    } else{
        console.log("I think my friend can give us a lift!");
    }
}
function canGetRideshare(){
    return
     console.log("canGetRideshare");
}

function getHeartRateRange(){
    var age = 26;
    var heartRange;
    switch (age){
        case age >= 20 && age < 30:
            heartRange = "100-170";
            console.log("This condition was met");
            break;
        case age >= 30 && age < 35:
            heartRange = "95-162";
            break;
        case age >= 35 && age < 40:
            heartRange = "93-157";
            break;
        case age >= 40 && age < 45:
            heartRange = "90-153";
            break;
        case age >= 45 && age < 50:
            heartRange = "88-149";
            break;
        case age >= 50 && age < 55:
            heartRange = "83-140";
            break;
        case age >= 55 && age < 60:
            heartRange = "80-136";
            break;
        case age >= 60 && age < 65:
            heartRange = "78-132";
            break;
        case age >= 65 && age < 70:
            heartRange = "75-128";
            break;
        default:
            heartRange = "Age outside of range. Cannot determine ideal heart rate";
            break;
    }
    return heartRange;
}
function showHeartRateRange(heartRange){
    console.log("Your ideal heart rate range (in bpm) is: " + heartRange);
}
showHeartRateRange(getHeartRateRange());
