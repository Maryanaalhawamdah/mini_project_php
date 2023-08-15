let userObject={};
let firstNameFlag=0;
let middleNameFlag=0;
let lastNameFlag=0;
let familyNameFlag=0;
let emailFlag=0
let confEmailFlag=0;
let passwordFlag=0;
let confPasswordFlag=0
let mobileFlag=0;
let bdateFlag=0;

let up=0;
let lw=0;
let nm=0;
let sp=0;
let sc=0;
let lg=0;


//first name field
let firstName=document.getElementById("fName");
firstName.addEventListener("focus",function(){
    document.getElementById("fNameP").style.display="block";
})
firstName.addEventListener("blur",function(){
    document.getElementById("fNameP").style.display="none";
})
firstName.addEventListener("keyup",function(){
    let fNameRE=/[a-zA-Z]{3,}/g;
    console.log(firstName.value.match(fNameRE)==firstName.value);
    if(firstName.value.match(fNameRE)==firstName.value){
        document.getElementById("fNameP").classList.remove("invalid");
        document.getElementById("fNameP").classList.add("valid");
        firstNameFlag=1;
    }else{
        document.getElementById("fNameP").classList.remove("valid");
        document.getElementById("fNameP").classList.add("invalid");
    }
})


//middle name field
let middleName=document.getElementById("mName");
middleName.addEventListener("focus",function(){
    document.getElementById("mNameP").style.display="block";
})
middleName.addEventListener("blur",function(){
    document.getElementById("mNameP").style.display="none";
})
middleName.addEventListener("keyup",function(){
    let mNameRE=/[a-zA-Z]{3,}/g;
    console.log(firstName.value.match(mNameRE)==firstName.value);
    if(middleName.value.match(mNameRE)==middleName.value){
        document.getElementById("mNameP").classList.remove("invalid");
        document.getElementById("mNameP").classList.add("valid");
        middleNameFlag=1;
    }else{
        document.getElementById("mNameP").classList.remove("valid");
        document.getElementById("mNameP").classList.add("invalid");
    }
})
//last name field
let lastName=document.getElementById("lName");
lastName.addEventListener("focus",function(){
    document.getElementById("lNameP").style.display="block";
})
lastName.addEventListener("blur",function(){
    document.getElementById("lNameP").style.display="none";
})
lastName.addEventListener("keyup",function(){
    let lNameRE=/[a-zA-Z]{3,}/g;
    if(lastName.value.match(lNameRE)==lastName.value){
        document.getElementById("lNameP").classList.remove("invalid");
        document.getElementById("lNameP").classList.add("valid");
        lastNameFlag=1;
    }else{
        document.getElementById("lNameP").classList.remove("valid");
        document.getElementById("lNameP").classList.add("invalid");
    }
})
//Family name field
let familyName=document.getElementById("familyName");
familyName.addEventListener("focus",function(){
    document.getElementById("familyNameP").style.display="block";
})
familyName.addEventListener("blur",function(){
    document.getElementById("familyNameP").style.display="none";
})
familyName.addEventListener("keyup",function(){
    let familyNameRE=/[a-zA-Z]{3,}/g;
    if(familyName.value.match(familyNameRE)==familyName.value){
        document.getElementById("familyNameP").classList.remove("invalid");
        document.getElementById("familyNameP").classList.add("valid");
        familyNameFlag=1;
    }else{
        document.getElementById("familyNameP").classList.remove("valid");
        document.getElementById("familyNameP").classList.add("invalid");
    }
})
//Email field
let email=document.getElementById("email");
email.addEventListener("focus",function(){
    document.getElementById("emailP").style.display="block";
})
email.addEventListener("blur",function(){
    document.getElementById("emailP").style.display="none";
})
email.addEventListener("keyup",function(){
    let emailRE=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // let matchResult=email.value.match(emailRE);
    if(email.value.match(emailRE)){
        document.getElementById("emailP").classList.remove("invalid");
        document.getElementById("emailP").classList.add("valid");
        emailFlag=1;
    }else{
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
    }

})
//Password field
let password=document.getElementById("Password");
password.addEventListener("focus",function(){
    document.getElementById("capitalPass").style.display="block";
    document.getElementById("letterPass").style.display="block";
    document.getElementById("numberPass").style.display="block";
    document.getElementById("lengthPass").style.display="block";

})
password.addEventListener("blur",function(){
    document.getElementById("capitalPass").style.display="none";
    document.getElementById("letterPass").style.display="none";
    document.getElementById("numberPass").style.display="none";
    document.getElementById("lengthPass").style.display="none";
})

