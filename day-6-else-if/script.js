// q1. Marks ke hisaab se grade print karo (A, B, C, D, Fail).
// const marks = 98;
// let grade;
// if (marks >= 90 && marks <= 100){
//     grade = "A"
// }
// else if (marks >= 80 && marks < 90){
//     grade = "B"
// }
// else if (marks >= 70 && marks < 80){
//     grade = "C"
// }
// else if (marks >= 60 && marks < 70){
//     grade = "D"
// }
// else{
//     grade = "Fail"
// }
// console.log(`Marks = ${marks} Grade = ${grade}`);


// q2. Month number ke hisaab se month ka naam print karo.
// let monthNumber = 3;
// if (monthNumber === 1){
//     console.log("January");
// }
// else if (monthNumber === 2){
//     console.log("Febuary");
// }
// else if (monthNumber === 3){
//     console.log("March");
// }
// else if (monthNumber === 4){
//     console.log("April");
// }
// else if (monthNumber === 5){
//     console.log("May");
// }
// else if (monthNumber === 6){
//     console.log("June");
// }
// else if (monthNumber === 7){
//     console.log("July");
// }
// else if (monthNumber === 8){
//     console.log("August");
// }
// else if (monthNumber === 9){
//     console.log("September");
// }
// else if (monthNumber === 10){
//     console.log("October");
// }
// else if (monthNumber === 11){
//     console.log("November");
// }
// else if (monthNumber === 12){
//     console.log("'December'");
// }
// else{
//     console.log("Invalid month Number");
// }

// q3. BMI calculate karke underweight, normal, overweight print karo.
// const weight = +prompt("Enter your weight in (kg)");
// const height = +prompt("Enter your height in meter");
// let bmi = weight/ (height * height)
// let category;
// if (bmi < 18.5){
//     category = "underweight";
// }
// else if (bmi >= 18.5 && bmi <= 24.9){
//     category = "Normal";
// }
// else if (bmi >= 25 && bmi <= 29.9){
//     category = "overweight";
// } 
// else{
//     category = "obese"
// }
// console.log(`BMI = ${bmi.toFixed(2)} : Category : ${category}`);


// q4.  Electricity bill slabs ke hisaab se bill amount print karo.
// let units = +prompt("Enter your electricity units consumed");

// let billAmount = 0;

// if (units <= 50) {
//   billAmount = units * 3.5;
// } else if (units <= 150) {
//   billAmount = 50 * 3.5 + (units - 50) * 4.0;
// } else if (units <= 300) {
//   billAmount = 50 * 3.5 + 100 * 4.0 + (units - 150) * 5.2;
// } else {
//   billAmount = 50 * 3.5 + 100 * 4.0 + 150 * 5.2 + (units - 300) * 6.5;
// }
// console.log("Total electricity bill: Rs " + billAmount.toFixed(2));

// q5. Time ke hisaab se Good Morning / Good Afternoon / Good Night print karo.
let now = new Date();
let hour = now.getHours();

let message;
if (hour < 12){
    message = "Good Morning"
}
else if (hour < 17){
    message = "Good Afternoon"
}
else if (hour < 21){
    message = "Good Evening"
}
else{
    message = "Good Night"
}
console.log(message);
