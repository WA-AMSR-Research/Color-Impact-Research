var startTime;
var timer;

function startTimer() {
	timer = setInterval(showSecond, 1000);
}

function showSecond() {
	var nowTime = new Date();
	var elapsedTime = Math.floor((nowTime - startTime) / 1000);
	var str = "Elapsed Time: " + elapsedTime + " seconds";

	var re = document.getElementById("result");
	re.innerHTML = str;
}
