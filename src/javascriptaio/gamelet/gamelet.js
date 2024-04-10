const ball = document.getElementById('ball'); //Get the ball
document.addEventListener('keydown', handleKeyPress); //Listen for keys
let position = 0;

/*Random
mimterealine
kommentaar*/

function handleKeyPress(e) { //responds to key presses by updating position
  if (e.code === 'ArrowLeft') {
    position = position - 10;
  }
  if (e.code === 'ArrowRight') {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // update ball position
}
function refresh() {
  ball.style.left = position + 'px';
}
