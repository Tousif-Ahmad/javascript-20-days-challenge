// q1. Current date print karo.
// let now = new Date();
// console.log(now.toLocaleDateString());

// q2. Current year print karo.
// let now = new Date();
// console.log(now.getFullYear());

// q3. Current month ka naam print karo.
// const monthNames = ["january", "Febuary", "March", "April", "May", "June", "July", "August", "September", "october"];
// const currentDate = new Date();
// const currentMonth = monthNames[currentDate.getMonth()];
// console.log(currentMonth);

// q4. Current time HH:MM format me print karo.
// const currentDate = new Date();
// const hour = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const time = `${hour < 10 ? "0" + hour : hour }:${minutes < 10 ? "0" + minutes : minutes}`;
// console.log(time);

// q5. Ek date set karo aur uska day print karo.
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const currentDate = new Date();
const date = currentDate.getDay();
console.log(days[date]);