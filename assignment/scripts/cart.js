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

/*Update the required `addItem` function to:
  - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
  - If an item was added to the array, return `true`
  - If there was no room and the item could not be added return `false` */

function addItem(item) {
  if (isFull() === false) { //checks if basket full
    basket.push(item);
    return true;
    console.log('item added:', item);
  }
  return false;
} // end addItem


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
} // end listItems
/*- Create a function called `empty`. It should:
  - reset the `basket` to an empty array */
//function to empty basket
function empty(basket) {
  basket.length = 0;
  return true;
} //end empty check
console.log("Emptying basket");
console.log("Checking if basket empty:", empty(basket));

/*Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems)
 */
/*  failed code: function isFull(basket, maxItems) {
  if (basket.length <= maxItems) {
    return false;
  } else {
    return true;
  }
}*/
function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
} //end isFull

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
