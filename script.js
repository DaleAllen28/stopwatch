//Create starting values for seconds and milliseconds
let seconds = 00;
let milliseconds = 00;

//store dom elements as variables
const outputSeconds = document.getElementById("second");
const outputMilliseconds = document.getElementById("millisecond");
const buttonStart = document.getElementById("btn-start");
const buttonStop = document.getElementById("btn-stop");
const buttonReset = document.getElementById("btn-reset");

//container for interval value
let Interval;
//Container for minute values. Create span for later appending
const minutes = document.createElement("Span");

buttonStart.addEventListener("click", () => {
    //Stop a running timer
    clearInterval(Interval);
    //Uses the setInterval function which allows defining the execution of the startTime function every ten milliseconds
    Interval = setInterval(startTime, 10);
});


buttonStop.addEventListener("click",() => {
    clearInterval(Interval);
});

buttonReset.addEventListener("click", () => {
    //Stops times
    clearInterval(Interval);
    //sets values to 00
    milliseconds = "00";
    seconds = "00";

    //Uses the DOM to set the below elements to the above values
    outputMilliseconds.innerHTML = milliseconds;
    outputSeconds.innerHTML = seconds;
});

const startTime = () => {
    //Interval milliseconds
    milliseconds++;
    //checks if millisecond interval is less than 9, if so apply the value to the innerHTML
    if (milliseconds <= 9) {
        outputMilliseconds.innerHTML = "0" + milliseconds;
    };

    //checks if millisecond value is greater than 9, if so apply to innerHTML
    if (milliseconds > 9) {
        outputMilliseconds.innerHTML = milliseconds;
    };

    if (milliseconds > 99) {
        seconds ++;
        outputSeconds.innerHTML = "0" + seconds;
        milliseconds = 0;
        outputMilliseconds.innerHTML = "0" + milliseconds;
    };

    if (seconds > 9) {
        outputSeconds.innerHTML = seconds;
    };

    if (seconds == 60) {
        
    }
};
