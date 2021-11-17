const player1 = document.querySelector('#p1Button');
const player2 = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

player1.addEventListener('click', function () {
  if (gameOver === false) {
    p1Score += 1;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add('has-text-success');
      p2Display.classList.add('has-text-danger');
      player1.disabled = true;
      player2.disabled = true;
    }

    {
      p1Display.textContent = p1Score;
    }
  }
});

player2.addEventListener('click', function () {
  if (gameOver === false) {
    p2Score += 1;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add('has-text-success');
      p1Display.classList.add('has-text-danger');
      player1.disabled = true;
      player2.disabled = true;
    }

    {
      p2Display.textContent = p2Score;
    }
  }
});

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  resetp();
});

reset.addEventListener('click', resetp);

function resetp() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-danger', 'has-text-success');
  player1.disabled = false;
  player2.disabled = false;
}
