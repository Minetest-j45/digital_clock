var clock = document.getElementById('clock');

function getHour() {
	var d = new Date();

	var hour = "" + d.getHours();
	if (hour.length === 1) {
		hour = "0" + hour;
	}

	return hour;
}

function getMinute() {
	var d = new Date();

	var minute = "" + d.getMinutes();
	if (minute.length === 1) {
		minute = "0" + minute;
	}

	return minute;
}

function getSecond() {
	var d = new Date();

	var second = "" + d.getSeconds();
	if (second.length === 1) {
		second = "0" + second;
	}

	return second;
}

function drawClock() {
	clock.innerText = getHour() + ":" + getMinute() + ":" + getSecond();
}

drawClock();
setInterval(drawClock, 100);
