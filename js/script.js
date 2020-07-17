
var timeleft;
var timeleft1;
var downloadTimer;
let firstSetTime, secondSetTime;
let firstSetTime1, secondSetTime1;
let stop;
let zmienna =

    // function downloadTimer(timeleft) {
    //     document.getElementById("progressBar").max = timeleft;
    //     setInterval(function () {
    //         if (timeleft <= 0) {
    //             clearInterval(downloadTimer);
    //         } else {
    //             document.getElementById("countdown").innerHTML = timeleft + " s";
    //             document.getElementById("progressBar").value = document.getElementById("progressBar").max - timeleft;
    //             console.log(timeleft)
    //         }
    //         timeleft--;
    //     }, 1000);
    // }

    document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick() {
    stop = false;
    console.log("begin");
    this.disabled = true;
    new Audio('./../asset/sound/ringbell.mp3').play();
    firstRing()
}


const firstRing = () => {
    console.log("PIERWSZA FUNKCJA");
    document.getElementById("proba").textContent = "Aktualna wartość to 10 min";
    let timeleft007 = 10;
    document.getElementById("progressBar").max = 10;
    document.getElementById("countdown").textContent = '10'
    if (!stop) {

        firstSetTime = setInterval(() => {
            timeleft007--;
            document.getElementById("countdown").textContent = timeleft007;
            console.log("z pierwszej funkcji", timeleft007);
            document.getElementById("progressBar").value = document.getElementById("progressBar").max - timeleft007;
        }, 1000);
        firstSetTime1 = setTimeout(() => {
            new Audio('./../asset/sound/ringbell.mp3').play();
            secondRing();
            clearInterval(firstSetTime)

        }, 10000)
    }
}

const secondRing = () => {
    console.log("DRUGA FUNKCJA");
    document.getElementById("proba").textContent = "Aktualna wartość to 5 min";
    let timeleft007 = 10;
    document.getElementById("countdown").textContent = '10';
    document.getElementById("progressBar").max = 10;
    if (!stop) {
        //////////////////////////////////////////////////////////////////////////////////////
        secondSetTime = setInterval(() => {
            document.getElementById("countdown").textContent = timeleft007 - 1;
            timeleft007--;
            console.log("z drugiej funkcji", timeleft007);
            document.getElementById("progressBar").value = document.getElementById("progressBar").max - timeleft007;
        }, 1000);

        secondSetTime1 = setTimeout(() => {
            new Audio('./../asset/sound/ringbell.mp3').play();
            firstRing();
            clearInterval(secondSetTime)
        }, 10000)
    }
}




document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("proba").textContent = "Brak uruchomionego licznika";
    document.getElementById("countdown").textContent = "Odliczanie wstrzymane";
    document.getElementById("button").disabled = false;
    stop = true;
    clearTimeout(firstSetTime1);
    clearTimeout(secondSetTime1);
    clearInterval(firstSetTime)
    clearInterval(secondSetTime)

    document.getElementById("progressBar").value = 0;
    document.getElementById("progressBar").max = 0;



})
