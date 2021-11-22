let gender = prompt("Enter your gender").toLowerCase();
let age = parseInt(prompt("Enter your age"));
// if(gender == "male" || gender == "boy"){
//   console.log("Welcome to CXONOME CLUB");
// }else{
//   if(age >= 18){
//     console.log("Welcome to CXONOME CLUB");
//   }
//   else{
//     console.log("LEAVE!");
//   }
// }
if(gender){
    console.log("Welcome to CXONOME CLUB");
}else if(age >= 18){
  console.log("Welcome to CXONOME CLUB");
}
else{
      console.log("LEAVE!");

}
