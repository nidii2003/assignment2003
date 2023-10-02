"use strict";
//Updated guestlist
//add a new invite
let guestlists = ["malaika", "asma", "zobi"];
let t;
for (t = 0; t < guestlists.length; t++)
    console.log("You are cordially invited to dinner party at my place.Join us for a night of great food and better company dear " + guestlists[t] + ".");
//Guest who is not coming
let guestdecline = "asma";
console.log(guestdecline + "cannot make it on the dinner party");
// New person
let newguest = "jazzy";
let indexofdecline = guestlists.indexOf(guestdecline);
if (indexofdecline !== -1) {
    guestlists[indexofdecline] = newguest;
}
console.log("updated guest list");
console.log(guestlists);
for (t = 0; t < guestlists.length; t++)
    console.log("You are cordially invited to dinner party at my place.Join us for a night of great food and better company dear " + guestlists[t] + ".");
