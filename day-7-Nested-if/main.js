// q1. Agar age > 18 aur license hai to “You can drive” print karo.
// let age = 23;
// uct ka stock check karo, agar stock hai to price check karohasLicense = false;

// if (age >= 18){
//     if (hasLicense){
//         console.log("You can drive");
//     }
//     else{
//         console.log("You are an adult but do not have a lisence");
//     }
// }
// else{
//     console.log("You are not old enough to drive");
// }

// q2. Login system – pehle username check karo fir password check karo.
// let correctUsername = "sam";
// let correctPassword = "secret123";

// let username = prompt("Enter username ");
// let password = prompt("Enter password ");

// if (username === correctUsername){
//     if (password === correctPassword){
//         console.log("Login Successful.");
//     }
//     else{
//         console.log("Incorrect Password");
//     }
// }
// else{
//     console.log("Username not found");
// }

// q3. Agar marks > 80 aur attendance > 75 ho to “Eligible” print karo.
// let marks = 90;
// let attendance = 78;

// if (marks >= 80){
//     if (attendance >= 75){
//         console.log("Eligible");
//     }
//     else{
//         console.log("Attendence less than 75");
//     }
// }
// else{
//     console.log("Marks less than 80");
// }

// q4. Ek product ka stock check karo – agar stock hai to price check karo.
let stock = 15;
let price = 250;

// sample input
// let quantityNeeded = 3;

// if (stock > 0) {
//     if (price !== undefined && price !== null) {
//         console.log(`Product available. Price: ₹${price}`);
//     } else {
//         console.log("Product in stock but price not set.");
//     }
// } else {
//     console.log("Product out of stock.");
// }

// q5. ATM – pehle balance check karo fir withdrawal amount.
let balance = 5000;
let withdrawal = 1500;

if (balance > 0){
    if (withdrawal < balance){
        balance -= withdrawal;
        console.log(`Collect your cash ${withdrawal}. Remaining Balance is ${balance}`);
    }
    else{
        console.log("Insuffecient Balance");
    }
}
else{
    console.log("Zero Balance cannot withdraw");
}