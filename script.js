// -- Create starting values for seconds and milliseconds --
let seconds = 00;
let milliseconds = 00;
let minutes = 00;

// -- Access and store dom elements as variables --
const outputSeconds = document.getElementById("second");
const outputMilliseconds = document.getElementById("millisecond");
const buttonStart = document.getElementById("btn-start");
const buttonStop = document.getElementById("btn-stop");
const buttonReset = document.getElementById("btn-reset");
const buttonLap = document.getElementById("btn-lap");

// -- container for interval value --
let Interval;

//Container for minute values. Create span for later appending
const colon = document.getElementById("minSep");

// --Create new elements/textNodes and store in variables--
const minuteElement = document.createElement("Span");
const minutesStart = document.createTextNode(minutes);

//Create list items


        //!!!REQUIRES FURTHER ACTION TO DISPLAY LAPS IN COLUMN ORDERED LIST (AS OPPOSED TO INLINE FIRST LI)!!!
const listItem = () => {
    const lapElement = document.createElement("LI");
    //store lap time as string in variable
    const lapTime = `${minutes}:${seconds}:${milliseconds}`;
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

    //Uses the DOM to set the below elements to the above values
    outputMilliseconds.innerHTML = milliseconds;
    outputSeconds.innerHTML = seconds;

    const minsVal = document.getElementById("minutes")
    //Remove minutes values from DOM if minutes have been displayed -!!NOT FUNCTIONING CURRENTLY!!-
    if(document.getElementById("clock").contains(minsVal)) {
        minsVal.remove();
    }
});

buttonLap.addEventListener("click",() => {
    //NOW STORED IN LISTITEM VARIABLE
    /*const lapTime = `${minutes}:${seconds}:${milliseconds}`;
    const lap = document.createTextNode(lapTime);
    lapElement.appendChild(lap);

    document.getElementById("laps").appendChild(lapElement);*/
    listItem();
})

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

            //!!!REQUIRES FURTHER FUNCTIONALITY IN ORDER TO DISPLAY CURRENT MINUTE AND RESET SECONDS TO 00 AFTER 59/60 SECONDS!!!
    //!Set at 10 seconds for testing purpose
    if (seconds == 10) {
        //Sets id for new minute element
        minuteElement.id = "minute";
        //append starting value to new minute element
        minuteElement.appendChild(minutesStart);

        //increment minute (currently not workin gand stopping minutes appearing)
        /*minutes ++;
        seconds = 00;
        outputSeconds = seconds;*/

        //insert minute element at the start of clock element 9before seconds and milliseconds
        document.getElementById("clock").insertBefore(minuteElement, clock.children[0]);
        //set the new minute element within the dom to equal the current minutes value
        document.getElementById("minute").innerHTML = minutes;
        //displays colon minute seperator
        if(colon.style.display === "none"){
            colon.style.display = "inline-flex"
        };
    };
};

