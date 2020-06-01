console.log("time to start the timer!");

let isOn = false;

let seconds = 0;
let minutes = 0;

let x = setInterval(function(){

    if (!isOn){
        return;
    }
    seconds++;

    // Roll over a minute
    if (seconds == 60){
        seconds = 0;
        minutes++;
    }

    // brute forcing the :00 format
    if (seconds < 10){
        document.querySelector('p').innerHTML = minutes + ':0' + seconds;
        return;
    }

    document.querySelector('p').innerHTML = minutes + ':' + seconds;

}, 1000)

function startTimer(){
    console.log("start");

    if(isOn){
        return;
    } else{
        isOn = true;
    }
}

function stopTimer(){
    console.log("stop");

    if (isOn){
        isOn = false;
    }
}

function resetTimer(){
    console.log("reset");

    isOn = false;
    minutes = 0;
    seconds = 0;

    document.querySelector('p').innerHTML = '0:00';
}