"use strict";
function showw_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makke_great(magicianss) {
    for (let iv = 0; iv < magicianss.length; iv++) {
        magicianss = ["the Great " + magicianss[iv]];
    }
}
const magicianNames = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];
{
    makke_great(magicianNames);
    showw_magicians(magicianNames);
}
