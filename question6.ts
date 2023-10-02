//QUESTION 6
//Stripping Name:
let personNamewithwhitespace :string="\ SHAH RUKH KHAN \n "
console.log("Name with whitespace:");
console.log("{"+ personNamewithwhitespace +"}");
let personNamestripped: string=personNamewithwhitespace.trim();
console.log("\n Name after stripping whitespace:");
console.log("{"+personNamestripped +"}");