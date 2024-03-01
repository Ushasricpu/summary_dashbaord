var currentMap;
var markers = []

async function addMarker(nodes, icon){
    // console.log("in addmarkers", nodes, icon)
    // console.log("Current map=", currentMap)
    markers = []
    for(var node in nodes){
        var name = nodes[node].name
        // console.log(nodes[node])
		cood = [
			 nodes[node].latitude,
			 nodes[node].longitude,
			 nodes[node].xcor,
			 nodes[node].ycor,
		]
        // console.log("Cood", cood)
        var temp = {
			circle: L.circle(cood, {
          color: "#orange",
          fillColor: "#FFA500",
          fillOpacity: 0.7,
          radius: 8.0
      }).addTo(currentMap),

			name: name
		}
        // console.log(name);
        markers.push(temp);
    }
}

function delete_marker(m) {
    console.log("Del markers=", m);
    for (elem in m) {
    //console.log("M elem=", m[elem])
        if (currentMap.hasLayer(m[elem].circle)) {
            //console.log("has layer true in delete marker")
            currentMap.removeLayer(m[elem].circle);
        }
    }
}

async function mapModify(mapdata, option){
// console.log("Map modify=", mapdata);
    currentMap = mapdata.target;
    currentMap.scrollWheelZoom.disable();

    let promise_1 = new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve("Success!")
		}, 10);
	});

    promise_1.then((successmsg) => {
        // addMarker(global_nodes, airIcon);
    });
}

// moved to functions.js since it wasn't detecting here

function airqualitynodesSelect() {
    console.log("in airqualitynodesSelect ")
    document.getElementById('currentvertical').innerHTML = "AIR QUALITY";
    //delete_marker(markers);
    //addMarker(air_quality_nodes, airIcon);  //// todo: air_quality_nodes
    global_nodes = air_quality_nodes;
}

function waterflownodesSelect() {
    document.getElementById('currentvertical').innerHTML = "WATER FLOW";
    //delete_marker(markers);
    //addMarker(water_flow_nodes, waterIcon); //global_nodes
    global_nodes = water_flow_nodes;
}

function waterdistributionnodesSelect() {
    document.getElementById('currentvertical').innerHTML = "WATER DISTRIBUTION";
    //delete_marker(markers);
    //addMarker(water_distribution_nodes, waterIcon);
    global_nodes = water_distribution_nodes;
}

// function smartroomnodesSelect() {
//     document.getElementById('currentvertical').innerHTML = "SMART ROOM";
//     //delete_marker(markers);
//     //addMarker(smart_room_nodes, waterIcon);
//     global_nodes = smart_room_nodes;
// }

function sracnodesSelect() {
    document.getElementById('currentvertical').innerHTML = "SR-AC";
    //delete_marker(markers);
    //addMarker(smart_room_nodes, waterIcon);
    global_nodes = srac_nodes;
}

function sremnodesSelect() {
    document.getElementById('currentvertical').innerHTML = "SR-EM";
    //delete_marker(markers);
    //addMarker(smart_room_nodes, waterIcon);
    global_nodes = srem_nodes;
}

function srocnodesSelect() {
    document.getElementById('currentvertical').innerHTML = "SR-OC";
    //delete_marker(markers);
    //addMarker(smart_room_nodes, waterIcon);
    global_nodes = sroc_nodes;
}

function sraqnodesSelect() {
    document.getElementById('currentvertical').innerHTML = "SR-AQ";
    //delete_marker(markers);
    //addMarker(smart_room_nodes, waterIcon);
    global_nodes = sraq_nodes;
}

function crowdmonitoringnodesSelect() {
    document.getElementById('currentvertical').innerHTML = "CROWD MONITORING";
    //delete_marker(markers);
    //addMarker(crowd_monitoring_nodes, waterIcon);
    global_nodes = crowd_monitoring_nodes;
}


function solarnodesSelect() {
    document.getElementById('currentvertical').innerHTML = "SOLAR";
    //delete_marker(markers);
    //addMarker(solar_nodes, waterIcon);
    global_nodes = solar_nodes;
}

function energymonitoringnodesSelect() {
    document.getElementById('currentvertical').innerHTML = "CONVENTIONAL";
    //delete_marker(markers);
    //addMarker(crowd_monitoring_nodes, waterIcon);
    global_nodes = energy_monitoring_nodes;
}

function weatherstationnodesSelect() {
    document.getElementById('currentvertical').innerHTML = "WEATHER STATION";
    //delete_marker(markers);
    //addMarker(weather_station_nodes, waterIcon);
    global_nodes = weather_station_nodes;
}



function airHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/air/air1_v2.png" width="20", height=20> <span style="color:grey"">PM25 </span>&nbsp' + '<img src="/dashboard/static/images/icon/air/air2_v2.png" width="20", height=20> <span style="color:grey"">PM10 </span>&nbsp' + '<img src="/dashboard/static/images/icon/air/air3_v2.png" width="20", height=20> <span style="color:grey"">Temp </span>&nbsp' + '<img src="/dashboard/static/images/icon/air/air4_v2.png" width="20", height=20> <span style="color:grey"">rHum </span>&nbsp';
}
function wfHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/water/wf1_v2.png" width="20", height=20> <span style="color:grey"">FR </span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wf2_v2.png" width="20", height=20> <span style="color:grey"">PR </span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wf3_v2.png" width="20", height=20> <span style="color:grey"">TF </span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wf4_v2.png" width="20", height=20> <span style="color:grey"">PV </span>&nbsp' ;
}
function wdHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/water/wd1_v2.png" width="20", height=20> <span style="color:grey"">Temp </span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wd2_v2.png" width="20", height=20> <span style="color:grey"">TDS </span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wd3_v2.png" width="20", height=20> <span style="color:grey"">WTR LVL </span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wd4_v2.png" width="20", height=20> <span style="color:grey"">PH </span>&nbsp' ;
}
function weHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/weather/we1_v2.png" width="20", height=20> <span style="color:grey"">SR </span>&nbsp' + '<img src="/dashboard/static/images/icon/weather/we2_v2.png" width="20", height=20> <span style="color:grey"">Temp </span>&nbsp' + '<img src="/dashboard/static/images/icon/weather/we3_v2.png" width="20", height=20> <span style="color:grey"">rHum </span>&nbsp' + '<img src="/dashboard/static/images/icon/weather/we4_v2.png" width="20", height=20> <span style="color:grey"">WD </span>&nbsp';
}
function emHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/energy/04_Energy-Monitoring2.png" width="20", height=20> <span style="color:grey"">RS </span>&nbsp' + '<img src="/dashboard/static/images/icon/energy/04_Energy-Monitoring3.png" width="20", height=20> <span style="color:grey"">RC </span>&nbsp' + '<img src="/dashboard/static/images/icon/energy/04_Energy-Monitoring4.png" width="20", height=20> <span style="color:grey"">YC </span>&nbsp' + '<img src="/dashboard/static/images/icon/energy/04_Energy-Monitoring1.png" width="20", height=20> <span style="color:grey"">BC </span>&nbsp' ;
}
function slHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/solar/sl1_v2.png" width="20", height=20> <span style="color:grey"">EAC </span>&nbsp' + '<img src="/dashboard/static/images/icon/solar/sl2_v2.png" width="20", height=20> <span style="color:grey"">Freq </span>&nbsp' + '<img src="/dashboard/static/images/icon/solar/sl3_v2.png" width="20", height=20> <span style="color:grey"">AP </span>&nbsp' + '<img src="/dashboard/static/images/icon/solar/sl4_v2.png" width="20", height=20> <span style="color:grey"">PF </span>&nbsp';
}
function cmHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/crowd/cm1_v2.png" width="20", height=20> <span style="color:grey"">RS </span>&nbsp' + '<img src="/dashboard/static/images/icon/crowd/cm2_v2.png" width="20", height=20> <span style="color:grey"">RC </span>&nbsp' + '<img src="/dashboard/static/images/icon/crowd/cm3_v2.png" width="20", height=20> <span style="color:grey"">YC </span>&nbsp' + '<img src="/dashboard/static/images/icon/crowd/cm4_v2.png" width="20", height=20> <span style="color:grey"">BC </span>&nbsp' ;
}
function sracHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/smartroom/07_Smart-Room-AC.png" width="20", height=20> <span style="color:grey"">Temp </span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/07_Smart-Room-AC2.png" width="20", height=20> <span style="color:grey"">TA </span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/07_Smart-Room-AC3.png" width="20", height=20> <span style="color:grey"">SS </span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/07_Smart-Room-AC4.png" width="20", height=20> <span style="color:grey"">AL </span>&nbsp' ;
}
function sremHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/smartroom/09_Smart-Room-Energy-Meter.png" width="20", height=20> <span style="color:grey"">EG </span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/09_Smart-Room-Energy-Meter2.png" width="20", height=20> <span style="color:grey"">PWR </span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/09_Smart-Room-Energy-Meter4.png" width="20", height=20> <span style="color:grey"">CUR </span>&nbsp';
}
function sraqHead() {
    document.getElementById("parameterbody").innerHTML= '<img src="/dashboard/static/images/icon/smartroom/08_Smart-Room-Air-Quality.png" width="20", height=20> <span style="color:grey"">CO2 </span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/08_Smart-Room-Air-Quality2.png" width="20", height=20> <span style="color:grey"">Temp </span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/08_Smart-Room-Air-Quality3.png" width="20", height=20> <span style="color:grey"">rHum </span>&nbsp';
}


//<noscript>
//
//function airParam() {
//    if(document.getElementById("aq_1").checked == true) {
//    document.getElementById("currentparametertype").outerHTML = <img src="{% static 'images/icon/air/pm25.svg' %}" width="20", height=20> <span style="color:orange">PM25>
//}

//function airDisplay() {
//     if(document.getElementById("aq_1").checked == true) {
//       document.getElementById("element2").style.display = "block";
//   }else{
//           document.getElementById("element2").style.display = "none";
//   }
//}




