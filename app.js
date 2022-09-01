'use strict';
// 
// function myFunctionName(parameters){code to execute}
// this is callng the function by its name. 
// if you dont use () it will not call it by name
// parameters are optional information for the function

let message;
function newGreetings(){
    let usersName = prompt('what is your name?');
    if (usersName == 'Elias') {
        message = 'hello there';
    }
    else {
        let stranger = prompt('hi ' + usersName + ' do you like to travel?');
        if (stranger != 'yes') {
            message ='Hi ' + usersName + ' why are you here?';
        }
        else {
            message = 'Hi ' + usersName + " welcome traveler";
        }

    }

    document.write(message);
}




// without return nothing will come back. the function will still work 
// but will not output anything. if you only want to store data dont use return
// return is the last thing a function will do no code after return inside a function will work


