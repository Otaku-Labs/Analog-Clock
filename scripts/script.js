const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runClock(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    let hrPosition = ((360 / 12) * hour) + (minutes * (360/60)/60);
    let minPosition = ((360 / 60) * minutes) + (seconds * (360/60)/60);
    let secPosition = (360 / 60) * seconds;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var loopTime = setInterval(runClock, 1000);

