<?php

require("./connect.php");

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $data=json_decode(file_get_contents("php://input"),true);
    // $id=$data['id'];

    $response=array();
    $query="SELECT * FROM `users`";
    $result=$conn->query($query);
    if($result->num_rows > 0){
            while($row=$result->fetch_assoc()){
                $response[]=$row;
            
            }
      
            // $response['message']="lOGGED IN SUCCESSFULLY";
    }
    // else{
    //     $response['message']="Email Or Password  Not Valid";
    // }
    echo json_encode($response);
}
$conn->close();



?>