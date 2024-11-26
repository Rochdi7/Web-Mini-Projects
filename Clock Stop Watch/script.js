/* declare variables */

let starttime = 0;
let timer = null;
let elapsedtime = 0;
let isRunning = false;
const display = document.getElementById("display");

/* functions delcaration */
function start(){
    if(!isRunning){
        starttime = Date.now() - elapsedtime;
        timer = setInterval(updatedisplay, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        timer = clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isRunning = false;
    }
}

function reset(){
      timer = clearInterval(timer);
      starttime = 0;
      elapsedtime = 0;
      isRunning = false;
      display.textContent = "00:00:00:00";
}

/* function update for the display and time */ 
function updatedisplay(){
     const currenttime = Date.now();
     elapsedtime = currenttime - starttime;
     let hours = Math.floor(elapsedtime / (1000 * 60 *60));
     let minutes = Math.floor(elapsedtime /(1000 * 60) % 60);
     let seconds = Math.floor(elapsedtime /1000);
     let milisecondes = Math.floor(elapsedtime % 1000 / 10);

     hours = String(hours).padStart(2, "0");
     minutes = String(minutes).padStart(2, "0");
     seconds = String(seconds).padStart(2, "0");
     milisecondes = String(milisecondes).padStart(2, "0");

     display.textContent = `${hours}:${minutes}:${seconds}:${milisecondes}`;
}