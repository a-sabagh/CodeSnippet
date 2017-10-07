<?php
/*
 * Easy set variables
 */

 // SQL server connection information
$sql_details = array(
    'user' => 'root',
    'pass' => 'root',
    'db'   => 'users',
    'host' => 'localhost'
);

// DB table to use
$table = "clerks";

 // Table's primary key
$primaryKey = "id";

 // Table's columns
$columns = array(
    array(
        "db"=>"id",
        "dt"=>"DT_RowId",
        "formatter"=>function($d,$row){
            return "row-{$d}";
        }
    ),
    array("db"=>"firstname","dt"=>0),
    array("db"=>"lastname","dt"=>1),
    array("db"=>"position","dt"=>2),
    array("db"=>"office","dt"=>3),
    array(
        "db"=>"startdate",
        "dt"=>4,
        "formatter"=>function($data,$row){
            return "<b>{$data}</b>";
        }
    ),
    array(
        "db"=>"salary",
        "dt"=>5,
        "formatter"=>function ($data,$row){
            return "$".$data;
        }
    ),
);

/*
 * JSON output 
 */
 require_once("lib/ssp.class.php");

 echo json_encode(
     SSP::simple($_GET,$sql_details,$table,$primaryKey,$columns)
 );

