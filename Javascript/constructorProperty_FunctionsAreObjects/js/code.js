// Constructor Property
/*
When create an object as the below example
it refer as literal object.
It will have a constructor
=========================
NB: A constructor property is a reference to the constructor function that created the instance. Its purpose allows us to check the object type.
*/
// let details = {
//     firstName: 'Joel'
// };
// console.log(details);
/*
Another way you can create an object is 
to use new Object(): let laptop = new Object();
*/
// Create two constructor functions
// function Person(firstName, surname) {
//     this.name = firstName;
//     this.surname = surname;
// }

// function Dog(name) {
//     this.name = name;
// }

// Create objects
// let person1 = new Person('David', 'Henk');
// let dog1 = new Dog('Inga');

// Check if a person is a person 1st way
// if(obj.constructor === Person){
//     console.log("You are a person");
// }else{
//     console.log("You are not a person");
// }

// Check if a person is a person 2nd way
// function testing(obj) {
//     if(obj.constructor !== Person)
//         return "You are not a person";
//     return "You are a person";
// }
// console.log(dog1);
// console.log();

// Make use of instanceof
// console.log(person1 instanceof Person ? "You are a person" : "You are not a person");


/*
Function are objects
====================
Please keep in mind that everything in JavaScript is an object. Expect a primitive data type.

on the console interface
========================
- call a function
- call a function without a parameter
- To see a function as an object please make use 
of console.dir(yourFunctionName);
Check the below example
*/
// function addition(numb1, numb2) {
//     console.log(numb1 + numb2);
// }
// console.dir(addition);
/*
addition.length
addition.name
======
addition.division = function(numb1, numb2) 
{return numb1 / numb2};
addition.developerName = 'Joel Mukanya';
*/

// console.log(person['surname']);
// for(let p of Object.entries(person)) {
//     console.log(p);
// }
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));



// My example My hero Academia
// Constructor function

// function Person (firstName, quirk) {
//     this.name = firstName;
//     this.quirk = quirk;
// }

// function Quirkless (name) {
//     this.name = name;
// }

// let superhero = new Person("Allmight", "One For All");
// let human = new Quirkless("Brogan");

// function testing(obj){
//     if(obj.constructor === Person){
//         console.log(`Name: ${obj.name}\n Quirk: ${obj.quirk}`)
//         console.log("You have a quirk");
//     }else {
//         console.log(`Name: ${obj.name}`)
//         console.log ("You do not have a quirk")
//     }
// }
// // calling it out
// testing(human);

// testing(superhero)