password.addEventListener("keyup",function(){
    // let passwordRE=/(^[A-Z])(?=.*\d)(?=.*[a-z]).{8,32}/g;
    
    var upperCaseLetters = /([A-Z])/g;
    if(password.value.match(upperCaseLetters)) {  
        capitalPass.classList.remove("invalid");
        capitalPass.classList.add("valid");
        up=1;
    } else {
        capitalPass.classList.remove("valid");
        capitalPass.classList.add("invalid");
    }
    var lowerCaseLetters = /(?=.*[a-z])/g;
    if(password.value.match(lowerCaseLetters)) {  
        letterPass.classList.remove("invalid");
        letterPass.classList.add("valid");
        lw=1;
    } else {
        letterPass.classList.remove("valid");
        letterPass.classList.add("invalid");
    }
    var numbers = /(?=.*\d)/g;
    if(password.value.match(numbers)) {  
        numberPass.classList.remove("invalid");
        numberPass.classList.add("valid");
        nm=1;
    } else {
        numberPass.classList.remove("valid");
        numberPass.classList.add("invalid");
    }
    if(password.value.length >= 8 && password.value.length<=32) {
        lengthPass.classList.remove("invalid");
        lengthPass.classList.add("valid");
        lg=1;
    } else {
        lengthPass.classList.remove("valid");
        lengthPass.classList.add("invalid");
    }if(up && lw && nm && lg){
        passwordFlag=1;
    }
})

//confirm Password field
let confPassword=document.getElementById("conpassword");
confPassword.addEventListener("focus",function(){
    document.getElementById("confPassP").style.display="block";
})
confPassword.addEventListener("blur",function(){
    document.getElementById("confPassP").style.display="none";
})
confPassword.addEventListener("keyup",function(){
    if(password.value===confPassword.value){
        console.log("valid");
        document.getElementById("confPassP").classList.remove("invalid");
        document.getElementById("confPassP").classList.add("valid");
        confPasswordFlag=1;
    }else{
        console.log("in-valid");
        document.getElementById("confPassP").classList.remove("valid");
        document.getElementById("confPassP").classList.add("invalid");
    }
})
//Mobile field
let mobile=document.getElementById("mobile");
mobile.addEventListener("focus",function(){
    document.getElementById("mobileP").style.display="block";
})
mobile.addEventListener("blur",function(){
    document.getElementById("mobileP").style.display="none";
})
mobile.addEventListener("keyup",function(){
    let mobileRE=/[0-9]{14}/;
    if(mobile.value.match(mobileRE)==mobile.value){
        document.getElementById("mobileP").classList.remove("invalid");
        document.getElementById("mobileP").classList.add("valid");
        mobileFlag=1;
    }else{
        document.getElementById("mobileP").classList.remove("valid");
        document.getElementById("mobileP").classList.add("invalid");
    }
})

//Birth field
let bdate=document.getElementById("bdate");
bdate.addEventListener("blur",function(){
    document.getElementById("dateP").style.display='none';
});
bdate.addEventListener("change",function(){
    let birthDate=document.getElementById("bdate").value;
    birthDate=new Date(birthDate);//convert from string to obj
    totalAge=Date.now()-birthDate.getTime();//mill second
    console.log(typeof(totalAge/1000/60/60/24));
    ageyear=new Date (totalAge);//convert millsecond to date start from 1970
    ageyear=Math.abs(ageyear.getUTCFullYear()-1970);
    // console.log(ageyear);
    if(ageyear<16){
        document.getElementById("dateP").style.display='block';
        dateP.classList.remove("valid");
        dateP.classList.add("invalid");
    }else{
        document.getElementById("dateP").style.display='block';
        dateP.classList.remove("invalid");
        dateP.classList.add("valid");
        bdateFlag=1;
    }
})

if(firstNameFlag && middleNameFlag && lastNameFlag &&familyNameFlag &&emailFlag  && passwordFlag && confPasswordFlag && mobileFlag &&bdateFlag){
    event.preventDefault();

}


// function fetchUsers(){

//     fetch("read.php")
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//     })
// }




//Event Listener for form submission
document.getElementById("registrationForm").addEventListener("submit",function(e){
e.preventDefault();

var fname = document.getElementById("fName").value;
var mname = document.getElementById("mName").value;
var lname = document.getElementById("lName").value;
var familyname = document.getElementById("familyName").value;
var email = document.getElementById("email").value;
var password = document.getElementById("Password").value;
var mobile = document.getElementById("mobile").value;
var birth = document.getElementById("bdate").value;

fetch("create.php",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({fname:fname,
        mname:mname,
        lname:lname,
        familyname:familyname,
        email:email,
        password:password,
        mobile:mobile,
        birth:birth}),
})
.then(response => response.json())
.then(data=>{
    if(data.message=="Email Not Valid"){
        document.getElementById("notValidP").textContent="Email Not Valid";
        document.getElementById("notValidP").style.display="block";
        }else{
    document.getElementById("fName").value="";
    document.getElementById("mName").value="";
    document.getElementById("lName").value="";
    document.getElementById("familyName").value="";
    document.getElementById("email").value="";
    document.getElementById("Password").value="";
    document.getElementById("mobile").value="";
    document.getElementById("bdate").value="";

   window.location.href="log.html";
        }
})
.catch(error => {
    console.error("Error:", error);
})

})
