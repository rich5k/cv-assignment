const storeFname = document.querySelector("#fname");
const storeMname = document.querySelector("#mname");
const storeLname = document.querySelector("#lname");
const nameCheck = document.querySelector(".nameCheck");

var fullName= "";
var fname="";
var mname="";
var lname="";


storeFname.addEventListener('input', letter =>{
    fname= letter.target.value.toUpperCase();
})

storeMname.addEventListener('input', letter =>{
    mname=letter.target.value.toUpperCase();
})


storeLname.addEventListener('input', letter =>{
    lname=letter.target.value.toUpperCase();
})


const storeAddress= document.querySelector("#address");
var address="";
storeAddress.addEventListener('input', letter =>{
    address= letter.target.value;
    
})
const storePhone= document.querySelector("#phoneNumber");
var phoneNum="";
storePhone.addEventListener('input', letter =>{
    phoneNum= letter.target.value;
    
    console.log(phoneNum);
})

const storeEmail= document.querySelector("#email");
var email="";
storeEmail.addEventListener('input', letter =>{
    email= letter.target.value;
    
    console.log(email);
})
console.log(email);
function sendnames(){
    fullName= lname+" "+fname+" "+mname;
    localStorage.setItem("textvalue",fullName);
}
function sendaddress(){
    localStorage.setItem("address",address);
}
function sendemail(){
    localStorage.setItem("femail",email);
}
function sendphone(){
    localStorage.setItem("phone",phoneNum);
}
function sendvalues(){
    sendnames();
    sendemail();
    sendphone();
    sendaddress();
    return false;
}

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

function formValid(e) {
    if(!(validateFname(e)&& validateMname(e) && validateLname(e)&&validateAddress(e)&&validatePhone(e))){
        e.preventDefault();
    }
    return false;
  } 