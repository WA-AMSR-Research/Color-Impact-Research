
<?php

function sendList( ){
  if ( $_SERVER["REQUEST_METHOD"] === "GET" ){
    $directory = "uploadFiles";
    if ( ! file_exists( $directory ) ){
        return [-1, "internal error E1"];
    }

    $files = scandir($directory);

    $jsonlist = array();
    for($i = 0; $i < count($files); $i++){
      $f = $files[$i];
      if ( strlen($f) > 5 ){
        if ( substr($f, -5) === ".json" ){
          array_push($jsonlist, $f);
        }
      }
    }
    return [ 0, $jsonlist];

  } else {
    return [-1, "invalid request E2"];
  }
}

$ret = sendList();
echo json_encode( $ret, true );

?>
