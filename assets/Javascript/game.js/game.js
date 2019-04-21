var yourScore = document.getElementById("yourScore");
yourScore.text = 0;
var targetScore = document.getElementById("targetScore");
targetScore.innerHTML = getRandomValue(10, 4);
function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}
// <button onclick="document.getElementById('blue').innerHTML = blue()"></button>

}
var red = document.getElementById("red");

console.log(red.value);
var blue = document.getElementById("blue");

var yellow = document.getElementById("yellow");

var green = document.getElementById("green");

red.addEventListener('click', function () {

  addToScore(this.value);
  checkPlayerScore();
});

blue.addEventListener('click', function () {


  addToScore(this.value);
  checkPlayerScore();
});
yellow.addEventListener('click', function () {

  addToScore(this.value);
  checkPlayerScore();
});
green.addEventListener('click', function () {

  addToScore(this.value);
  checkPlayerScore();
});

function getRandomValue(a, b) {
  return Math.floor((Math.random() * 120) + 19);
}
function checkPlayerScore() {

  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
    alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  }
}
// console.log(getRandomValue(10, 4)); ry




