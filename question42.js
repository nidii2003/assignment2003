"use strict";
function show_magicianns(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const modifiedMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}
const originalMagicianNames = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];
const modifiedMagicianNames = make_great(originalMagicianNames);
console.log("Original Magicians:");
show_magicians(originalMagicianNames);
console.log("\nModified Magicians");
show_magicians(modifiedMagicianNames);
