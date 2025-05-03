function checkNumber() {
  let input = document.getElementById("numberInput");
  let num = Number(input.value);

  switch (true) {
    case num >= 0 && num < 30:
      document.body.style.background = "#85c1e9";
      break;
    case num >= 30 && num < 70:
      document.body.style.background = "#2e86c1";
      break;
    case num >= 70 && num <= 100:
      document.body.style.background = "#21618c";
      break;
    default:
      alert("Invalid number");
      document.body.style.background = "";
  }
  input.value = "";
}
