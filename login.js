let signInBtn=document.getElementById("signInId");
let emailField=document.getElementById("email");
let passwordField=document.getElementById("password");

//email field
emailField.addEventListener("focus",function(){
    document.getElementById("emailP").style.display="none";
})


//password field
passwordField.addEventListener("focus",function(){
    document.getElementById("passwordP").style.display="none";
})

//login button field
function fetchUsers(){

    fetch("read.php")
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
    })
}

//Event Listener for form submission
document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault();
 var email = document.getElementById("email").value;
 var password = document.getElementById("password").value;

    
   
    
    
    
    
    
    
    let i=0;
    for(i=0;i<user.length;i++){

        if(user[i]["email"]==emailField.value && user[i]["password"]==passwordField.value){
            // alert("Welcome "+ users[i]["firstName"] + "!!");
            document.getElementById("emailP").style.display="none";
            document.getElementById("passwordP").style.display="none";
            window.location.href="result.html";
        ;}
        if(user[i]["email"]==emailField.value && users[i]["password"]!=passwordField.value){
            document.getElementById("emailP").style.display="none";
            document.getElementById("passwordP").style.display="block";
            document.getElementById("passwordP").classListadd("invalid");
            console.log("error pass");
            break;}
    }
    if(i==user.length){
        document.getElementById("emailP").style.display="block";
        document.getElementById("emailP").classListadd("invalid");
        document.getElementById("passwordP").style.display="none";
        console.log("error email");
    }
    
})