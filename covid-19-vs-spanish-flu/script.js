const refreshRate = 3;

var deaths = 0;
var recovered = 0;
var infected = 0;
var killDeath = 0;


fetch("https://api.allorigins.win/raw?url=https://www.worldometers.info/coronavirus/?referer=app").then(data => data.text()).then(text => {
    const parser = new DOMParser();
    const worldometers = parser.parseFromString(text, "text/html");
    infected = parseInt(worldometers.querySelectorAll(".maincounter-number > span")[0].innerHTML.replace(/,/g, ""));
    deaths = parseInt(worldometers.querySelectorAll(".maincounter-number > span")[1].innerHTML.replace(/,/g, ""));
    recovered = parseInt(worldometers.querySelectorAll(".maincounter-number > span")[2].innerHTML.replace(/,/g, ""));
    killDeath = (deaths / recovered).toFixed(4);
    updateDocument();
    delegateToLocal();
});

function delegateToLocal() {
    setInterval(() => {
        deaths = deaths + (0.0112 * refreshRate);
        infected = infected + (0.9966 * refreshRate);
        recovered = recovered + (13.82 * refreshRate);
        killDeath = (deaths / recovered).toFixed(4);
        updateDocument();
    }, refreshRate * 1000);
}


function updateDocument() {
    document.getElementById("covid-death-count").innerHTML = numberWithCommas(Math.round(deaths));
    document.getElementById("covid-infected-count").innerHTML = numberWithCommas(Math.round(infected));
    document.getElementById("covid-recovered-count").innerHTML = numberWithCommas(Math.round(recovered));
    document.getElementById("covid-kill-death-count").innerHTML = killDeath;
}

function numberWithCommas(x) {
    var y = 0;
    y = x;
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}