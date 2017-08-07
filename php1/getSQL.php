<?php
include('config.php');
// Create connection
//$con = mysqli_connect('localhost','farzat','California@81',"FarzatDB");
//$db = mysqli_select_db('FarzatDB', $con);
// Check connection
if(! $con ) {
    die('Could not connect: ' . mysqli_error());
}else{
    echo 'coonected';
}

if ($db){
    echo 'Error. secsses Tablle';
}else{
    echo "<h1>gut connect</h1>";
}

?>

<html>
<head>

</head>
<body>

    <table width="600" border="1" cellspacing="1" cellpadding="2">
        <tr>
            <td width="100">product id</td>
            <td width="100">product name</td>
            <td width="100">product price</td>
        </tr>

        <?php

            if (mysqli_connect_errno())
            {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            }

            $result = mysqli_query($con,"SELECT * FROM Products");

            //echo "<table border='1'>
            //<tr>
            //<th>Firstname</th>
            //<th>Lastname</th>
            //</tr>";

            while($row = mysqli_fetch_array($result))
            {
                echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['product_name'] . "</td>";
                echo "<td>" . $row['product_price'] . "</td>";
                echo "</tr>";
            }
            echo "</table>";

            mysqli_close($con);
        ?>

    </table>


</body>
</html>