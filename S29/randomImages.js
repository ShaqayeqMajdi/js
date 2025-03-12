const images = [
  "assets/images/1.jpg",
  "assets/images/2.jpg",
  "assets/images/3.jpg",
  "assets/images/4.jpg",
  "assets/images/5.jpg",
];

const randomImage = Math.floor(Math.random() * images.length);

for (let i = 0; i < images.length; i++) {
  document.body.style.backgroundImage = "";
}

document.body.style.backgroundImage = `url(${images[randomImage]})`;
