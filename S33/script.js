const memoryBoxes = document.querySelectorAll(".box");

const selectedCards = [];

function hideCards() {
  for (const memoryCard of memoryBoxes) {
    memoryCard.classList.add("hidden");
  }
}
setTimeout(hideCards, 3000);

function revealCard(event) {
  if (selectedCards.length < 2) {
    event.target.classList.remove("hidden");
    selectedCards.push(event.target);
  }

  if (selectedCards.length === 2) {
    if (selectedCards[0].textContent === selectedCards[1].textContent) {
      alert("Matched");
    } else {
      alert("Not Matched");
      selectedCards[0].classList.add("hidden");
      selectedCards[1].classList.add("hidden");

      selectedCards.length = 0;
    }
  }
}

// event listeners
for (const card of memoryBoxes) {
  card.addEventListener("click", revealCard);
}
