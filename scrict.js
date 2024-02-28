function newbbl() {
  var june = "";

  for (var i = 0; i <= 84; i++) {
    var rn = Math.floor(Math.random() * 10);
    june = june + `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#screenbtm").innerHTML = june;
}

newbbl();
var rn;
function hithit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitt").textContent = rn;
}

hithit();

function time() {
  var timer = 30;
  var interval = setInterval(function () {
    if (timer > 0) {
      timer = timer - 1;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(interval);
      document.querySelector(
        "#screenbtm"
      ).innerHTML = `<h1>GAME OVER !</H1><br><h1>RESTARTING THE GAME......</h1>`;
      setTimeout(() => {
        location.reload();
      }, 7000);
    }
  }, 1000);
}

time();

var score = 0;
function scoring() {
  score = score + 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#screenbtm").addEventListener("click", function (det) {
  var clicked = Number(det.target.textContent);
  if (clicked === rn) {
    scoring();
    hithit();
    newbbl();
  }
});
