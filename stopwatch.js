let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');

let hour = 00;
let minute = 00;
let second = 00;
let milliSecond = 00;
let timerReference;
let timer = false;

startButton.addEventListener('click', function () {
	timer = true;
	timerReference = setInterval(stopWatch, 10);
});

stopButton.addEventListener('click', function () {
	timer = false;
	clearInterval(timerReference);
});

resetButton.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	milliSecond = 0;
	document.getElementById('hour').innerHTML = "00";
	document.getElementById('minute').innerHTML = "00";
	document.getElementById('second').innerHTML = "00";
	document.getElementById('milliSec').innerHTML = "00";

    let lap = document.getElementById('lapList');
    lap.textContent = "";
});

lapButton.addEventListener('click', function () {
    let lap = document.getElementById('lapList');
    let lapHr = document.getElementById('hour').innerHTML;
    let lapMin = document.getElementById('minute').innerHTML;
    let lapSec = document.getElementById('second').innerHTML;
    let lapMillisec = document.getElementById('milliSec').innerHTML;
    lap.appendChild(document.createTextNode("•"+ lapHr + ":" + lapMin + ":" + lapSec + ":" + lapMillisec));
    lap.appendChild(document.createElement("br"));
});

function stopWatch() {
	if (timer)  {
		milliSecond++;

		if (milliSecond == 100) {
			second++;
			milliSecond = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

        let hourString = hour;
		let minuteString = minute;
		let secondString = second;
		let millisecString = milliSecond;

		if (hour < 10) {
			hourString = "0" + hourString;
		}

		if (minute < 10) {
			minuteString = "0" + minuteString;
		}

		if (second < 10) {
			secondString = "0" + secondString;
		}

		if (milliSecond < 10) {
			millisecString = "0" + millisecString;
		}


		document.getElementById('hour').innerHTML = hourString;
		document.getElementById('minute').innerHTML = minuteString;
		document.getElementById('second').innerHTML = secondString;
		document.getElementById('milliSec').innerHTML = millisecString;
	}
}
