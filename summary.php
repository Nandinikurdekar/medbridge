<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Report</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="header">📄 MedBridge Report</div>

<div class="app">
<div class="card">

<h2>Patient Summary</h2>

<?php
$body = htmlspecialchars($_POST['body'] ?? '');
$symptom = htmlspecialchars($_POST['symptom'] ?? '');
$pain = htmlspecialchars($_POST['pain'] ?? '');
$duration = htmlspecialchars($_POST['duration'] ?? '');
$notes = htmlspecialchars($_POST['notes'] ?? '');
?>

<div class="report-box">
<strong>Complaint:</strong> <?php echo "$symptom in $body"; ?>
</div>

<div class="report-box">
<strong>Duration:</strong> <?php echo $duration; ?>
</div>

<div class="report-box">
<strong>Pain Level:</strong> <?php echo $pain; ?>/10
</div>

<div class="report-box">
<strong>Notes:</strong> <?php echo $notes ?: "No notes"; ?>
</div>

<button onclick="window.print()">Download Report</button>

</div>
</div>

</body>
</html>