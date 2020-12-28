var left = 0;
var line = document.getElementById("line");
var interval;

function moveLeft() {
  left -= 600;
  if (left < -4200) left = 0;
  line.style.left = left + "px";
};

function moveRight() {
  left += 600;
  if (left > 0) left = -4200;
  line.style.left = left + "px";
};

function playCarousel() {
  interval = setInterval(moveLeft, 1500);
}

function pauseCarousel() {
  clearInterval(interval);
}

document.getElementById("left").onclick = moveLeft;
document.getElementById("right").onclick = moveRight;
document.getElementById("play").onclick = playCarousel;
document.getElementById("pause").onclick = pauseCarousel;

document.getElementById("input1").onclick = () => {
  line.style.left = "0px";
  pauseCarousel();
};
document.getElementById("input2").onclick = () => {
  line.style.left = "-600px";
  pauseCarousel();
};
document.getElementById("input3").onclick = () => {
  line.style.left = "-1200px";
  pauseCarousel();
};
document.getElementById("input4").onclick = () => {
  line.style.left = "-1800px";
  pauseCarousel();
};
document.getElementById("input5").onclick = () => {
  line.style.left = "-2400px";
  pauseCarousel();
};
document.getElementById("input6").onclick = () => {
  line.style.left = "-3000px";
  pauseCarousel();
};
document.getElementById("input7").onclick = () => {
  line.style.left = "-3600px";
  pauseCarousel();
};
document.getElementById("input8").onclick = () => {
  line.style.left = "-4200px";
  pauseCarousel();
};

