let guestlissst = ["malaika","asma","zobi"];
let jaz;
for(jaz=0;jaz<guestlissst.length;jaz++)
console.log("You are cordially invited to dinner party at my place.Join us for a night of great food and better company dear "+guestlissst[jaz] + ".");
//Guest who is not coming
let guestdceline = "asma";
console.log(guestdceline + "cannot make it on the dinner party");
// New person
let newwguest = "jazzy";
let indxoofdecline = guestlissst.indexOf(guestdceline);
if(indxoofdecline!==-1)
{
   guestlissst[indxoofdecline]=newwguest;
}
console.log("updated guest list");
console.log(guestlissst);
for(jaz=0;jaz<guestlissst.length;jaz++)
    console.log("You are cordially invited to dinner party at my place.Join us for a night of great food and better company dear "+guestlissst[jaz] + ".");
//i=Inform people you fiund a bigger table
console.log("Great news! I found a bigger dinner table.");
// new guest at the beigning of array
guestlissst.unshift("zainab");
//Add new guest to the middle
let middleeindex = Math.floor(guestlissst.length/2);
guestlissst.splice(middleeindex,0,"anaya");
//Use append() to add one new guest to he end of list
guestlissst.push("sara");
// Print new list
for(jaz=0;jaz<guestlissst.length;jaz++)
{
    console.log("you are cordially invited to the dinner party at my place." + guestlissst + ".");
}
//print a mesage saying you can invite only two people to dinner
console.log("i can only invite two people for dinner");
// remove the guest from the list untill two name remain
while(guestlissst.length>2)
{
    let removedguest = guestlissst.pop();
    console.log("sorry,"+ removedguest + ",i cannot invite you to the dinner.");
}
//print message to the two remaining guests
for(let jaz=0;jaz<guestlissst.length;jaz++)
{
    console.log("you are still cardially invited to my dinner party at my place,"+ guestlissst[jaz]+".");
}
//Remove the last two names of the people
guestlissst.pop();
guestlissst.pop();
// print the final emoty list
console.log("final guest list:");
console.log (guestlissst);

