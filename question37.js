"use strict";
function make_shiirt(size = "large", message = "I love TypeScript") {
    console.log(`A ${size} shirt will be printed with the message: "${message}"`);
}
// Call tihe function with default values
make_shiirt();
// Call the function with a medium shirt and the default message
make_shiirt("medium");
// Call the function with a small shirt and a different message
make_shiirt("small", "I love JavaScript");
