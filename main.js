function getHour() {
    var d = new Date();
    //return d.getHours();
    var hour = ""+d.getHours();
    if (hour.length == 1) {
        hour = "0" + hour;
    }
    return hour;
}

function getMinute() {
    var d = new Date();
    //return d.getMinutes();
    var minute = ""+d.getMinutes();
    if (minute.length == 1) {
        minute = "0" + minute;
    }
    return minute;
}

function getSecond() {
    var d = new Date();
    //return d.getSeconds();
    var second = ""+d.getSeconds();
    if (second.length == 1) {
        second = "0" + second;
    }
    return second;
}

function drawClock() {
    var clock = document.getElementById('clock');
    clock.innerHTML = getHour() + ":" + getMinute() + ":" + getSecond();
    updateClock();
}

function updateClock() {
    setTimeout(drawClock, 1000);
}

drawClock();