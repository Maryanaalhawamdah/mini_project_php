<?php
require("conn.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $userFname = $data['fName'];
    $userMname = $data['mName'];
    $userLname = $data['lName'];
    $userFamilyname = $data['familyName'];
    $userEmail = $data['email'];
    $userPassword = $data['Password'];
    $userMobile = $data['mobile'];
    $userBirth = $data['bdate'];

    $sql = "INSERT INTO user (`fname`, `mname`, `lname`, `familyname`, `email`, `password`, `mobile`, `birth`) 
            VALUES ('$userFname', '$userMname', '$userLname', '$userFamilyname', '$userEmail', '$userPassword', '$userMobile', '$userBirth')";

    $response = array();
    if ($conn->query($sql) === true) {
        $response['message'] = "Data stored successfully";
    } else {
        $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
    }
    echo json_encode($response);
}

$conn->close();
?>
