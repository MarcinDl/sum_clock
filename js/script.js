
var timeleft;
var downloadTimer;
var countdown = document.getElementById("countdown").innerHTML;


function downloadTimer(timeleft) {
    setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Nowa tura za niedługo";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}

document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick() {
    console.log("begin")
    downloadTimer(15);
    new Audio('./../asset/sound/ring.mp3').play()
    sequence().then(firstRing).then(secondRing)
}
const firstRing = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("first")
            downloadTimer(30);
            new Audio('./../asset/sound/ring.mp3').play();
            resolve();
        }, 15000)
    })
}
const secondRing = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("second")
            new Audio('./../asset/sound/ring.mp3').play();

            resolve();
        }, 30000)
    })
}

const sequence = () => {
    return new Promise((resolve, reject) => {
        resolve();
    });
};








