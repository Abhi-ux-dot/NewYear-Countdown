//New Year Date
var newYear = new Date("Jan 1, 2022 00:00:00");

//Countdown [updates every second]
var count = setInterval(function () {
    var currentDate = new Date;
    var timeLeft = newYear - currentDate;

    //Converting timeLeft to Days, Hours, Minutes & Seconds
    var days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    var hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);