// Store the location of the items we wish to interact with (<ol> and <form>)
var elShoppingList = document.getElementById('shoppingList');
var elNewItemForm = document.getElementById('newItem');



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


// 4. When someone submits the form, grab the input and add the new item to the array
elNewItemForm.addEventListener('submit', function (e) {
  // Prevent our application from ACTUALLY submitting (which is to send data elsewhere)
  e.preventDefault();

  // Store the value given by the user
  var theNewItem = document.getElementById('item').value;

  // 4. Add a new item to myList (use the function we created!)
  addToList(1, theNewItem, '');

  // Reset the form
  elNewItemForm.reset();

});


// 3. Write a function that prints the entire array
function printTheList() {

  // MAP each item in the "myList" Array to one <li>, so we have an array of list item stored as strings
  var htmlList = myList.map( item => `
    <li class="${item.dept}">
      <input type="number" class="form-component nmbr" value="${item.qty}">
      <span>${item.name}</span>
    </li>` )

  // JOIN the temporary array of strings together as one long string of HTML, add to the document
  elShoppingList.innerHTML = htmlList.join('');
}


// Print the list for the very first time to start the application
printTheList();
