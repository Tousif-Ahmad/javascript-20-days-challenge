// q1. Default parameter ka use karke function banao.
// function intro(name = "Guest"){
//     console.log(`Hello My Name is ${name}`);
// }
// intro("ali")
// intro()

// q2. Function expression ka use karo.
// const add = function(num1, num2){
//     return num1 + num2;
// }
// console.log(add(10,20));

// q3. Arrow function ka use karo.
// const multiply = (num1, num2)=>{
//     return num1 * num2
// }
// console.log(multiply(10,3));

// q4. Function ke andar function banao.

// function outer(){
//     const a = 10
//     function inner(){
//         console.log(a);
//     }
//     inner()
// }
// outer()

// q5. Callback function ka example banao.
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Ali', sayGoodbye);
