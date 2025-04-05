// Get references to the DOM elements
const mainImage = document.getElementById("mainImage");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const desc = document.getElementById("desc");

// Array of image URLs
const images = [
  "./assets/images/1977.avif",
  "./assets/images/1978.jpg",
  "./assets/images/1981.webp",
  "./assets/images/1984.jpg",
  "./assets/images/2005.webp",
  "./assets/images/2019.jpg",
];

// Array of descriptions for each image
const descriptions = [
  "1977-One of the most important nights in the club’s history as they finally won the big one. Liverpool were the best in Europe and they weren’t stopping.",
  "1978-This made Liverpool the sixth club to retain the trophy, joining Real Madrid, Benfica, Inter, Ajax and Bayern Munich.",
  "1981-Liverpool’s two wins were immediately followed by two years of Nottingham Forest as European champions. The Reds got back on their perch here.",
  "1984-Liverpool faced Roma in Rome and somehow managed to see the Italians off in their own back garden.",
  "2005-It is undoubtedly one of the most incredible games of football ever played. Possibly the greatest. Anyone lucky enough to witness it will never forget a moment.",
  "2019-After falling short the previous year, Jurgen Klopp strengthened his squad and led them on a march towards the Champions League trophy.",
];

// Set initial index to 0
let index = 0;

// Function to update the image and description
function updateContent() {
  mainImage.src = images[index];
  desc.textContent = descriptions[index];
}

// Function to move to the next image
function nextImage() {
  if (index === images.length - 1) {
    index = 0;
  } else {
    index++;
  }
  updateContent();
}

// Function to move to the previous image
function prevImage() {
  if (index === 0) {
    index = images.length - 1;
  } else {
    index--;
  }
  updateContent();
}

// Add event listeners for the buttons
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Initialize the content by updating it the first time
updateContent();
