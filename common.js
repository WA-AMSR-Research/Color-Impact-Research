
// STRAGEMODE
// 0 do not save/send any data
// 1 send json file to Server
// 2 save json file to PC
var STRAGEMODE = 1;

var gameTimer = undefined;
var startTime = undefined;
var nowTime = undefined;
var elapsedTime = undefined;

showElapsedTime = () => {
  nowTime = new Date();
  elapsedTime = Math.floor((nowTime - startTime) / 1000);
  var str = `Elapsed Time: ${elapsedTime} seconds`;
  document.getElementById('elapsedTime').innerHTML = str;
}

startGameTimer = () => {
  startTime = new Date();
  showElapsedTime();
  gameTimer = setInterval( showElapsedTime, 1000 ); // 1000 msec
}

stopGameTimer = () => {
  showElapsedTime();
  clearInterval(gameTimer);
}

showModal = () => {
  var ee = document.getElementsByClassName('overlay');
  ee[0].style.visibility = "visible";
    var str = `in ${elapsedTime} seconds.`;
  document.getElementById("elapsedTimeInModal").innerHTML = str;
}

setPageBgColor = () => {
  var pageBgColor = sessionStorage.bgcolor || 'White';
  document.body.style.backgroundColor = pageBgColor;
}

saveElapsedTime = (key) => {
  sessionStorage[key] = elapsedTime;
}

_showSessionStorage = () => {
  console.log(sessionStorage);
}

// end of file
