<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Consulta los mensajes desde la base de datos
$sql = "SELECT * FROM messages ORDER BY id DESC";
$result = $conn->query($sql);

// Genera el HTML para mostrar los mensajes
$html = "";
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $username = $row["username"];
        $message = $row["message"];
        $html .= "<p><span class='username'>$username:</span> $message</p>";
    }
}

$conn->close();

echo $html;
?>