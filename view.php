<?php
include "db.php";

$result = $conn->query("SELECT * FROM patients ORDER BY id ASC");
?>

<!DOCTYPE html>
<html>
<head>
    <title>Patient Records</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="header">MedBridge • Patient Records</div>

<div class="app">
<div class="card">

<h2>All Patient Records</h2>

<table border="1" cellpadding="10" style="width:100%; border-collapse: collapse;">
    <tr>
        <th>ID</th>
        <th>Body</th>
        <th>Symptom</th>
        <th>Pain</th>
        <th>Duration</th>
        <th>Notes</th>
    </tr>

<?php
while($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['body']}</td>
        <td>{$row['symptom']}</td>
        <td>{$row['pain']}</td>
        <td>{$row['duration']}</td>
        <td>{$row['notes']}</td>
    </tr>";
}
?>

</table>

</div>
</div>

</body>
</html>