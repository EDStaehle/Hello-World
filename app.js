'use strict';
// 
// function myFunctionName(parameters){code to execute}
// this is callng the function by its name. 
// if you dont use () it will not call it by name
// parameters are optional information for the function

let message;
function newGreetings() {
    let usersName = prompt('what is your name?');
    if (usersName == 'Elias') {
        message = 'hello there ' + usersName;
    }
    else {
        let stranger = prompt('hi ' + usersName + ' do you like to travel?');
        if (stranger != 'yes') {
            message = 'Hi ' + usersName + ' why are you here?';
        }
        else {
            message = 'Hi ' + usersName + " welcome traveler";
        }

    }

    document.write(message);
    return usersName;
}
function quizQuestion() {
    let userAns = prompt('Where is the Midnight Sunset located?')
    while (userAns != 'Iceland') {
        userAns = prompt('wrong')
        //  if (userAns != 'iceland') {
        //      alert('wrong');
        //      continue;
    } if (userAns === 'Iceland') {
        alert('yes! next question');

    }

    let userAns2 = prompt('Where is the Giants Causeway?')
    while (userAns2 != 'Ireland') {
        userAns2 = prompt('wrong')
    } if (userAns2 === 'Ireland') {
        alert('yes! next question');
    }

    let userAns3 = prompt('Where are the Marble caves?')
    while (userAns3 != 'Patagonia') {
        userAns3 = prompt('wrong');

    } if (userAns3 === 'Patagonia') {
        alert('yes! Good Job :)');
    }
}
function displayRating() {
    let array = ['1,','2','3','4','5','6','7','8','9','10'];
    let imgoutput = '';
    let rating = prompt('how would you rate your experience here? 1-10 :)');
    if(rating <= 10 && rating >=1){
        
        console.log(array);
    for(let i = 0; i < rating; i++){
         imgoutput += "<img class = 'ratpic' src='ratpic.jpg'>";
        // document.getElementById("<img id = 'ratpic' src='ratpic.jpg'>")
    }
}
else{
    alert('that was not a choice');
    return displayRating();
    
   
}
    document.write(imgoutput);
    
   
}






// / without return nothing will come back. the function will still work 
// / but will not output anything. if you only want to store data dont use return
// / return is the last thing a function will do no code after return inside a function will work
