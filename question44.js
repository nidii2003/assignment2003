"use strict";
function createSandwichSummary(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected.");
    }
    else {
        console.log("Items included:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log("---------------------");
}
createSandwichSummary("Turkey", "london", "USA");
createSandwichSummary("Ham", "juice", "tomato");
