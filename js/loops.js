//
const passwordGen = "123qwerty";
let password = prompt("Enter your password");
// password == passwordGen ? console.log("Valid!") : console.log("Wrong Password");
//
// let x = 9;
// console.log(x++);//9
// console.log(x); //10

for(let i = 1;i < 3;){
  // password == passwordGen ? console.log("Valid!") : console.log("Wrong Password");
  if(password == passwordGen){
    console.log("Valid!");
    break
  }
    password = prompt("Invalid Password\nEnter your password again");
  // break & continue
}
