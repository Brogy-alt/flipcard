// Contuctor

// example 1
// function personDetails(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }
// let person 1 = new personDetails

// function personData (name, interest,age){
//     return {
//         firstName:name,
//         interests:interest,
//         age:age,
//     }
// }

// let user = personData ("Jay-Z", "Beyonce's Ass", "52")
// console.log(`Name:${user.firstName}\nInterests:${user.interests}\nAge:${user.age}`);

// constructor function
function Details(firstName,surname,email){
    this.firstName = firstName;
    this.surname = surname;
    this.email = email;
    this.coding =()=>{
        console.log("Busy bro")
    }
}

let person1 = new Details('Joel', 'Mukanya', 'joel@gmail.com');
Details.prototype.display = ()=>{
    console.log("Hello There");
}
console.table(person1);


