const name= document.querySelector(".name");
// replaces the name in the bio section with full name in localstorage
name.innerHTML=localStorage.getItem("textvalue");
const address= document.querySelector(".address");
// replaces the address in the bio section with address in localstorage
address.innerHTML=localStorage.getItem("address");
const email= document.querySelector(".email");
// replaces the email in the bio section with email in localstorage
email.innerHTML=localStorage.getItem("femail");
const number= document.querySelector(".number");
// replaces the phone number in the bio section with phone number in localstorage
number.innerHTML=localStorage.getItem("phone");