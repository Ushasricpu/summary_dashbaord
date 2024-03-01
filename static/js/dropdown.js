// moved function calls to reinitMarkers in functions.js
// since functions not getting called or click event not registering
function selectNodeTypeListener(){
    document.getElementById('air_quality').onclick = function(){
        console.log("air_quality")
        airqualitynodesSelect();
        myParamsFunction("aq");
        airHead();
    }
    document.getElementById('water_flow').onclick = function(){
        console.log("water flow")
        waterflownodesSelect();
        myParamsFunction("wf");
        wfHead();
    }
    document.getElementById('water_distribution').onclick = function(){
        console.log("water distribution");
        waterdistributionnodesSelect();
        myParamsFunction("wd");
        wdHead();
    }
    // document.getElementById('smart_room').onclick = function(){
    //     console.log("smart room")
    //     smartroomnodesSelect();
    // }
    document.getElementById('sr_ac').onclick = function(){
        console.log("sr-ac")
        sracnodesSelect();
        myParamsFunction("srac");
        sracHead();
    }
    document.getElementById('sr_em').onclick = function(){
        console.log("sr-em")
        sremnodesSelect();
        myParamsFunction("srem");
        sremHead();
    }
    document.getElementById('sr_oc').onclick = function(){
        console.log("sr-oc")
        srocnodesSelect();
        myParamsFunction("sroc");
    }
    document.getElementById('sr_aq').onclick = function(){
        console.log("sr-aq")
        sraqnodesSelect();
        myParamsFunction("sraq");
        sraqHead();
    }
    document.getElementById('crowd-monitoring').onclick = function(){
        console.log("crowd monitoring")
        crowdmonitoringnodesSelect();
        myParamsFunction("cm");
        cmHead();
    }
    document.getElementById('Solar').onclick = function(){
        console.log("Solar")
        solarnodesSelect();
        myParamsFunction("sl");
        slHead();
    }
    document.getElementById('energy-monitoring').onclick = function(){
        console.log("energy monitoring")
        energymonitoringnodesSelect();
        myParamsFunction("em");
        emHead();
    }
    document.getElementById('WeatherStation').onclick = function(){
        console.log("Weather Station")
        weatherstationnodesSelect();
        myParamsFunction("we");
        weHead();
    }
}