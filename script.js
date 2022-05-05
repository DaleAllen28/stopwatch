// -- Create starting values for seconds and milliseconds --
let seconds = 00;
let milliseconds = 00;
let minutes = 00;
let hours = 00;

// -- Access and store dom elements as variables --
const outputSeconds = document.getElementById("second");
const outputMilliseconds = document.getElementById("millisecond");
const buttonStart = document.getElementById("btn-start");
const buttonStop = document.getElementById("btn-stop");
const buttonReset = document.getElementById("btn-reset");
const buttonLap = document.getElementById("btn-lap");
const outputMins = document.getElementById("minutes");
const outputHours = document.getElementById("hours");

// -- container for interval value --
let Interval;

//Container for minute values. Create span for later appending
const minColon = document.getElementById("minSep");
const hoursColon = document.getElementById("hourSep");

//Create list items


        //!!!REQUIRES FURTHER ACTION TO DISPLAY LAPS IN COLUMN ORDERED LIST (AS OPPOSED TO INLINE FIRST LI)!!!
const listItem = () => {
    const lapElement = document.createElement("LI");
    //store lap time as string in variable
    const lapTime = `${outputMins.innerHTML}:${outputSeconds.innerHTML}:${outputMilliseconds.innerHTML}`;
    //create a text node containing lapTime
    const lap = document.createTextNode(lapTime);
    //append the text node to the LI created in lapElement variable
    lapElement.appendChild(lap);

    //use DOM to append lap time to the html
    document.getElementById("laps").appendChild(lapElement);
};

// -- BUTTON EVENT LISTENERS --
buttonStart.addEventListener("click", () => {
    //Stop a running timer
    clearInterval(Interval);
    //Uses the setInterval function which allows defining the execution of the startTime function every ten milliseconds
    Interval = setInterval(startTime, 10);
});


buttonStop.addEventListener("click",() => {
    clearInterval(Interval);
});

// -- RESET BUTTON -- 
buttonReset.addEventListener("click", () => {
    //Stops times
    clearInterval(Interval);
    //sets values to 00
    milliseconds = "00";
    seconds = "00";
    minutes = "00";

    //Uses the DOM to set the below elements to the above values
    outputMins.innerHTML = minutes;
    outputMilliseconds.innerHTML = milliseconds;
    outputSeconds.innerHTML = seconds;

    outputMins.style.display = "none";
    colon.style.display = "none";
});

buttonLap.addEventListener("click",() => {
    listItem();
});

//Incriment Minutes
const minuteIncriment = () => {
    minutes = minutes + 1;
}

const startTime = () => {
    //Interval milliseconds
    milliseconds++;
    //checks if millisecond interval is less than 9, if so apply the value to the innerHTML
    if (milliseconds <= 9 && milliseconds > 0) {
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

    if (seconds >= 10) {
        outputSeconds.innerHTML = seconds;
    };

    if (seconds < 10 && seconds > 0) {
        outputSeconds.innerHTML = "0" + seconds;
    };

    //checks if seconds value is equal to 60, if so apply to innerHTML
    if (seconds === 60) {
        //increment minute
        minutes ++;
        outputMins.innerHTML = minutes;

        outputMins.style.display = "inline-flex";
        minColon.style.display = "inline-flex";
        
        seconds = 00;
        outputSeconds.innerHTML = seconds; 
        
        milliseconds = 00;
        outputMilliseconds.innerHTML = milliseconds;
    };

    /*if (minutes < 10 & minutes > 0) {
        outputMins.innerHTML = "0" + minutes;
    }*/
};


