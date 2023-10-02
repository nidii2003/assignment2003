"use strict";
const current_users = [
    "ashuu",
    "hira",
    "laiba",
    "disha",
    "hani",
];
const new_users = [
    "Amna",
    "Zobia",
    "lina",
    "ayesha",
    "hina",
];
new_users.map((name) => {
    if (current_users.includes(name.toLowerCase())) {
        console.log("username", name, "already in use. Please rename yourself");
    }
    else {
        console.log("username", name, "is available");
    }
});
