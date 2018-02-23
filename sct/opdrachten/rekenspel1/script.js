const wrapper = document.getElementById('wrapper');
const myAssignment = document.getElementById('myAssignment');
const myAnswer = document.getElementById('myAnswer');
const feedback = document.getElementById('feedback');


let mySum;
let sound = new Audio();

function makeSum() {
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  mySum = a + " * " + b;
  myAssignment.innerHTML = mySum;
  myAnswer.focus();
}
function keyPressed(evt) {
  if(evt.keyCode == 13) {
    if (eval(mySum) == myAnswer.value) {
    feedback.src = "check.png";
    sound.src = "correct.mp3";
    sound.play();
  }
  else {
    feedback.src = "kruis.png";
    sound.src = "wrong.mp3";
    sound.play();
  }
window.setTimeout(waiting, 200);
}
}

function waiting() {
feedback.src = "zandloper.png";
myAnswer.value = "";
makeSum();
}

makeSum();
myAnswer.addEventListener("keydown", keyPressed, false);
