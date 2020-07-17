
var timeleft, timeleft1, downloadTimer;
let firstSetTime, secondSetTime;
let firstSetTime1, secondSetTime1;
let stop;

document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick() {
    stop = false;
    this.disabled = true;
    document.getElementById("countdown").textContent = '10s'
    new Audio('./../asset/sound/ringbell.mp3').play();
    firstRing()
}


const firstRing = () => {
    document.getElementById("sessionTime").textContent = " 10 min";
    let timeleft10 = 10;
    document.getElementById("progressBar").max = 10;
    if (!stop) {
        firstSetTime = setInterval(() => {
            timeleft10--;
            document.getElementById("countdown").textContent = timeleft10 + "s";
            document.getElementById("progressBar").value = document.getElementById("progressBar").max - timeleft10;
        }, 1000);
        firstSetTime1 = setTimeout(() => {
            new Audio('./../asset/sound/ringbell.mp3').play();
            secondRing();
            clearInterval(firstSetTime)

        }, timeleft10 * 1000)
    }
}

const secondRing = () => {
    document.getElementById("sessionTime").textContent = " 5 min";
    let timeleft5 = 5;
    document.getElementById("countdown").textContent = '0s';
    document.getElementById("progressBar").max = 5;
    if (!stop) {
        secondSetTime = setInterval(() => {
            document.getElementById("countdown").textContent = timeleft5 - 1 + "s";
            timeleft5--;
            document.getElementById("progressBar").value = document.getElementById("progressBar").max - timeleft5;
        }, 1000);

        secondSetTime1 = setTimeout(() => {
            new Audio('./../asset/sound/ringbell.mp3').play();
            firstRing();
            clearInterval(secondSetTime)
        }, timeleft5 * 1000)
    }
}




document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("proba").textContent = "Brak uruchomionego licznika";
    document.getElementById("countdown").textContent = "Odliczanie wstrzymane";
    document.getElementById("button").disabled = false;
    stop = true;
    clearTimeout(firstSetTime1);
    clearTimeout(secondSetTime1);
    clearInterval(firstSetTime);
    clearInterval(secondSetTime);
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressBar").max = 0;



})
