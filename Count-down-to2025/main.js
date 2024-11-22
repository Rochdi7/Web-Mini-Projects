let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh"); 
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let point_days = document.getElementById("point-days");
let point_hours = document.getElementById("point-hours");
let point_minutes = document.getElementById("point-minutes");
let point_seconds = document.getElementById("point-seconds");

let endDate = '2024-12-31 00:00:00';

let countdown = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countdownDate = new Date().getTime();
    let distance = now - countdownDate;

    let calculateDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    let calculateHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let calculateMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let calculateSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = calculateDays + "<br><span>Days</span>";
    hours.innerHTML = calculateHours + "<br><span>Hours</span>";
    minutes.innerHTML = calculateMinutes + "<br><span>Minutes</span>";
    seconds.innerHTML = calculateSeconds + "<br><span>Seconds</span>";

    dd.style.strokeDashoffset = 440 - (440 * calculateDays) / 365;
    hh.style.strokeDashoffset = 440 - (440 * calculateHours) / 24;
    mm.style.strokeDashoffset = 440 - (440 * calculateMinutes) / 60;
    ss.style.strokeDashoffset = 440 - (440 * calculateSeconds) / 60;

    if(distance < 0){
        clearInterval(countdown);
        document.getElementById("time").style.display = "none"; 
        document.querySelector(".happy-new-year").style.display = "block";
    }
})