//Dinner guests:
let gustlist = ["malaika","asma","zobi"];
let za;
for(za=0;za<gustlist.length;za++)
console.log("You are cordially invited to dinner party at my place.Join us for a night of great food and better company dear "+gustlist[za] + ".");
//Guest who is not coming
let gustdcline = "asma";
console.log(gustdcline + "cannot make it on the dinner party");
// New person
let neewguest = "zazy";
let inndexofdecline = gustlist.indexOf(gustdcline);
if(inndexofdecline!==-1)
{
 gustlist[inndexofdecline]=neewguest;
}
console.log("updated guest list");
console.log(gustlist);
for(za=0;za<gustlist.length;za++)
    console.log("You are cordially invited to dinner party at my place.Join us for a night of great food and better company dear "+gustlist[za] + ".");
//i=Inform people you fiund a bigger table
console.log("Great news! I found a bigger dinner table.");
// new guest at the beigning of array
gustlist.unshift("zainab");
//Add new guest to the middle
let midlleindex = Math.floor(gustlist.length/2);
gustlist.splice(midlleindex,0,"anaya");
//Use append() to add one new guest to he end of list
gustlist.push("sara");
// Print new list
for(za=0;za<gustlist.length;za++)
{
    console.log("you are cordially invited to the dinner party at my place." + gustlist + ".");
}
//print a mesage saying you can invite only two people to dinner
console.log("i can only invite two people for dinner");
// remove the guest from the list untill two name remain
while(gustlist.length>2)
{
    let removedguest = gustlist.pop();
    console.log("sorry,"+ removedguest + ",i cannot invite you to the dinner.");
}
//print message to the two remaining guests
for(let za=0;za<gustlist.length;za++)
{
    console.log("you are still cardially invited to my dinner party at my place,"+ gustlist[za]+".");
}
//Print the number of people invited to dinner
console.log("number of people invited to dinner:" + gustlist.length);

