function generateHashtag(text) {
  let result = "#";
  let word = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char !== " ") {
      if (word === "") {
        result += char.toUpperCase();
      } else {
        result += char;
      }
      word += char;
    } else if (word !== "") {
      result += "_";
      word = "";
    }
  }

  console.log(result);
}

generateHashtag("hashtag generator");
