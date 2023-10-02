"use strict";
//More condition test:
//test for equality and enequality with strings
let name1 = 'nidii';
let name2 = 'asma';
console.log(name1 == 'nidii'); //true
console.log(name1 !== 'nidii'); //false
console.log(name1 === name2); //false
console.log(name1 !== name2); //true
//test using the lower case function
let text = 'Hi,Barbie!';
let lowercasetext = text.toLowerCase();
console.log(lowercasetext === 'hi,barbie!'); //true
console.log(lowercasetext !== 'Hi,Barbie!'); //false
//Numerical tests involving equality and inequality,greater then and less then etc
let no1 = 5;
let no2 = 4;
console.log(no2 === 4); //true
console.log(no2 === no1); //falsse
console.log(no1 > no2); //true
console.log(no2 < no1); //true
console.log(no1 >= 7); //false
console.log(no2 <= 10); //true
//test using "and" and "or" operator
let honest = true;
let guilty = false;
console.log(honest && guilty); //false
console.log(honest || guilty); //true
console.log(honest && !guilty); //true
//Test weather an item is in the array
let person = ["nidi", "ravian", "isma"];
console.log(person.includes("isma")); //true
console.log(person.includes("zayn")); //false
//Test weather an item is not in the array
console.log(!person.includes("zayn")); //true
console.log(!person.includes("isma")); //false
