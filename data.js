
   var riverData = [];
   var riverPoints = [{id:"drtn8",latLon:[48.572480,-97.148],name:"Red River at Drayton",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=drtn8&graph_id=2"},
    {id:"egfm5",latLon:[47.933307,-97.037085],name:"Red River at East Grand Forks",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=egfm5&graph_id=2"},
    {id:"fgon8",latLon:[46.861725,-96.783593],name:"Red River at Fargo",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=fgon8&graph_id=2"},
    {id:"hiln8",latLon:[47.352608,-96.844130],name:"Red River at Halsted",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hiln8&graph_id=2"},
    {id:"hicn8",latLon:[46.659278,-96.797085],name:"Red River at Hickson",url:"https://water.weather.gov/ahps2/probability_information.php?wfo=fgf&gage=hicn8&graph_id=2"}
   ];

/* this stuff will come from JSON... intermediate solution now */

   var riverData = [{id:"drtn8",action:28,minor:32,moderate:38,major:42,record:{year:1997,height:45.55},notableCrests:[{year:2016,height:24.21},{year:2018,height:34.53},{year:2017,height:35.68},{year:2019,height:42.46},{year:2011,height:43.17},{year:2009,height:43.82}]},
    {id:"egfm5",action:27,minor:28,moderate:40,major:46,record:{year:1997,height:54.37},notableCrests:[{year:2016,height:20.03},{year:2017,height:29.58},{year:2018,height:35.02},{year:2019,height:46.99},{year:1897,height:50.20}]},
    {id:"fgon8",action:17,minor:18,moderate:25,major:30,record:{year:2009,height:40.84},notableCrests:[{year:2016,height:17.12},{year:2018,height:18.64},{year:2017,height:22.26},{year:2019,height:35.03},{year:2011,height:38.81},{year:1997,height:39.72}]},
    {id:"hiln8",action:24,minor:26,moderate:32,major:37,record:{year:1997,height:40.74},notableCrests:[{year:2016,height:12.26},{year:2017,height:23.11},{year:2018,height:24.90},{year:2019,height:39.08},{year:2011,height:40.51}]},
    {id:"hicn8",action:28,minor:30,moderate:34,major:38,record:{year:2009,height:39.04},notableCrests:[{year:2016,height:14.28},{year:2018,height:17.94},{year:2017,height:22.51},{year:2019,height:34.29},{year:2010,height:36.40},{year:1997,height:37.60}]}
   ];
   
   var percentExceed = [{id:"drtn8",exceedance:[{percent:5,height:45.8},{percent:10,height:45.1},{percent:25,height:44.0},{percent:50,height:43.0},{percent:95,height:41.9}]},
                        {id:"egfm5",exceedance:[{percent:5,height:55.5},{percent:10,height:53.3},{percent:25,height:50.6},{percent:50,height:48.4},{percent:75,height:47.4},{percent:90,height:46.2},{percent:95,height:45.3}]},
                        {id:"fgon8",exceedance:[{percent:5,height:39.7},{percent:10,height:38.2},{percent:25,height:36.1},{percent:50,height:34.7},{percent:75,height:33.3},{percent:90,height:32.5},{percent:95,height:32.0}]},
                        {id:"hiln8",exceedance:[{percent:5,height:40.8},{percent:10,height:40.0},{percent:25,height:39.5},{percent:50,height:38.8},{percent:75,height:38.2},{percent:90,height:37.5},{percent:95,height:36.9}]},
                        {id:"hicn8",exceedance:[{percent:5,height:36.6},{percent:10,height:35.5},{percent:25,height:33.9},{percent:50,height:31.6},{percent:75,height:28.7},{percent:90,height:27.7},{percent:95,height:27.3}]}
                       ];

