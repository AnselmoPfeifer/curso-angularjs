<?php
    $valor1 = 98555800;
    $valor2 = 20099888700;
?>

<!DOCTYPE html>
<html ng-app>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <h1>Helo {{ <?php echo $valor1;?> + <?php echo $valor2;?>}}  </h1>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.js"></script>
</body>
</html>