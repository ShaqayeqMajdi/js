let stars = "*";

for (let i = 0; i < 6; i++) {
  let spaces = "";
  let stars = "*";

  for (let count = 0; count < 5; count++) {
    if (count < 5 - i) {
      spaces += " ";
    }
  }

  for (let count = 0; count < 1 + i * 2; count++) {
    stars += "*";
  }

  console.log(spaces + stars);
}
