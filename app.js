let fname=localStorage.getItem('fname');
let id=localStorage.getItem('id');
let flag=localStorage.getItem('superUser');
document.querySelector('h1').textContent="Welcome "+fname;
let superDiv=document.getElementById("superUserDiv");
let table=document.getElementById("tbl");
if(flag==0){
    fetch("read.php",{
        method: "POST",
        headers:{
            "Content-Type":"Application/json",
        },
        body:JSON.stringify({
        id:id,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("userdiv").style.display='block';
        document.getElementById("nameP").textContent="Full Name : " + data.user['fname'] + " " + data.user['mname'] + " " + data.user['lname'] + " " + data.user['familyname'];
        document.getElementById("emailP").textContent="Email : " + data.user['email'];
        document.getElementById("mobileP").textContent="Mobile : +" + data.user['mobile'];
        })
    .catch(error=>{
        alert("Error:",error);
    })
}else {
    fetch("readSuper.php",{
        method: "POST",
        headers:{
            "Content-Type":"Application/json",
        },
        body:JSON.stringify({
        // id:id,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        
        data.map(element => {

            let userDiv = document.createElement('div');
            let idP = document.createElement('p');
            let nameP = document.createElement('p');
            let emailP = document.createElement('p');
            let passwordP = document.createElement('p');
            let birthDateP = document.createElement('p');

            
            idP.textContent ="ID : " + element['id'];
            nameP.textContent ="Name : " +  element['fName'] + " " + element['mName'] + " " + element['lName'] + " " + element['familyName'];
            emailP.textContent="Email : " + element['email'];
            passwordP.textContent="Password : " + element['Password'];
            birthDateP.textContent="BirthDate : " + element['bDate'];

            
            userDiv.appendChild(idP);
            userDiv.appendChild(nameP);
            userDiv.appendChild(emailP);
            userDiv.appendChild(passwordP);
            userDiv.appendChild(birthDateP);
            superDiv.appendChild(userDiv);
            userDiv.style.border='1px solid black';
            userDiv.style.padding='1%';

            let userRow = document.createElement('tr');
            let idD = document.createElement('td');
            let nameD = document.createElement('td');
            let emailD = document.createElement('td');
            let passwordD = document.createElement('td');
            let birthDateD = document.createElement('td');

            idD.textContent =element['id'];
            nameD.textContent =element['fName'] + " " + element['mName'] + " " + element['lName'] + " " + element['familyName'];
            emailD.textContent=element['email'];
            passwordD.textContent=element['Password'];
            birthDateD.textContent=element['bDate'];

            userRow.appendChild(idD);
            userRow.appendChild(nameD);
            userRow.appendChild(emailD);
            userRow.appendChild(passwordD);
            userRow.appendChild(birthDateD);
            tableBody.appendChild(userRow);
        })
        })
    .catch(error=>{
        alert("Error:",error);
    })
}