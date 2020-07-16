
var timeleft;
var downloadTimer;


function downloadTimer(timeleft) {
    document.getElementById("progressBar").max = timeleft;
    setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " s";
            document.getElementById("progressBar").value = document.getElementById("progressBar").max - timeleft;
            console.log(timeleft)
        }
        timeleft--;
    }, 1000);
}

document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick() {
    console.log("begin");
    this.disabled = true;
    downloadTimer(15);
    new Audio('./../asset/sound/ring.mp3').play();
    firstRing()
}


const firstRing = () => {
    setTimeout(() => {
        new Audio('./../asset/sound/ring.mp3').play();
        secondRing()
    }, 60000)
}
const secondRing = () => {
    setTimeout(() => {
        new Audio('./../asset/sound/ring.mp3').play();
        firstRing();
    }, 60000)
}








