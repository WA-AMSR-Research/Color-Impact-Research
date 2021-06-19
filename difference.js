var timer1;
var startTime, nowTime;
var btnStart = document.getElementById('start');
var btnStop = document.getElementById('stop');

// start
btnStart.addEventListener('click', function () {
	var re = document.getElementById('result');
	re.innerHTML = 'Elapsed Time: 0 second';
	// starting time
	startTime = new Date();
	// when timer starts
	startTimer();
	btnStart.disabled = true;
});

// stop
btnStop.addEventListener('click', function () {
	stopTimer();
	btnStart.disabled = false;
});


$(document).ready(function () {
	// When clicked, show difference
	$('#transparentmap AREA').click(function () {
		var theDifference = '#' + $(this).attr('id') + '-diff';
		$(theDifference).css('display', 'inline');
		$(theDifference).data('clicked', true);

		// When all differences selected/clicked, show continue
		if ($('#bee-diff').data('clicked') && $('#cloud1-diff').data('clicked') && $('#cloud2-diff').data('clicked') && $('#sunglasses-diff').data('clicked') && $('#sun-diff').data('clicked')) {
			$('#continue_container').css('display', 'inline');
		}
	});
});
