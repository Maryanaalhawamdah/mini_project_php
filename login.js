
 let email=document.getElementById("email");
 let password=document.getElementById("password");
 let btn=document.getElementById("signInId");
 let date=new Date();
 btn.addEventListener("click",function(event){
     event.preventDefault();
     fetch("check.php",{
         method: "POST",
         headers:{
             "Content-Type":"Application/json",
         },
         body:JSON.stringify({
         'email' : email.value,
         'password' : password.value,
         'date':date,
     }),
     })
     .then(response=>response.json())
     .then(data=>{
         if(data['message']=="lOGGED IN SUCCESSFULLY"){
             localStorage.setItem('id',data.user['id']);
             localStorage.setItem('fname',data.user['fName'])
             localStorage.setItem('superUser',data.user['superUser'])
             window.location.href='./welcome.html';
         }else{
             document.getElementById("invalidP").textContent=data['message'];
         }
         })
     .catch(error=>{
         alert("Error:",error);
     })
 }) 
   
   
    
    
    
    for(i=0;i<user.length;i++){

        if(user[i]["email"]==emailField.value && user[i]["password"]==passwordField.value){
            // alert("Welcome "+ users[i]["firstName"] + "!!");
            document.getElementById("emailP").style.display="none";
            document.getElementById("passwordP").style.display="none";
            window.location.href="result.html";
        ;}
        if(user[i]["email"]==emailField.value && user[i]["password"]!=passwordField.value){
            document.getElementById("emailP").style.display="none";
            document.getElementById("passwordP").style.display="block";
            document.getElementById("passwordP").classList.add("invalid");
            console.log("error pass");
            break;}
    }
    if(i==user.length){
        document.getElementById("emailP").style.display="block";
        document.getElementById("emailP").classList.add("invalid");
        document.getElementById("passwordP").style.display="none";
        console.log("error email");
    }
    
