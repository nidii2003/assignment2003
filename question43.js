"use strict";
const magicians = ["Aladdin", "David", "Lalisar", "John"];
const show_magicians = (magiciansArr) => {
    magiciansArr.map((magician) => {
        console.log(magician);
    });
};
const mke_great = (magiciansArr) => {
    const arr = [];
    magiciansArr.map((name) => {
        arr.push("The Great " + name);
    });
    return arr;
};
let new_arr = mke_great(magicians);
console.log("Original: ");
show_magicians(magicians);
console.log("New Array: ");
show_magicians(new_arr);
