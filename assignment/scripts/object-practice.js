console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/

  // TODO - add properties here
const me = {
  firstName: 'Langston',
  middleName: 'Mandela',
  lastName: 'Johnson',
  hasSiblings: true,
  shoeCount: 20,
  favThreeFoods: [ 'Tiramisu', 'Sushi', 'French Onion Soup' ]
};

console.log( 'A little about me:', me );

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = me.firstName + ' ' + me.middleName + ' ' + me.lastName; //should display Langston Mandela Johnson
console.log( 'My entire name is:', fullName );



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log( 'Here is the first food I listed in my favThreeFoods array: ', me.favThreeFoods[0] ); // First favorite food
console.log( 'Here is the last food I listed in my favThreeFoods array: ', me.favThreeFoods[me.favThreeFoods.length - 1] ); // Last favorite food

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1 ------ (I literally just got a couple pairs!! hence the 2, I'll take the demerit lol)
  - Console.log your updated shoe count. 
*/

console.log( 'Current shoe count:', me.shoeCount );
console.log( 'Just copped the the Billie Ellish 88, and the Torre Mid weather proof from ACG' );
me.shoeCount += 2; // Adding 2 new pairs of shoes
console.log( 'Updated shoe count:', me.shoeCount );

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'Green'; // Adding a new property
console.log(me); // The string 'Green' should appear as an item listed within the 'me' object