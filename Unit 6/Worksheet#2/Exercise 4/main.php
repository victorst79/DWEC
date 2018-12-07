<?php
    $q = $_REQUEST["q"];
    $result = "";
    $names = array("Ana","Brittany","Cinderella","Diana","Eva","Fiona","Gunda","Hege","Inga","Johanna","Kitty","Linda","Nina","Ophelia","Petunia","Amanda","Raquel","Cindy");  

    if($q !== 0){        
        foreach ($names as $key => $value) {
            if($value != $q){
                $result = "Valid Name";
                break;
            }else if($value == $q){
                $result = "Try another name, the name ".$q.rand(0,10)." is available";
                break;
            }
        }
    }

    echo $result;
?>