var weight = prompt("وزن خود را وارد کنید (کیلوگرم):");
var height = prompt("قد خود را وارد کنید (متر):");

weight = Number(weight);
height = Number(height);

let bmi = weight / (height * height);

alert("🔹 شاخص BMI شما: " + bmi);
console.log("🔹 شاخص BMI شما: " + bmi);