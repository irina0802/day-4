for (var i = 0; i <= 1000; i++) {
  document.querySelector('.container').innerHTML += "<div class='box'>";
}

var allBoxes = document.querySelectorAll('.box');

for (var i = 0; i <= allBoxes.length; i = i + 2) {
  allBoxes[i].style.background = "blue";
}