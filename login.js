
 let email=document.getElementById("email");
 let password=document.getElementById("password");
 let btn=document.getElementById("signInId");
 let date=new Date();
 btn.addEventListener("click",function(event){
     event.preventDefault();
     fetch("read.php",{
         method: "POST",
         headers:{
             "Content-Type":"application/json",
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
             
    for(i=0;i<data.user.length;i++){

        if(data.user[i]["email"]==emailField.value && data.user[i]["password"]==passwordField.value){
            // alert("Welcome "+ users[i]["firstName"] + "!!");
            document.getElementById("emailP").style.display="none";
            document.getElementById("passwordP").style.display="none";
            window.location.href="result.html";
        ;}
        if(data.user[i]["email"]==emailField.value && data.user[i]["password"]!=passwordField.value){
            document.getElementById("emailP").style.display="none";
            document.getElementById("passwordP").style.display="block";
            document.getElementById("passwordP").classList.add("invalid");
            console.log("error pass");
            break;}
    }
    if(i==data.user.length){
        document.getElementById("emailP").style.display="block";
        document.getElementById("emailP").classList.add("invalid");
        document.getElementById("passwordP").style.display="none";
        console.log("error email");
    }
             window.location.href="result.html";
         }else{
             document.getElementById("invalidP").textContent=data['message'];
         }
         })
     .catch(error=>{
         alert("Error:",error);
     })
 }) 
   
   
    
    
    
    
