function pureNumber(Number) {
  let counter = 0;

  for (let i = 0; i <= 100; i++) {
    if (i >= 0 && i <= 100) {
      console.log(i);
      counter++;
    }

    if (counter > 100) {
      break;
    }
  }
}

pureNumber(Number);
