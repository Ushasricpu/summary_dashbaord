var global_nodes = {}
var output = {};
var air_quality_nodes, water_flow_nodes, water_distribution_nodes, smart_room_nodes, srac_nodes, srem_nodes, sroc_nodes, sraq_nodes, crowd_monitoring_nodes, solar_nodes, energy_monitoring_nodes, weather_station_nodes,wisun_nodes;

//var datagraph = {};
label = []

var current_selected_vertical = "aq";
debugDataForGraph = [];
var vertical = "AQ";
var optionsVertical = "";
var popupNode;
var selectedNodes = [];
var selectedContext = [];
var selected_node_graph, selected_parameter_graph;
verticalNodes = {};
verticalColumns = {};
var NODE_ID, VERTICAL_TYPE; // used in popupclick
function prepareGraph(dataFromResponse) {
    debugDataForGraph = dataFromResponse;
    vertical = current_selected_vertical.toUpperCase();
    console.log("vertical index js=", vertical);
    if (optionsVertical != vertical) {
        if (document.getElementById("additionNode").options != null) {
            for (var i = document.getElementById("additionNode").options.length - 1; i >= 0; i--) {
                document.getElementById("additionNode").remove(i);
            }
        }
        for (var i = 0; i < debugDataForGraph.nodes.length; i++) {
            opt = document.createElement("option");
            opt.value = debugDataForGraph.nodes[i];
            opt.innerHTML = debugDataForGraph.nodes[i];
            document.getElementById("additionNode").appendChild(opt);
        }
        if (document.getElementById("chartField").options != null) {
            for (var i = document.getElementById("chartField").options.length - 1; i >= 0; i--) {
                document.getElementById("chartField").remove(i);
            }
        }
        for (var i = 0; i < debugDataForGraph.parameters.length; i++) {
            opt = document.createElement("option");
            opt.value = debugDataForGraph.parameters[i];
            opt.innerHTML = debugDataForGraph.parameters[i];
            document.getElementById("chartField").appendChild(opt);
        }
        optionsVertical = vertical;
    }
    var chartField = document.getElementById("chartField");
    selected_parameter_graph = chartField.options[chartField.selectedIndex].text;
    var node = document.getElementById("node");
    console.log("node=", node);
    if(node && node != null) {
        selected_node_graph = node.options[node.selectedIndex].text;
    }
    console.log("vertical index js=", vertical, selected_node_graph)
    generateGraph(debugDataForGraph);
}

// function loadData(aq_nodes, wf_nodes, wd_nodes){
//     console.log("New Load Data");
//     air_quality_nodes = JSON.parse(aq_nodes);
//     water_flow_nodes = JSON.parse(wf_nodes);
//     water_distribution_nodes = JSON.parse(wd_nodes);
//     global_nodes = air_quality_nodes;
//     console.log(water_flow_nodes);
//     console.log(water_distribution_nodes);
// }

function newloadData(result) {
    console.log("New Load Data");
    console.log("New Load ");
    result = JSON.parse(result) // .replace(/\bNaN\b/g, "null")
    // console.log(result)
    air_quality_nodes = result.aq
    water_distribution_nodes = result.wd
    water_flow_nodes = result.wf
    crowd_monitoring_nodes = result.cm
    //smart_room_nodes = result.sm
    srac_nodes = result.sr_ac
    srem_nodes = result.sr_em
    sroc_nodes = result.sr_oc
    sraq_nodes = result.sr_aq
    solar_nodes = result.sl
    energy_monitoring_nodes = result.em
    weather_station_nodes = result.we
    global_nodes = result.aq
    wisun_nodes=result.wn
    console.log(wisun_nodes);
    //output = JSON.parse(output);
    //console.log("Output=", output);
//    datagraph = [{ "node_id": "AQ-PL00-00", "name": "Palash Nivas", "type": "AQ", "pm25": 16.6, "pm10": 60.2, "temperature": 32.6, "relative_humidity": 68.0, "aqi": 60.2, "aql": 1.0, "aqi_mp": 1.0 },
//    { "node_id": "AQ-PL00-00", "name": "Palash Nivas", "type": "AQ", "pm25": 17.6, "pm10": 40.2, "temperature": 22.6, "relative_humidity": 58.0, "aqi": 69.2, "aql": 2.0, "aqi_mp": 3.0 },
//    { "node_id": "AQ-PL00-00", "name": "Palash Nivas", "type": "AQ", "pm25": 19.6, "pm10": 20.2, "temperature": 42.6, "relative_humidity": 48.0, "aqi": 59.2, "aql": 3.0, "aqi_mp": 2.0 }]

}

window.onload = function () {
    console.log("Working");
    // selectNodeTypeListener();
};
