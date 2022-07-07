<?php
if(isset($_POST["pw"])){
  if($_POST["pw"] == "newfag"){
    echo "Correct";
    echo ";";
    echo hash("sha256", "level3hash");
  }else{
    echo "Wrong";
  }
}else{
  echo "you're not supposed to be here.";
}
?>
