let guestlisst = ["malaika","asma","zobi"];
let jz;
for(jz=0;jz<guestlisst.length;jz++)
console.log("You are cordially invited to dinner party at my place.Join us for a night of great food and better company dear "+guestlisst[jz] + ".");
//Guest who is not coming
let guestdcline = "asma";
console.log(guestdcline + "cannot make it on the dinner party");
// New person
let new_guest = "jazzy";
let indxofdecline = guestlisst.indexOf(guestdcline);
if(indxofdecline!==-1)
{
   guestlisst[indxofdecline]=new_guest;
}
console.log("updated guest list");
console.log(guestlisst);
for(jz=0;jz<guestlisst.length;jz++)
    console.log("You are cordially invited to dinner party at my place.Join us for a night of great food and better company dear "+guestlisst[jz] + ".");
//i=Inform people you fiund a bigger table
console.log("Great news! I found a bigger dinner table.");
// new guest at the beigning of array
guestlisst.unshift("zainab");
//Add new guest to the middle
let midleindex = Math.floor(guestlisst.length/2);
guestlisst.splice(midleindex,0,"anaya");
//Use append() to add one new guest to he end of list
guestlisst.push("sara");
// Print new list
for(jz=0;jz<guestlisst.length;jz++)
{
    console.log("you are cordially invited to the dinner party at my place." + guestlisst + ".");

}