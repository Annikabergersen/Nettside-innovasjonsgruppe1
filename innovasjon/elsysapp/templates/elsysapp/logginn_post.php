{% load static %}
<html>
<body>

logginn_post <?php echo $_GET["uname"]; ?><br>
Your email address is: <?php echo $_GET["psw"]; ?>

</body>
</html>

<?php
$uname = $_POST["uname"];
$pws = $_POST["psw"];

if ($uname == "Bruker1") {
  if ($pws == "Passord1") {
    header('Location: person1.html');
    exit;
  }
} elseif ($uname == "Bruker2") {
    if ($pws == "Passord2") {
        header('Location: person2.html');
        exit;
    }
} else {
    echo "Feil brukernavn eller passord";
}
?>