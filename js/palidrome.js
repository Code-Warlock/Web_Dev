//  forms in JS


// let form = document.forms.palindrome;
// let submitButton = document.querySelector(".sbtn");
//
// let message = document.querySelector('.result');
//
//
// // console.log(submitButton);
// // function alertValue(){
// //   alert("Hello World");
// // }
// form.onsubmit = function(e){
//   e.preventDefault();
//   let input = form.word;
//   let inputValue = input.value.toLowerCase();
//   let listedValue = inputValue.split("");
//   listedValue.reverse();
//   let refWord = listedValue.join("");
//   if(refWord != inputValue || inputValue == ""){
//     // alert("The word is not a palindrome!");
//     message.innerHTML = "The word is not a palindrome!";
//     // return false;
//   }
//   else{
//     message.style.color = "blue";
//     // alert("The word is a palindrome");
//     message.innerHTML = "The word is a palindrome!";
//     // return false;
//   }
// };



// Traversing the DOM code.
const TABLEAU = document.querySelector('table');
const CAPTIONELEMENT = document.createElement("caption");
const CAPTIONTEXT = document.createTextNode("Navbar that was created with tables!");
CAPTIONELEMENT.appendChild(CAPTIONTEXT);
TABLEAU.appendChild(CAPTIONELEMENT);
console.log(TABLEAU);
