<?php
 
$connection = mysqli_connect("localhost", "root", "", "nikola");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }


if (isset($_POST["do_insert"]))
{
    $a = $_POST["prvi"];
    $b = $_POST["drugi"];
    $c = $_POST["treci"];
    $d = $_POST["cetvrti"];
    $e = $_POST["peti"];
    $f = $_POST["sesti"];
    $g = $_POST["sedmi"];
    $h = $_POST["osmi"];
    $m = $_POST["deveti"];
    $n = $_POST["deseti"];
    $y = $_POST["jedanaesi"];
     
    $sql = "INSERT INTO johnny(prvi, drugi,treci,cetvrti,peti,sesti,sedmi,osmi,deveti,deseti,jedanaesti) VALUES ('$a', '$b','$c','$d','$e','$f','$g','$h','$m','$n','$y')";
    mysqli_query($connection, $sql);
 
    echo "Record has been inserted successfully.";
    exit();
}







?>