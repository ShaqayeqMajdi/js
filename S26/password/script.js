let harchi = "";
let hasLower = false,
  hasUpper = false,
  hasNumber = false;

for (let i = 0; i < 8; i++) {
  let pass;
  let type = Math.floor(Math.random() * 3);

  if (type === 0) {
    pass = Math.floor(Math.random() * 10) + 48;
    hasNumber = true;
  } else if (type === 1) {
    pass = Math.floor(Math.random() * 26) + 97;
    hasLower = true;
  } else {
    pass = Math.floor(Math.random() * 26) + 65;
    hasUpper = true;
  }

  harchi += String.fromCharCode(pass);
}

if (!hasLower)
  harchi += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
if (!hasUpper)
  harchi += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
if (!hasNumber)
  harchi += String.fromCharCode(Math.floor(Math.random() * 10) + 48);

console.log(harchi);
