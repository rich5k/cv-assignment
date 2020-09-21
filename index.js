const storeFname = document.querySelector("#fname");
const storeMname = document.querySelector("#mname");
const storeLname = document.querySelector("#lname");
const nameCheck = document.querySelector(".nameCheck");

var fullName= "";
var fname="";
var mname="";
var lname="";
// console.log(storeFname);

storeFname.addEventListener('input', letter =>{
    fname= letter.target.value;
    if(mname.length!=0){
        fullName= fname+ " "+ mname;
        nameCheck.textContent=fullName;
    }
    else{
        fullName=fname;
        nameCheck.textContent=fullName;

    }
    console.log(fullName);
})

storeMname.addEventListener('input', letter =>{
    mname=letter.target.value;

    if(mname[mname.length-1]==fullName[fullName.length-1]){
        fullName=fullName+ mname[mname.length-1];
        nameCheck.textContent=fullName;
        
    }
    else{
        fullName=fname+ " "+ mname;
        nameCheck.textContent=fullName;

    }
    console.log(fullName);
})
// fullName= fullName+newName;

storeLname.addEventListener('input', letter =>{
    lname=letter.target.value;
    nameCheck.textContent=lname+" "+fullName+" "+mname;
    console.log(fullName);
})
fullName= fname+mname+lname;

const address= document.querySelector("#address").value;
const phoneNum= document.querySelector("#phoneNumber").value;
console.log(address);
const email= document.querySelector("#email").value;
console.log(email);
function sendnames(){
    localStorage.setItem("textvalue",fullName);
}
function sendaddress(){
    localStorage.setItem("address",address);
}
function sendemail(){
    localStorage.setItem("email",email);
}
function sendphone(){
    localStorage.setItem("phone",phoneNum);
}
function sendvalues(){
    sendnames();
    sendaddress();
    sendemail();
    sendphone();
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
    // var x = document.forms["myForm"]["fname"].value;
    // e.preventDefault();
    if(!(validateFname(e)&& validateMname(e) && validateLname(e)&&validateAddress(e)&&validatePhone(e))){
        e.preventDefault();
    }
    // alert(address);
    return false;
  } 