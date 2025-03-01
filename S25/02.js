function formatText(text) {
  let result = "";
  let capitalize = true;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char !== ".") {
      if (capitalize && char !== " ") {
        result += char.toUpperCase();
        capitalize = false;
      } else {
        result += char.toLowerCase();
      }

      if (char === " ") {
        capitalize = true;
      }
    }
  }

  console.log(result);
}

formatText("sampl.e. tex.t");
