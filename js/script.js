
var timeleft, downloadTimer;
let firstSetTime, secondSetTime;
let firstSetTime1, secondSetTime1;
let stop; var value = 0;
var value;
let wykrycieFunkcji = "";
let probe = false;
var minuty, sekundy;
var minuty2, sekundy2;
document.getElementById('button').addEventListener('click', buttonClick);
var czasPierwszejFunkcji = 60; //in seconds
var czasDrugiejFunkcji = 30; //in seconds
function buttonClick() {
    stop = false;
    this.disabled = true;
    document.getElementById("countdown").textContent = czasPierwszejFunkcji
    new Audio('./../asset/sound/ringbell.mp3').play();
    firstRing(czasPierwszejFunkcji)
}

let timeleft10;
let timeleft5;

const firstRing = (czasPierwszejFunkcji) => {
    wykrycieFunkcji = "pierwsza"
    console.log(wykrycieFunkcji);
    document.getElementById("sessionTime").textContent = " 10 min";
    document.getElementById("countdown").textContent = czasPierwszejFunkcji;
    document.getElementById("hold").textContent = "Wstrzymaj odliczanie";
    console.log("countdown-textContent", document.getElementById("countdown").textContent);
    console.log("czasPierwszejFunkcji", czasPierwszejFunkcji);

    if (!stop) {
        firstSetTime = setInterval(() => {
            czasPierwszejFunkcji--;
            document.getElementById("countdown").textContent = czasPierwszejFunkcji;
            console.log("czasPierwszejFunkcji", czasPierwszejFunkcji)
            minuty = Math.floor(czasPierwszejFunkcji % 3600 / 60);
            sekundy = Math.floor(czasPierwszejFunkcji % 3600 % 60);
            console.log("minuty", minuty)
            console.log("sekundy", sekundy)
            document.getElementById("countdownProper").textContent = minuty + " min " + sekundy + " sec";
            console.log("w setInterval", czasPierwszejFunkcji)
        }, 1000);
        firstSetTime1 = setTimeout(() => {
            new Audio('./../asset/sound/ringbell.mp3').play();
            clearInterval(firstSetTime)
            secondRing(czasDrugiejFunkcji);
        }, czasPierwszejFunkcji * 1000)


    }
}

const secondRing = (czasDrugiejFunkcji) => {
    wykrycieFunkcji = "druga";
    console.log(wykrycieFunkcji);
    document.getElementById("sessionTime").textContent = " 5 min";
    document.getElementById("countdown").textContent = czasDrugiejFunkcji;
    document.getElementById("hold").textContent = "Wstrzymaj odliczanie";
    console.log("countdown-textContent", document.getElementById("countdown").textContent);
    console.log("czasDrugiejFunkcji", czasDrugiejFunkcji);
    if (!stop) {
        secondSetTime = setInterval(() => {
            czasDrugiejFunkcji--;
            document.getElementById("countdown").textContent = czasDrugiejFunkcji;
            minuty2 = Math.floor(czasDrugiejFunkcji % 3600 / 60);
            sekundy2 = Math.floor(czasDrugiejFunkcji % 3600 % 60);
            console.log("minuty", minuty2)
            console.log("sekundy", sekundy2)
            document.getElementById("countdownProper").textContent = minuty2 + " min " + sekundy2 + " sec";
            console.log("w setInterval", czasDrugiejFunkcji)

        }, 1000);

        secondSetTime1 = setTimeout(() => {
            new Audio('./../asset/sound/ringbell.mp3').play();

            console.log("setimeoout", czasDrugiejFunkcji);
            clearInterval(secondSetTime)
            firstRing(czasPierwszejFunkcji);
        }, czasDrugiejFunkcji * 1000)
    }
}

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("sessionTime").textContent = "10min/5min";
    document.getElementById("countdownProper").textContent = "Odliczanie wstrzymane";
    document.getElementById("hold").textContent = "Wstrzymaj odliczanie";
    document.getElementById("button").disabled = false;
    stop = true;
    clearTimeout(firstSetTime1);
    clearTimeout(secondSetTime1);
    clearInterval(firstSetTime);
    clearInterval(secondSetTime)
})


document.getElementById("hold").addEventListener("click", function () {

    if (probe == false) {

        value = document.getElementById("countdown").textContent
        document.getElementById("hold").textContent = "Wznów odliczanie";
        clearTimeout(firstSetTime1);
        clearTimeout(secondSetTime1);
        clearInterval(firstSetTime);
        clearInterval(secondSetTime);
        probe = true;
    }
    else {

        if (wykrycieFunkcji == "pierwsza") {
            firstRing(value);
        }
        else if (wykrycieFunkcji == "druga") {
            secondRing(value);
        }
        probe = false;
    }



})


