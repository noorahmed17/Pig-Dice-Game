const firstPlayer = document.querySelector(".player-0");
const secondPlayer = document.querySelector(".player-1");
const currentScore = document.querySelector(".current-value");
const currentScoreE1 = document.getElementById("current-0");
const currentScoreE2 = document.getElementById("current-1");
const scoreE1 = document.getElementById("score-0");
const scoreE2 = document.getElementById("score-1");

const rollDice = document.querySelector(".roll-dice");
const holdDIce = document.querySelector(".hold-dice");
const nextGame = document.querySelector(".next-game");
const diceImg = document.querySelector(".dice");

let score = [0, 0];
let playerCurrentScore = 0;
let activePlayer = 0;
let playing = true;

const init = () => {
  score = [0, 0];
  playerCurrentScore = 0;
  activePlayer = 0;
  playing = true;

  currentScoreE1.textContent = 0;
  currentScoreE2.textContent = 0;
  scoreE1.textContent = 0;
  scoreE2.textContent = 0;

  document
    .querySelector(`.player-${activePlayer}`)
    .classList.remove("player-winner");
  firstPlayer.classList.add("player--active");
  secondPlayer.classList.remove("player--active");
  diceImg.classList.add("hidden");
};

const switchPlayers = () => {
  document.getElementById(`current-${activePlayer}`).textContent = 0;

  firstPlayer.classList.toggle("player--active");
  secondPlayer.classList.toggle("player--active");
  activePlayer = secondPlayer.classList.contains("player--active") ? 1 : 0;
  playerCurrentScore = 0;
};

rollDice.addEventListener("click", () => {
  if (playing) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceImg.classList.remove("hidden");
    diceImg.src = `/img/dice-${randomNumber}.png`;

    if (randomNumber === 1) {
      switchPlayers();
    } else {
      playerCurrentScore += randomNumber;
      document.getElementById(`current-${activePlayer}`).textContent =
        playerCurrentScore;
    }
  }
});

holdDIce.addEventListener("click", () => {
  if (playing) {
    score[activePlayer] += playerCurrentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("active-player");
      diceImg.classList.add("hidden");
    } else {
      switchPlayers();
    }
  }
});

nextGame.addEventListener("click", init);
