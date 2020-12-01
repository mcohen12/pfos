
 var riverPoints = [
  {id:"drtn8",latLon:[48.572480,-97.148],name:"Red River at Drayton",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=drtn8&graph_id=2"},
  {id:"egfm5",latLon:[47.933307,-97.037085],name:"Red River at East Grand Forks",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=egfm5&graph_id=2"},
  {id:"fgon8",latLon:[46.861725,-96.783593],name:"Red River at Fargo",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=fgon8&graph_id=2"},
  {id:"hiln8",latLon:[47.352608,-96.844130],name:"Red River at Halsted",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hiln8&graph_id=2"},
  {id:"hicn8",latLon:[46.659278,-96.797085],name:"Red River at Hickson",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hicn8&graph_id=2"},
  {id:"oslm5",latLon:[48.194306, -97.140552],name:"Red River of the North at Oslo",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=oslm5&graph_id=2"},
  {id:"pbnn8",latLon:[48.973777, -97.238253],name:"Red River of the North at Pembina",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=pbnn8&graph_id=2"},
  {id:"whnn8",latLon:[46.265759, -96.589358],name:"Red River of the North at Wahpeton",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=whnn8&graph_id=2"},
  {id:"higm5",latLon:[48.05, -95.81],name:"Red Lake River at High Landing",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=higm5&graph_id=2"},
  {id:"crkm5",latLon:[47.77, -96.61],name:"Red Lake River at Crookston",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=crkm5&graph_id=2"},
  {id:"mklm5",latLon:[48.20, -96.71],name:"Snake River at Warren 3ENE-Morkassel Brdg",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=mklm5&graph_id=2"},
  {id:"alvm5",latLon:[48.19, -97.00],name:"Snake River at Alvarado",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=alvm5&graph_id=2"},
  {id:"hlln8",latLon:[48.77, -96.93],name:"Two Rivers at Hallock",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hlln8&graph_id=2"},
  {id:"clxm5",latLon:[47.60, -96.81],name:"Sandhill River at Climax",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=clxm5&graph_id=2"},
  {id:"twvm5",latLon:[47.26, -96.25],name:"Wild Rice River (MN) at Twin Valley",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=twvm5&graph_id=2"},
  {id:"hndm5",latLon:[47.26, -96.80],name:"Wild Rice River (MN) at Hendrum",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hndm5&graph_id=2"},
  {id:"hwym5",latLon:[46.85, -96.33],name:"Buffalo River (MN) at Hawley",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hwym5&graph_id=2"},
  {id:"dilm5",latLon:[46.96, -96.66],name:"Buffalo River (MN) Near Dilworth",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=dilm5&graph_id=2"},
  {id:"sabm5",latLon:[46.77, -96.63],name:"South Branch Buffalo River at Sabin",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=sabm5&graph_id=2"},
  {id:"rosm5",latLon:[48.84, -95.76],name:"Roseau River at Roseau",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=rosm5&graph_id=2"},
  {id:"shym5",latLon:[47.41, -96.76],name:"Marsh River at Shelly",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=shym5&graph_id=2"},
  {id:"abrn8",latLon:[46.47, -96.78],name:"Wild Rice River (ND) at Abercrombie",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=abrn8&graph_id=2"},
  {id:"vcrn8",latLon:[46.91, -98.00],name:"Sheyenne River at Valley City",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=vcrn8&graph_id=2"},
  {id:"lbnn8",latLon:[46.45, -97.68],name:"Sheyenne River at Lisbon",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=lbnn8&graph_id=2"},
  {id:"kndn8",latLon:[46.63, -97.00],name:"Sheyenne River at Kindred",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=kndn8&graph_id=2"},
  {id:"wfon8",latLon:[46.89, -96.92],name:"Sheyenne River Diversion at West Fargo",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=wfon8&graph_id=2"},
  {id:"hwdn8",latLon:[46.97, -96.89],name:"Sheyenne River at Harwood",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hwdn8&graph_id=2"},
  {id:"endn8",latLon:[46.62, -97.57],name:"Maple River (ND) at Enderlin",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=endn8&graph_id=2"},
  {id:"mpln8",latLon:[46.86, -97.10],name:"Maple River (ND) Near Mapleton South of I-94",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=mpln8&graph_id=2"},
  {id:"hgrn8",latLon:[47.41, -97.06],name:"Goose River at Hillsboro",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hgrn8&graph_id=2"},
  {id:"mton8",latLon:[48.28, -97.37],name:"Forest River at Minto",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=mton8&graph_id=2"},
  {id:"grnn8",latLon:[48.42, -97.41],name:"River Park at Grafton",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=grnn8&graph_id=2"},
  {id:"wlhn8",latLon:[48.91, -97.92],name:"Pembina River at Walhalla",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=wlhn8&graph_id=2"},
  {id:"ncen8",latLon:[48.98, -97.56],name:"Pembina River at Neche",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=ncen8&graph_id=2"}
];


/*
   var riverData = [];
   var riverPoints = [{id:"drtn8",latLon:[48.572480,-97.148],name:"Red River at Drayton",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=drtn8&graph_id=2"},
    {id:"egfm5",latLon:[47.933307,-97.037085],name:"Red River at East Grand Forks",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=egfm5&graph_id=2"},
    {id:"fgon8",latLon:[46.861725,-96.783593],name:"Red River at Fargo",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=fgon8&graph_id=2"},
    {id:"hiln8",latLon:[47.352608,-96.844130],name:"Red River at Halsted",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hiln8&graph_id=2"},
    {id:"hicn8",latLon:[46.659278,-96.797085],name:"Red River at Hickson",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hicn8&graph_id=2"},
    {id:"clxm5",latLon:[47.611944,-96.814444],name:"Sand Hill River at Climax",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=clxm5&graph_id=2"},
    {id:"hndm5",latLon:[47.268056,-96.797222],name:"Wild Rice River (MN) at Hendrum",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hndm5&graph_id=2"}
   ]; */

/* this stuff will come from JSON... intermediate solution now */
/*
   var riverData = [{id:"drtn8",action:28,minor:32,moderate:38,major:42,record:{year:1997,height:45.55},notableCrests:[{year:2016,height:24.21},{year:2018,height:34.53},{year:2017,height:35.68},{year:2019,height:42.46},{year:2011,height:43.17},{year:2009,height:43.82}]},
    {id:"egfm5",action:27,minor:28,moderate:40,major:46,record:{year:1997,height:54.37},notableCrests:[{year:2016,height:20.03},{year:2017,height:29.58},{year:2018,height:35.02},{year:2019,height:46.99},{year:1897,height:50.20}]},
    {id:"fgon8",action:17,minor:18,moderate:25,major:30,record:{year:2009,height:40.84},notableCrests:[{year:2016,height:17.12},{year:2018,height:18.64},{year:2017,height:22.26},{year:2019,height:35.03},{year:2011,height:38.81},{year:1997,height:39.72}]},
    {id:"hiln8",action:24,minor:26,moderate:32,major:37,record:{year:1997,height:40.74},notableCrests:[{year:2016,height:12.26},{year:2017,height:23.11},{year:2018,height:24.90},{year:2019,height:39.08},{year:2011,height:40.51}]},
    {id:"hicn8",action:28,minor:30,moderate:34,major:38,record:{year:2009,height:39.04},notableCrests:[{year:2016,height:14.28},{year:2018,height:17.94},{year:2017,height:22.51},{year:2019,height:34.29},{year:2010,height:36.40},{year:1997,height:37.60}]}
   ];
*/
   
/*
   var percentExceed = [{id:"drtn8",exceedance:[{percent:5,height:45.8},{percent:10,height:45.1},{percent:25,height:44.0},{percent:50,height:43.0},{percent:95,height:41.9}]},
                        {id:"egfm5",exceedance:[{percent:5,height:55.5},{percent:10,height:53.3},{percent:25,height:50.6},{percent:50,height:48.4},{percent:75,height:47.4},{percent:90,height:46.2},{percent:95,height:45.3}]},
                        {id:"fgon8",exceedance:[{percent:5,height:39.7},{percent:10,height:38.2},{percent:25,height:36.1},{percent:50,height:34.7},{percent:75,height:33.3},{percent:90,height:32.5},{percent:95,height:32.0}]},
                        {id:"hiln8",exceedance:[{percent:5,height:40.8},{percent:10,height:40.0},{percent:25,height:39.5},{percent:50,height:38.8},{percent:75,height:38.2},{percent:90,height:37.5},{percent:95,height:36.9}]},
                        {id:"hicn8",exceedance:[{percent:5,height:36.6},{percent:10,height:35.5},{percent:25,height:33.9},{percent:50,height:31.6},{percent:75,height:28.7},{percent:90,height:27.7},{percent:95,height:27.3}]}
                       ];
*/
