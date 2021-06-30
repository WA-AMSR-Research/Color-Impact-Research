
<?php

function recieveFile( ){
  if ( $_SERVER["REQUEST_METHOD"] === "POST" ){
    $tempfile = $_FILES['file']['tmp_name'];
    $filename = $_FILES['file']['name'];
    $directory = "uploadFiles";

    if ( ! file_exists( $directory ) ){
      if ( mkdir( $directory, 0777 ) ){
        // success
      } else {
        return [-1, "internal error E1"];
      }
    }

    if ( is_uploaded_file( $tempfile ) ) {
      if ( move_uploaded_file( $tempfile , "{$directory}/{$filename}" ) ) {
        return [ 0, ""];
      } else {
        return [-1, "invalid request E2"];
      }
    } else {
        return [-1, "invalid request E3"];
    }
  } else {
        return [-1, "invalid request E4"];
  }
}

$ret = recieveFile();
echo json_encode( $ret, true );

?>
