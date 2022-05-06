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
const outputMins = document.getElementById("minutes");
const outputHours = document.getElementById("hours");
const lapList = document.querySelector("#laps");

// -- container for interval value --
let Interval;

//Container for minute values. Create span for later appending
const minColon = document.getElementById("minSep");
const hoursColon = document.getElementById("hourSep");

//Remove All Child Nodes function
const removeAllChildNodes = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
};

// -- LAP FUNCTION --
const listItem = () => {
    //Create header element
    const lapHeadEl = document.createElement("h2");
    //Add id to lap header
    lapHeadEl.setAttribute("id", "lapHeader");
    //Text node with lap header content
    const lapHeader = document. createTextNode("Laps");
    //Append header content to lapHead element
    lapHeadEl.appendChild(lapHeader);
    //Selector to access lapHead element with DOM
    const lapHeadSelector = document.getElementById("lapHeader");

    //Check if lap header exists. If it doesn't, append Header to lap list
    if (!lapHeadSelector) {
        document.querySelector("#laps").appendChild(lapHeadEl);
    }

    //Create list element
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

// -- LAP EVENT LISTENER
buttonLap.addEventListener("click",() => {
    listItem();
});

// -- BUTTON EVENT LISTENERS --
buttonStart.addEventListener("click", () => {
    //Stop a running timer
    clearInterval(Interval);
    //Uses the setInterval function which allows defining the execution of the startTime function every ten milliseconds
    Interval = setInterval(startTime, 10);
});

// -- STOP BUTTON --
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
    minColon.style.display = "none";

    removeAllChildNodes(lapList);

});

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
    //If milliseconds exceeds 99, incriment seconds and reset milliseconds value to 0
    if (milliseconds > 99) {
        seconds ++;
        outputSeconds.innerHTML = "0" + seconds;
        milliseconds = 0;
        outputMilliseconds.innerHTML = "0" + milliseconds;
    };
    // apply current seconds from variable to inner html
    if (seconds >= 10) {
        outputSeconds.innerHTML = seconds;
    };

    // Add 0 to seconds to display double digits and apply to inner html
    if (minutes > 0 && seconds < 10) {
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
};


