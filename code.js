// function for countdownTimer, this is the function for the start button. 
function start(){
    console.log("start() function started");
//the variable for currTime is set to 10. 
    var currTime = 10; 
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
// setTimeout() method is used to delay per millisecond. 
//9
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
//8
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
//7
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
//6
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
//5
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
//4
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
//3
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
//2
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
//1
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)

//0
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = "BlastOff !!!";
        console.log(currTime);
    }, 10000)

}

//function to play craps. 
function playCraps(){
    console.log("playCraps()started");
    //generate variables, die1, die2, sum
    var die1;
    var die2;
    var sum;

    /*Generates random numbers, and returns the largest integer. 
    With Math.floor, numbers look cleaner. */
    die1 = Math.floor(Math.random() * 6 + 1);
    //prints into the console of the browser.
    console.log(die1);
    document.getElementById("die1Rolling").innerHTML = "Die1 is: " + die1
    //Generates random numbers, and returns the largest integer.
    die2 = Math.floor(Math.random() * 6 + 1);
    console.log(die2);
    document.getElementById("die2Rolling").innerHTML = "Die2 is: " + die2
    //determines the sum of the two dice and saves them in 'sum'.
    sum = die1 + die2;
    console.log("sum is equal to" + " " + sum);
    document.getElementById("sumOfDice").innerHTML = "Sum is equal to: " + sum
    //the conditional statements are used to follow the rules of the craps game.
    //the logical OR|| is used based on the rules of the game. 
    if(sum == 7 || sum == 11){
        //tells the status in crapsStatus.
        document.getElementById("crapsStatus").innerHTML = "Craps!! You lost!"
        //the logical AND && is used based on the rules of the game. 
    } else if (die1 == die2 && die1%2 == 0){
        //tells the status in crapsStatus.
        document.getElementById("crapsStatus").innerHTML = "You won the ticket!"
    }
    else{
        //tells the status in crapsStatus.
        document.getElementById("crapsStatus").innerHTML = "You did not lose!"
    }

   


}