#!/usr/bin/php

<?php

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

$dataFile = fopen("datapfos.js","w") or die("Unable to open file"); 
fwrite($dataFile,"var riverPoints = [\n");
$wfo = "fgf";
$gages = ['DRTN8','EGFM5','FGON8','HILN8','HICN8','OSLM5','PBNN8','WHNN8','HIGM5','CRKM5','MKLM5','ALVM5','HLLM5','CLXM5','TWVM5','HNDM5','HWYM5','DILM5','SABM5','ROSM5','SHYM5','ABRN8','VCRN8','LBNN8','KNDN8','WFON8','HWDN8','ENDN8','MPLN8','HGRN8','MTON8','GRNN8','WLHN8','NCEN8'];

foreach($gages as $gage){
 $url = 'https://water.weather.gov/ahps2/rss/obs/'.strtolower($gage).'.rss';
 $content = get_data($url);
 preg_match_all('/<channel>\n<title>([^{]*?)<\/title>\n<link>/m',$content,$title, PREG_SET_ORDER, 0);
 $title = trim(explode(strtoupper($gage),$title[0][1])[1]);
 preg_match_all('/<geo:lat>([^{]*?)<\/geo:lat>/m',$content,$lat, PREG_SET_ORDER, 0);
 $lat=$lat[0][1];
 preg_match_all('/<geo:long?>([^{]*?)<\/geo:long?>/m',$content,$lon, PREG_SET_ORDER, 0);
 $lon=$lon[0][1];
 print("title is ".$title." lon is ".$lon." and lat is ".$lat."\n");
 if($gage == end($gages)){
  fwrite($dataFile,"{id:\"".strtolower($gage)."\",latLon:[".$lat.",".$lon."],name:\"".$title."\"}\n];");
 }
 else {
  fwrite($dataFile,"{id:\"".strtolower($gage)."\",latLon:[".$lat.",".$lon."],name:\"".$title."\"},\n");
 }
}
fclose($dataFile);

?>
