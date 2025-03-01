const leftImage = document.getElementById("leftImage");
const rightImage = document.getElementById("rightImage");
const swapBtn = document.getElementById("swapBtn");

function swapImages() {
  let tempSrc = leftImage.src;
  leftImage.src = rightImage.src;
  rightImage.src = tempSrc;
}

swapBtn.onclick = swapImages;
