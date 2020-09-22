const storeFname = document.querySelector("#fname");
const storeMname = document.querySelector("#mname");
const storeLname = document.querySelector("#lname");
const nameCheck = document.querySelector(".nameCheck");

var fullName= "";
var fname="";
var mname="";
var lname="";

//takes the first name and capitalizes
storeFname.addEventListener('input', letter =>{
    fname= letter.target.value.toUpperCase();
})
//takes the middle name and capitalizes
storeMname.addEventListener('input', letter =>{
    mname=letter.target.value.toUpperCase();
})

//takes the last name and capitalizes
storeLname.addEventListener('input', letter =>{
    lname=letter.target.value.toUpperCase();
})

//takes the address 
const storeAddress= document.querySelector("#address");
var address="";
storeAddress.addEventListener('input', letter =>{
    address= letter.target.value;
    
})
//takes the phone number 
const storePhone= document.querySelector("#phoneNumber");
var phoneNum="";
storePhone.addEventListener('input', letter =>{
    phoneNum= letter.target.value;
    
    console.log(phoneNum);
})
//takes the email
const storeEmail= document.querySelector("#email");
var email="";
storeEmail.addEventListener('input', letter =>{
    email= letter.target.value;
    
    console.log(email);
})
console.log(email);

// stores the first, middle and last names in localstorage
function sendnames(){
    fullName= lname+" "+fname+" "+mname;
    localStorage.setItem("textvalue",fullName);
}
//stores address in localstorage
function sendaddress(){
    localStorage.setItem("address",address);
}
//stores email in localstorage
function sendemail(){
    localStorage.setItem("femail",email);
}
//stores phone in localstorage
function sendphone(){
    localStorage.setItem("phone",phoneNum);
}
//sends to data to next page 
function sendvalues(){
    sendnames();
    sendemail();
    sendphone();
    sendaddress();
    return false;
}
//validates first name
function validateFname(e){
    if (fname == "") {
        alert("First name must be filled out");
        e.preventDefault();
        return false;
      }
      else{
        return true;
    }
}
//validates middle name
function validateMname(e){
    if (mname == "") {
        alert("Middle name must be filled out");
        e.preventDefault();
        return false;
      }
      else{
        return true;
    }
      
}
//validates last name
function validateLname(e){
    if (lname == "") {
        alert("Last name must be filled out");
        e.preventDefault();
        return false;
      }
      else{
          return true;
      }
      
}
//validates address
function validateAddress(e){
    if (address == "") {
        console.log(address);
        alert("Address must be filled out");
        e.preventDefault();
        return false;
      }
      else{
          return true;
      }
      
}
//validates phone number
function validatePhone(e){
    if (phoneNum == "") {
        alert("Phone number must be filled out");
        alert(phoneNum);
        e.preventDefault();
        return false;
      }
      else{
          if(isNaN(phoneNum)){
            alert("Phone number must be a number");
            alert(phoneNum);
            e.preventDefault();
            return false;
          }
          else{
            return true;
          }
         
      }
      
}
//validates the whole form
function formValid(e) {
    if(!(validateFname(e)&& validateMname(e) && validateLname(e)&&validateAddress(e)&&validatePhone(e))){
        e.preventDefault();
    }
    return false;
  } 