var countDate = new Date('jan 1,2024 00:00:00').getTime();

function newYear() {
    var now = new Date().getTime();
    console.log(now);
    gap =countDate - now;

    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;

    var d = Math.floor(gap / (days));
    var h = Math.floor((gap % (days)) / (hours));
    var m = Math.floor((gap % (hours)) / (minutes));
    var s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(function () {
    newYear();
}, 1000)