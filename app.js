'use strict';


let message;
let usersName = prompt('what is your name?');
message;
if (usersName == 'Elias') {
    message = 'hello there';
}
else {
    let stranger = prompt('hi ' + usersName + ' do you like to travel?');
    if (stranger != 'yes') {
        message = 'why are you here?';
    }
    else {
        message = "welcome traveler";
    }

}

document.write(message);

