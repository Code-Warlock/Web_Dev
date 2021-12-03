// Creating and Use Objects in Javascript.

// let person = {
//   name : "Wedonoson",
//   isTall : true,
//   isDark : true,
//   legs : 2,
//   hands : 2,
//   isAlive : true,
//   isDead : false,
//   hadAccident : function(){
//     if(person.hands < 1 && person.legs > 0){
//       person.legs--
//     }
//     else if(person.hands > 0 && person.legs > 1) {
//       person.hands--
//     }
//   else{
//     person.isAlive = false;
//     person.isDead = true;
//   }
// },
// hadSevereAccident : function(){
//   person.isAlive = false;
//   person.isDead = true;
// }
// }
//
//
// let person2 = new Object();
// person2.name = "Desmond";
// person2.legs = 2;
// person2.hands = 2;
// person2.isAlive = true;
// person2.isDead = false;
// person2.sayName = function(){
//   console.log(person2.name);
// }
//
//
// console.log(person2);
// //
// // }
// // Dot Notation(.)
// console.log(person.name);
// console.log(person.isTall);
// console.log(person.isDark);
// console.log(person.isDark);

// Square brackets Notation.


// console.log(person["name"]);
// console.log(person["isTall"]);
// console.log(person["isDark"]);
// factory Method
function Persons(tname , tlegs , thands){
  return {
    name : tname,
    legs : tlegs,
    hands : thands,
    hadAccident(){
      this.hands -= 1;
    }
  }
}

// Constructor Method
function Persons(tname , tlegs , thands){
      this.name = tname,
      this.legs = tlegs,
      this.hands = thands,
      hadAccident(){
        this.hands -= 1;
      }
}

let person = new Persons("Desmond",2,2);
let person2 = new Persons("Kunle",2,2);
let person3 = new Persons("Sixtus",2,1);
console.log(person.name , person.hands);
console.log(person2.name , person2.hands);
console.log(person3.name , person3.hands);



//
// let name = "Desmond" // String Literal
//
// let name = new String("Desmond"); // String Constructor
//
//
// console.log(name);
