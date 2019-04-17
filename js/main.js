// Store the location of the list
var elShoppingList = document.getElementById('shoppingList');

// Add some list-items to the list (append each one using +=)
// function printItem(qty, item) {
//   elShoppingList.innerHTML += `<li>${qty} ${item}</li>`;
// }

// printItem(3, "Apples");
// printItem(2, "Steaks");
// printItem(3, "Carrots");
// printItem(10, "Cherries");
// printItem(2, "Boxes of Pasta");


// 1. Create an Array that will hold our shopping list
var myList = [
  { qty: 3,  name: `Apples`,   dept: `produce` },
  { qty: 2,  name: `Steaks`,   dept: `meat` },
  { qty: 24, name: `Cherries`, dept: `produce` },
];


// 2. Write a function called "addToList" that will add new items to our array

function addToList(qtyIn, nameIn, deptIn) {
  // Add something to the array dynamically
  myList.push( { qty: qtyIn, name: nameIn, dept: deptIn } );
  // Reprint my list
  printTheList();
}



document.getElementById('newItem').addEventListener('submit', function (e) {
  // Prevent our application from ACTUALLY submitting (which is to send data elsewhere)
  e.preventDefault();

  // Store the value given by the user
  var theNewItem = document.getElementById('item').value;

  // 4. Add a new item to myList (use the function we created!)
  addToList(1, theNewItem, '');

});


// 3. Write a function that prints the entire array
function printTheList() {
  var htmlList = myList.map( item => `
    <li class="${item.dept}">
      <input type="number" value="${item.qty}">
      <span>${item.name}</span>
    </li>` )
  elShoppingList.innerHTML = htmlList.join('');
}


// Print the list for the very first time
printTheList();

// Rocco will:
//    - Write a quick form
//    - Add some styling
// As a group:
//    - Talk about events
//    - Use that knowledge to get info from the user
//    - Add the new item to our myList
//    - Print out the list
