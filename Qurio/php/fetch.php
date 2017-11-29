<?php

$servername = "localhost";
$username = "root";
$password = "shubhi";
$dbname = "quora";


$conn = new

mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id, question, answer, star FROM questions WHERE location = $_GET['city'] ";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["question"]. " " . $row["answer"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>

