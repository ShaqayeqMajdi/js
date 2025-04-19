// Select elements
const allBoxes = document.querySelectorAll(".box");
const board = document.getElementById("container");
const helpBtn = document.getElementById("helpIcon");
const helpPanel = document.getElementById("helpBox");

let cards = [];

for (let i = 0; i < allBoxes.length; i++) {
  cards.push(allBoxes[i]);
}

for (let i = 0; i < cards.length; i++) {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const temp = cards[randomIndex];
  cards[randomIndex] = cards[i];
  cards[i] = temp;
}

board.innerHTML = "";
for (const card of cards) {
  board.appendChild(card);
}

let matchedCards = 0;
let openedCards = [];

function hideCardsAtStart() {
  for (const card of cards) {
    card.classList.add("hidden");
  }
}
setTimeout(hideCardsAtStart, 3000);

function onCardClick(event) {
  const clickedCard = event.currentTarget;

  if (openedCards.length < 2 && clickedCard.classList.contains("hidden")) {
    clickedCard.classList.remove("hidden");
    openedCards.push(clickedCard);
    clickedCard.removeEventListener("click", onCardClick);
  }

  if (openedCards.length === 2) {
    const img1 = openedCards[0].querySelector("img").src;
    const img2 = openedCards[1].querySelector("img").src;

    if (img1 === img2) {
      matchFound();
    } else {
      noMatch();
    }
  }
}

function matchFound() {
  openedCards[0].classList.add("matched");
  openedCards[1].classList.add("matched");

  openedCards = [];
  matchedCards++;

  if (matchedCards === cards.length / 2) {
    showWinPopup();
  }
}

function noMatch() {
  lockAllCards();

  alert("Not Matched :(");
  setTimeout(() => {
    openedCards[0].classList.add("hidden");
    openedCards[1].classList.add("hidden");

    openedCards[0].addEventListener("click", onCardClick);
    openedCards[1].addEventListener("click", onCardClick);

    openedCards = [];
    unlockUnmatched();
  }, 1000);
}

function lockAllCards() {
  for (const card of cards) {
    card.classList.add("disable");
  }
}

function unlockUnmatched() {
  for (const card of cards) {
    if (!card.classList.contains("matched")) {
      card.classList.remove("disable");
    }
  }
}

for (const card of cards) {
  card.addEventListener("click", onCardClick);
}

function showWinPopup() {
  document.getElementById("winPopup").classList.add("pop");
}

function closeWinPopup() {
  document.getElementById("winPopup").classList.remove("pop");
  resetGame();
}

helpBtn.addEventListener("click", () => {
  helpPanel.classList.toggle("show");
});

function closeHelp() {
  helpPanel.classList.remove("show");
}
