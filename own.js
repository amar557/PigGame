const curr_1 = document.querySelector('#current--0');
const curr_2 = document.querySelector('#current--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

let score, rndmNumbr, currentPlayer, currentScore, playing, scores;

const starting = function () {
  player2Score.textContent = 0;
  player1Score.textContent = 0;
  curr_1.textContent = 0;
  curr_2.textContent = 0;
  dice.style.opacity = 0;
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;
};

starting();
function switchPlayer() {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}
rollDice.addEventListener('click', function () {
  if (playing) {
    const rndmNumbr = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${rndmNumbr}.png`;
    dice.style.opacity = 1;
    if (rndmNumbr !== 1) {
      currentScore += rndmNumbr;
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    document.querySelector(`#current--${currentPlayer}`).textContent = 0;
    switchPlayer();
    if (scores[currentPlayer] >= 100) {
      dice.style.opacity = 0;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      playing = false;
    }
  }
});
newGameBtn.addEventListener('click', function () {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
  starting();
});
