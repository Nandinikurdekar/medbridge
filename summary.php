<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Summary</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="app">

<div class="header">🏥 MedBridge Report</div>

<div class="card">
    <h2>Patient Summary</h2>

    //////////////////////////////////
<?php
$body = $_POST['body'];
$symptom = $_POST['symptom'];
$pain = $_POST['pain'];
$duration = $_POST['duration'];
$notes = $_POST['notes'];

echo "<p><b>🧾 Complaint:</b> $symptom in $body</p>";
echo "<p><b>⏳ Duration:</b> $duration</p>";
echo "<p><b>📊 Pain Level:</b> $pain</p>";
echo "<p><b>📝 Notes:</b> $notes</p>";
?>

<button onclick="window.print()">📄 Download PDF</button>

</div>
</div>

</body>
</html>