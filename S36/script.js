const car = document.querySelector(".car");
let x = 0;
let y = 0;
window.addEventListener("keydown", (event) => {
  const speed = 20;
  if (event.key === "ArrowUp") y -= speed;
  if (event.key === "ArrowDown") y += speed;
  if (event.key === "ArrowLeft") x -= speed;
  if (event.key === "ArrowRight") x += speed;
  car.style.transform = `translate(${x}px, ${y}px)`;
});
