
// let personDetails= {
//     // data property
//     firstName: 'Peter',
//     lastName: 'File',
//     email: 'peterfile@gmail',
 
//     // (getter)
//     get personDetails() {
//         return this.firstName,lastName,email; 
//     },
//     //(setter)
//     set changeName(newName) {
//         this.firstName = newName;
//         // new name
//         personDetails.newName = 'IsnotAPeter';

//     }
    
// };

// // callout
// console.log(personDetails.firstName);
// console.log(personDetails.lastName);
// console.log(personDetails.email);
// console.log(personDetails.newName); 

    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Solution 2 using a class
// class PersonDetails{
//     // Private
//     #firstName;
//     #lastName;
//     #email;
//     constructor(firstName, lastName, email) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#email = email;
//     }
//     // FirstName
//     get firstName() {
//         return this.#firstName;
//     }
//     set firstName(value) {
//         this.#firstName = value;
//     }
//     // LastName
//     get lastName() {
//         return this.#lastName;
//     }
//     set lastName(value) {
//         this.#lastName = value;
//     }
//     // Email
//     get email() {
//         return this.#email;
//     }
//     set email(value) {
//         this.#email = value;
//     }
//     // Display
//     display() {
//         console.log(`
//         Name: ${this.firstName}
//         Surname: ${this.lastName}
//         Email: ${this.email}`);
//     }
// }
// let person1 = new PersonDetails("Joel", "Mukanya", "joel@gmail.com");
// person1.display();
// console.log("===========");
// person1.firstName = "Peter";
// person1.lastName = "Henk";
// person1.email = "peter@gmail.com"
// person1.display();

// function addition(e){
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
// }

let btnAddition = document.querySelector('button');
btnAddition.addEventListener('click')



