<?php
require("conn.php");

$sql ="SELECT * FROM user";
$result = $conn->query($sql);
$rows=array();
if($result->num_rows>0){
while($row=$result->fetch_assoc()){
    $rows[]=$row;
}

}
echo json_encode($rows);
$conn->close()

?>