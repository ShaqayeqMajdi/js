const num = +prompt("Enter a number");

if (num >= 0) {
    if (num < 50) {
        alert("Failed");
        document.body.style.background = "red";
    }
}

if (num >= 50) {
    if (num < 90) {
        alert("Pass");
        document.body.style.background = "blue";
    }
}

if (num >= 90) {
    if (num <= 100) {
        alert("Perfect");
        document.body.style.background = "green";
    }
}

if (num < 0) {
    alert("Invalid number");
    document.body.style.background = "brown";
}

if (num > 100) {
    alert("Invalid number");
    document.body.style.background = "brown";
}