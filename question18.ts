//Seeing the world
let countries =["maldives","itly","canada","japan","india"];
//Prinnt the world in its orignal order
console.log("Orignal order:",countries);
//Print the array in alphabetical order without modify the actual list
let sortedalphabatically = [...countries].sort();
console.log("Alphabatical order:", sortedalphabatically);
//Show the array is still in its orignal order
console.log("Orignal order:",countries);
//Print the array in reverse alphabaticall order without changing he order of the orignal list
let sortedReversedAlphabaticallly = [...countries].sort().reverse();
//show the array is still in its orignal ordder
console.log("Orignal order:",countries);
//Reverse the order of the list
countries.reverse();
console.log("reversed order:",countries);
//Reverse the order of the list to get back the orignal order
countries.reverse();
console.log("orignal oder:",countries);
//Sort the array in alphabtical oder
countries.sort();
console.log("sorted Alphabatical order:",countries);
//sort the array in reverse alphabaticall order
countries.sort((a,b)=>b.localeCompare(a));
console.log("Sorted Reverse Alphabatical Order:",countries);