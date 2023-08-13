console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//- Create a global variable named `basket` and set it to an empty array.
let basket = [];
//Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;
/*- Create a function called `addItem`. It should:
  - take an input parameter for a string `item`
  - add the new item to the global array `basket`. 
  - return `true` indicating the item was added
*/
//created function to add item to global array 'basket' and return true if added

function addItem(item) {
  console.log("Item added:", item);
  basket.push(item);
  return true;
}
console.log(`Basket is ${basket}`);
console.log("Adding apples (expect true)", addItem("apples"));
console.log(`Basket is now ${basket}`);
/* - Create a function called `listItems`. It should:
  - loop over the items in the `basket` array
  - console.log each individual item on a new line
*/
//new function to loop over items in basket array

function listItems(basket) {
  for (let item of basket) {
    console.log(item);
  }
}
/*- Create a function called `empty`. It should:
  - reset the `basket` to an empty array */

function empty(basket) {
  basket.length = 0;
  return true;
}
console.log("Emptying basket");
console.log("Checking if basket empty:", empty(basket));

/*Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems)
 */
/*function isFull(basket, maxItems) {
  if (basket.length <= maxItems) {
    return false;
  } else {
    return true;
  }
}*/
function isFull() {
  if (basket < maxItems) {
    return false;
  } else {
    return true;
  }
}

if (isFull(basket, maxItems)) {
  console.log("The basket is full.");
} else {
  console.log("The basket is not full.");
}

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
