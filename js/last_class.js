//  Working with DOM Elements classes and attributes in JS

let button = document.querySelector('a');

// setAttribute() , hasAttribute(), getAttribute() , removeAttribute()
// attributes

// button.setAttribute("class","hide");

// console.log(button.hasAttribute("class"));

// console.log(button.getAttribute("type"))

// button.setAttribute("style","color:red;border:1px solid red;")
// button.removeAttribute("type");


// Classes

// classList , add , remove , toggle , contains

let alert = document.querySelector('.alert');
// // console.log(alert.classList.contains("big-text"));
// console.log(alert.classList.add("big-text"));
// console.log(alert.classList.remove("small-text"));
alert.classList.add("big-text");
alert.classList.remove("small-text");





button.onclick = function(e){
  e.preventDefault();
  if(alert.classList.contains("hide")){
    alert.classList.remove("hide");
    console.log("Yes");
  }
  else{
    alert.classList.add("hide");
    setInterval(function(){
      button.classList.add("hide");
  } , 3000);
  button.innerHTML = "Undo";
  button.classList.add("small-text");

    console.log("No");
  }
}




function consoleLog(){
  console.log("Hello");
}


setTimeout(consoleLog , 8000)
