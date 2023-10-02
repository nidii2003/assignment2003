"use strict";
//QUESTION 6
//Stripping Name:
let personNamewithwhitespace = "\ SHAH RUKH KHAN \n ";
console.log("Name with whitespace:");
console.log("{" + personNamewithwhitespace + "}");
let personNamestripped = personNamewithwhitespace.trim();
console.log("\n Name after stripping whitespace:");
console.log("{" + personNamestripped + "}");
