// q1. Object ke andar array store karo.
// const personDetails = {
//     name : "Tousif",
//     age : 22,
//     isStudent : true,
//     favMovies : ["Mission Impossible", "SpiderMan", "Weak Hero", "The K2"],

// }
// console.log(personDetails);

// q2. Object ke andar function banao.
// const personDetails = {
//     name : "Tousif",
//     age : 22,
//     isStudent : true,
//     sayHi : function(){
//         console.log(`Hii ${this.name}`);
//     }

// }
// personDetails.sayHi();

// q3. Nested object access karo.
// const personDetails = {
//     name : "Tousif",
//     age : 22,
//     isStudent : true,
//     address :{
//         PinCode : "12344",
//         houseNumber : 34,
//     }
// }
// console.log(personDetails.address.houseNumber);

// q4. Object ko clone karo.
// const obj1 ={
//     name : "ali",
//     age : 22,
// }
// const obj2 = {...obj1};
// obj1.age = 23;
// console.log(obj1);
// console.log(obj2);

// q5 Object ko loop me print karo.
const personDetails = {
    name : "Tousif",
    age : 22,
    isStudent : true,
}
for (const key in personDetails) {
    console.log(key, personDetails[key]);
}