var cards = [];
var startTime;
var timer;
var backTimer;
var flgFirst = true;
var cardFirst;
var countUnit = 0;


window.onload = function startGame() {
    var arr = [];

    for (var i = 0; i < 6; i++) {
        arr.push(i);
        arr.push(i);
    }

    shuffle(arr);

    var panel = document.getElementById('panel');

    for (i = 0; i < 12; i++) {
        var div = document.createElement('div');
        div.className = 'card back';
        div.index = i;
        div.number = arr[i];
        div.innerHTML = '';
        div.onclick = turn;
        panel.appendChild(div);
        cards.push(div);
    }

    startTime = new Date();
    startTimer();
} //

function shuffle(arr) {
    var n = arr.length;
    var temp, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        temp = arr[n];
        arr[n] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

//when clicked
function turn(e) {

    var div = e.target;

    if (backTimer) return;

    // show number when a card is on the back is clicked
    if (div.innerHTML == '') {
        div.className = 'card';
        div.innerHTML = div.number;
    } else {
        // return if the number is already shown
        return;
    }

    if (flgFirst) {
        cardFirst = div;
        flgFirst = false;

    } else {

        if (cardFirst.number == div.number) {
            countUnit++;
            backTimer = setTimeout(function () {
                div.className = 'card finish';
                cardFirst.className = 'card finish';
                backTimer = NaN;

                if (countUnit == 6) {
                    clearInterval(timer); // finish the timer
                }
            }, 500)

            // if the two cards DO NOT match
        } else {
            // turn the cards back
            backTimer = setTimeout(function () {
                div.className = 'card back';
                div.innerHTML = '';
                cardFirst.className = 'card back';
                cardFirst.innerHTML = '';
                cardFirst = null;
                backTimer = NaN;
            }, 500);
        }

        flgFirst = true;
    }
}

//game timer
var second = 0;
minute = 0;
var timer = document.querySelector(".timer");
var interval;

function startTimer() {
    timer = setInterval(showSecond, 1000);
}

// show elapsed time
function showSecond() {
    var nowTime = new Date();
    var elapsedTime = Math.floor((nowTime - startTime) / 1000);
    var str = 'Elapsed Time: ' + elapsedTime + ' seconds';

    var re = document.getElementById('result');
    re.innerHTML = str;

    //start the timer on first move
    if (moves == 1) {
        second = 0;
        minute = 0;
        startTimer();
    }
}


//modal
let modal = document.getElementById("popup1")

//congratulations when all cards match, show time
function congratulations() {
    if (matchedCard.length == 16) {
        clearInterval(interval);
        finalTime = timer.innerHTML;
        //showing time on modal
        document.getElementById("totalTime").innerHTML = "result";
    };
}

//for player to move onto the next test
function closeModal() {}
