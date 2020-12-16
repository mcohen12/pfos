#!/usr/bin/php

<?php

//This better still be working

function get_data($url){
 $ch = curl_init();
 $timeout = 5;
 curl_setopt($ch, CURLOPT_URL, $url);
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
 curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; rv:19.0) Gecko/20100101 Firefox/19.0");
 $data = curl_exec($ch);
 curl_close($ch);
 return $data;
}

$wfo = "fgf";
$gages = ['DRTN8','EGFM5','FGON8','HILN8','HICN8','OSLM5','PBNN8','WHNN8','HIGM5','CRKM5','MKLM5','ALVM5','HLLM5','CLXM5','TWVM5','HNDM5','HWYM5','DILM5','SABM5','ROSM5','SHYM5','ABRN8','VCRN8','LBNN8','KNDN8','WFON8','HWDN8','ENDN8','MPLN8','HGRN8','MTON8','GRNN8','WLHN8','NCEN8'];

foreach($gages as $gage){
 $url = 'https://water.weather.gov/ahps2/crests.php?wfo='.$wfo.'&gage='.$gage.'&crest_type=historic';
 $content = get_data($url);
 $content = explode('<b>Historic Crests</b><br />',$content);
 $content = explode('<b>(P)</b>: Preliminary values subject to further review.<br/>',$content[1]);
// print("content is ".$content[0]);
 $content = explode('<br />',$content[0]);
 $i=0;
 //create object for json
 $point = new stdClass();
 $point->type = "Feature";
 $point->properties = new stdClass();
 $point->properties->gage = $gage;
 //$point->properties->historicCrests = new array(); 
 while($i<count($content) && $i<30){
  $crest = explode(" ",$content[$i]);
  print($crest[1]." ".$crest[4]."\n");
  $crestObj = (object)['height'=>$crest[1],'day'=>$crest[4]]; 
  //$point->properties->historicCrests[] = $crest[1];
  $point->properties->historicCrests[] = $crestObj;
  $i++;
 }
 $histCrests->features[] = $point;
}

file_put_contents("histCrests".$wfo.".json",json_encode($histCrests,JSON_UNESCAPED_SLASHES));
//print($content[4]);

//$content = strip_tags($content);
//$numRecords = substr_count($content, " ft on ");
//print("numRecords is ".$numRecords);
//$crestsArr = array();
//for ($i=1;$i<=$numRecords;$i++){


?>
