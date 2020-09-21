const storeFname = document.querySelector("#fname");
const storeMname = document.querySelector("#mname");
const storeLname = document.querySelector("#lname");
const nameCheck = document.querySelector(".nameCheck");
var fullName= "";
var fname="";
var mname="";
var lname="";
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

function sendvalues(){
    localStorage.setItem("textvalue",fullName);
    return false;
}
