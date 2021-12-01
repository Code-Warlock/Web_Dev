// Creating a basic function in JavaScript

// function sayWelcome(name , status){
//   let x = 90;
//   if(status.toLowerCase().includes("begin")){
//     return "Welcome to JS" + " , " + name;
//   }
//   else{
//     return "So where , " + name + " , did you stop?";
//   }
// }
// console.log(name , status)
// console.log(sayWelcome("Kunle","Expert"));
// console.log(x);
//
//
// let x = 6;
// function higherOrder(){
//
//   function increaseX(){
//     return x ** 2;
//   }
//   return increaseX();
// }
// console.log(
// (
//     function(){
//   return "I just created an anonymous function";
// }
// )()
//
// );

function palindromeChecker(word){
  let wordAsList = word.split("");
  wordAsList.reverse();
  let refinedWord = wordAsList.join("");
  return refinedWord == word
}
while(true){
  let userWord = prompt("Enter a word");
  palindromeChecker(userWord.toLowerCase()) ? alert(userWord + " is a palindrome") : alert(userWord + " is not a palindrome");
  let continueCheck = prompt("Do you have another word").toLowerCase();
  if(continueCheck.includes("n") || continueCheck == ""){
    break;
  }
  // else{
  //   continue;
  // }
}


// console.log(x);

// console.log(speakAnon());
