var clock = document.getElementById('clock');

function drawClock() {
	let now = new Date();
	let str = now.toISOString();
	let fmt = str.slice(11, 19);
	clock.innerText = fmt;
}

drawClock();
setInterval(drawClock, 100);
