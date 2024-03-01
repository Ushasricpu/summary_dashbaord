

//var checkair, checkwd, checkwf, checkwe, checksrac, checksl, checkcm, checkem, checksrem, checksraq;
//var air, wd, wf, we, cm ,em ,srac, srem, sraq, sl, sroc;

function getContent(type, nodeId, icons, colors, values) {
	content = `<div class="flex-container"><div class="vl"></div> <div class="vr"></div> <a href="#" data-bs-toggle="modal" data-bs-target="#myModal"  onclick = "return popupClick('`+type+`', '${nodeId}');"> <span class="link"></span> </a>`
	var cnt = 0 
	for (i=0; i<icons.length; i++) {
		if(values[i].split(' ')[0] !== '0' && values[i].split(' ')[0] !== "null")  {
			if(cnt % 2 == 0) {
				content += `<div class="flex-child">`;
			}
			if(cnt % 2) {
				content += `<p class="m-0 pt-1">`;
			}
			else {
				content += `<p class="m-0 p-0">`;
			}
			content += `<img src=` + icons[i] + ` width="20", height=20> <span style="color:` + colors[i] + `">`+values[i]+`</span></p>`;
			if(cnt % 2) {
				content += `</div>`;
			}
			cnt += 1;
		}
	}
	content += `</div>`;
	
	return content;
}
		

function defaultParams(x) {
        con = document.getElementsByName(x);
        for(j=0; j< 4; j++) {
            con[j].checked = true;
        }
        for(k=4; k<con.length; k++) {
            con[k].disabled = true;
        }
}


function smart(x){
    con = document.getElementsByName(x);
    for(j=0; j< 3; j++) {
            con[j].checked = true;
        }
}


// value of checkbox is same as class of popup element
 $('input[type="checkbox"]').click(function() {
                    //selectParameters();
                    var inputValue = $(this).attr("value");
                    $("." + inputValue).toggle();
                });

function limitFour(x) {
    var x;
     $('input[name="check' +x+ '"]').click(function() {
        var bol = $('input[name="check' +x+ '"]:checked').length >= 4;
        $('input[name="check' +x+ '"]').not(":checked").attr("disabled",bol);
     });
}


function checkboxClick(y) {

  var checkboxes = document.getElementsByName(y);

  checkboxesChecked = [];
  checkboxGlob=[];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
         // And stick the checked ones onto an array...
         if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].value);
            console.log( checkboxes[i].value);
         }
  }

  checkboxGlob=checkboxesChecked.reverse();
  console.log('test', checkboxesChecked,checkboxGlob);

  checkboxesChecked = checkboxesChecked.reverse();
  document.getElementById('parameterbody').innerHTML = "";
  
  
  for (var j=0; j<=checkboxesChecked.length; j++) {
             if (y== 'checkair') {
                 x =  checkboxesChecked[0];
                 if (x=="PM25") {
                    a='PM25';
                 }
                else if (x=="PM10") {
                    a='PM10';
                }
                else if (x=="TEMP") {
                    a='Temp';
                }
                else if (x=='RELHUM') {
                    a='rHum';
                }
                else if (x=="CO") {
                    a='CO';
                }
                else if (x=='NO2') {
                    a='NO2';
                }
                else if (x=="NH3") {
                    a='NH3';
                }
                else if (x=='AQI') {
                    a='AQI';
                }
                else if (x=='AQL') {
                    a='AQL';
                }
                else if (x=='AQIMP') {
                    a='AQI-MP';
                }
                l =  checkboxesChecked[1];
                 if (l=="PM25") {
                    b='PM25';
                 }
                else if (l=="PM10") {
                    b='PM10';
                }
                else if (l=="TEMP") {
                    b='Temp';
                }
                else if (l=='RELHUM') {
                    b='rHum';
                }
                else if (l=="CO") {
                    b='CO';
                }
                else if (l=='NO2') {
                    b='NO2';
                }
                else if (l=="NH3") {
                    b='NH3';
                }
                else if (l=='AQI') {
                    b='AQI';
                }
                else if (l=='AQL') {
                    b='AQL';
                }
                else if (l=='AQIMP') {
                    b='AQI-MP';
                }
                m =  checkboxesChecked[2];
                 if (m=="PM25") {
                    c='PM25';
                 }
                else if (m=="PM10") {
                    c='PM10';
                }
                else if (m=="TEMP") {
                    c='Temp';
                }
                else if (m=='RELHUM') {
                    c='rHum';
                }
                else if (m=="CO") {
                    c='CO';
                }
                else if (m=='NO2') {
                    c='NO2';
                }
                else if (m=="NH3") {
                    c='NH3';
                }
                else if (m=='AQI') {
                    c='AQI';
                }
                else if (m=='AQL') {
                    c='AQL';
                }
                else if (m=='AQIMP') {
                    c='AQI-MP';
                }
                n =  checkboxesChecked[3];
                 if (n=="PM25") {
                    d='PM25';
                 }
                else if (n=="PM10") {
                    d='PM10';
                }
                else if (n=="TEMP") {
                    d='Temp';
                }
                else if (n=='RELHUM') {
                    d='rHum';
                }
                else if (n=="CO") {
                    d='CO';
                }
                else if (n=='NO2') {
                    d='NO2';
                }
                else if (n=="NH3") {
                    d='NH3';
                }
                else if (n=='AQI') {
                    d='AQI';
                }
                else if (n=='AQL') {
                    d='AQL';
                }
                else if (n=='AQIMP') {
                    d='AQI-MP';
                }


                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/air/air1_v2.png" width="20", height=20> <span style="color:#20c997">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/air/air2_v2.png" width="20", height=20> <span style="color:#ffc107">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/air/air3_v2.png" width="20", height=20> <span style="color:#dc3545">'+c+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/air/air4_v2.png" width="20", height=20> <span style="color:#0dcaf0">'+d+ '</span>&nbsp';

             }
             else if (y== 'checkwd') {
                 x =  checkboxesChecked[0];
                 if (x=="WD_TEMP") {
                    a='Temp';
                }
                else if (x=="TDS") {
                    a='TDS';
                }
                else if (x=="WTR_LVL") {
                    a='WL';
                }
                else if (x=="PH") {
                    a='pH';
                }
                else if (x=="TUR") {
                    a='Tur';
                }
                l =  checkboxesChecked[1];
                 if (l=="WD_TEMP") {
                    b='Temp';
                }
                else if (l=="TDS") {
                    b='TDS';
                }
                else if (l=="WTR_LVL") {
                    b='WL';
                }
                else if (l=="PH") {
                    b='pH';
                }
                else if (l=="TUR") {
                    b='Tur';
                }
                m =  checkboxesChecked[2];
                 if (m=="WD_TEMP") {
                    c='Temp';
                }
                else if (m=="TDS") {
                    c='TDS';
                }
                else if (m=="WTR_LVL") {
                    c='WL';
                }
                else if (m=="PH") {
                    c='pH';
                }
                else if (m=="TUR") {
                    c='Tur';
                }
                n =  checkboxesChecked[3];
                 if (n=="WD_TEMP") {
                    d='Temp';
                }
                else if (n=="TDS") {
                    d='TDS';
                }
                else if (n=="WTR_LVL") {
                    d='WL';
                }
                else if (n=="PH") {
                    d='pH';
                }
                else if (n=="TUR") {
                    d='Tur';
                }
                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/water/wd1_v2.png" width="20", height=20> <span style="color:#20c997">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wd2_v2.png" width="20", height=20> <span style="color:#0dcaf0">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wd3_v2.png" width="20", height=20> <span style="color:#dc3545">'+c+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wd4_v2.png" width="20", height=20> <span style="color:#ffc107">'+d+ '</span>&nbsp';


             }
             else if (y== 'checkwf') {
                 x =  checkboxesChecked[0];
                if (x=="FLO_RT") {
                    a='FR';
                }
                else if (x=="TTL_FLO") {
                    a='TF';
                }
                else if (x=="WF_PRESS") {
                    a='P';
                }
                else if (x=="PRESS_V") {
                    a='PV';
                }
                l =  checkboxesChecked[1];
                if (l=="FLO_RT") {
                    b='FR';
                }
                else if (l=="TTL_FLO") {
                    b='TF';
                }
                else if (l=="WF_PRESS") {
                    b='P';
                }
                else if (l=="PRESS_V") {
                    b='PV';
                }
                m =  checkboxesChecked[2];
                if (m=="FLO_RT") {
                    c='FR';
                }
                else if (m=="TTL_FLO") {
                    c='TF';
                }
                else if (m=="WF_PRESS") {
                    c='P';
                }
                else if (m=="PRESS_V") {
                    c='PV';
                }
                n =  checkboxesChecked[3];
                if (n=="FLO_RT") {
                    d='FR';
                }
                else if (n=="TTL_FLO") {
                    d='TF';
                }
                else if (n=="WF_PRESS") {
                    d='P';
                }
                else if (n=="PRESS_V") {
                    d='PV';
                }
                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/water/wf1_v2.png" width="20", height=20> <span style="color:#0dcaf0">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wf2_v2.png" width="20", height=20> <span style="color:#ffc107"">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wf3_v2.png" width="20", height=20> <span style="color:#dc3545">'+c+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/water/wf4_v2.png" width="20", height=20> <span style="color:#20c997">'+d+ '</span>&nbsp';

             }
              else if (y== 'checkwe') {
                 x =  checkboxesChecked[0];
                if (x=="SOL_RAD") {
                    a='SR';
                }
                else if (x=="WE_TEMP") {
                   a='Temp';
                }
                else if (x=="WE_RHUM") {
                   a='rHum';
                }
                else if (x=="WIND_DIR") {
                    a='WD';
                }
                else if (x=="WIND_SP") {
                    a='WS';
                }
                else if (x=="GUST") {
                    a='GS';
                }
                else if (x=="DEW") {
                    a='Dew';
                }
                else if (x=="DC_VLT") {
                    a='DV';
                }
                 else if (x=="RAIN") {
                    a='Rain';
                }
                else if (x=="WE_PRESS") {
                    a='P';
                }
                l =  checkboxesChecked[1];
                if (l=="SOL_RAD") {
                    b='SR';
                }
                else if (l=="WE_TEMP") {
                   b='Temp';
                }
                else if (l=="WE_RHUM") {
                   b='rHum';
                }
                else if (l=="WIND_DIR") {
                    b='WD';
                }
                else if (l=="WIND_SP") {
                    b='WS';
                }
                else if (l=="GUST") {
                    b='GS';
                }
                else if (l=="DEW") {
                    b='Dew';
                }
                else if (l=="DC_VLT") {
                    b='DV';
                }
                 else if (l=="RAIN") {
                    b='Rain';
                }
                else if (l=="WE_PRESS") {
                    b='P';
                }
                m =  checkboxesChecked[2];
                if (m=="SOL_RAD") {
                    c='SR';
                }
                else if (m=="WE_TEMP") {
                   c='Temp';
                }
                else if (m=="WE_RHUM") {
                   c='rHum';
                }
                else if (m=="WIND_DIR") {
                    c='WD';
                }
                else if (m=="WIND_SP") {
                    c='WS';
                }
                else if (m=="GUST") {
                    c='GS';
                }
                else if (m=="DEW") {
                    c='Dew';
                }
                else if (m=="DC_VLT") {
                    c='DV';
                }
                 else if (m=="RAIN") {
                    c='Rain';
                }
                else if (m=="WE_PRESS") {
                    c='P';
                }
                n =  checkboxesChecked[3];
                if (n=="SOL_RAD") {
                    d='SR';
                }
                else if (n=="WE_TEMP") {
                   d='Temp';
                }
                else if (n=="WE_RHUM") {
                   d='rHum';
                }
                else if (n=="WIND_DIR") {
                    d='WD';
                }
                else if (n=="WIND_SP") {
                    d='WS';
                }
                else if (n=="GUST") {
                    d='GS';
                }
                else if (n=="DEW") {
                    d='Dew';
                }
                else if (n=="DC_VLT") {
                    d='DV';
                }
                 else if (n=="RAIN") {
                    d='Rain';
                }
                else if (n=="WE_PRESS") {
                    d='P';
                }
                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/weather/we1_v2.png" width="20", height=20> <span style="color:#20c997">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/weather/we2_v2.png" width="20", height=20> <span style="color:#dc3545">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/weather/we3_v2.png" width="20", height=20> <span style="color:#0dcaf0">'+c+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/weather/we4_v2.png" width="20", height=20> <span style="color:#ffc107">'+d+ '</span>&nbsp';

             }
             else if (y== 'checksrac') {
                 x =  checkboxesChecked[0];
                if (x=="SR_TEMP") {
                    a='Temp';
                }
                else if (x=="TEMP_ADJ") {
                    a='TA';
                }
                else if (x=="STA_STP") {
                    a='SS';
                }
                 else if (x=="ALM") {
                    a='AM';
                }
                else if (x=="MAL") {
                    a='MC';
                }
                else if (x=="AC") {
                    a='AC';
                }
                else if (x=="AR_FLORT") {
                    a='AF';
                }
                 else if (x=="FLTR") {
                    a='FR';
                }
                else if (x=="GAS") {
                    a='GP';
                }
                else if (x=="ELEC") {
                    a='EP';
                }
                else if (x=="AIR_DIR") {
                    a='AD';
                }
                 else if (x=="THRM") {
                   a='TS';
                }
                else if (x=="EFF") {
                    a='EF';
                }
                else if (x=="COMP") {
                    a='CS';
                }
                else if (x=="FAN") {
                    a='Fan';
                }
                 else if (x=="HEAT") {
                    a='Heat';
                 }
                 l =  checkboxesChecked[1];
                if (l=="SR_TEMP") {
                    b='Temp';
                }
                else if (l=="TEMP_ADJ") {
                    b='TA';
                }
                else if (l=="STA_STP") {
                    b='SS';
                }
                 else if (l=="ALM") {
                    b='AM';
                }
                else if (l=="MAL") {
                    b='MC';
                }
                else if (l=="AC") {
                    b='AC';
                }
                else if (l=="AR_FLORT") {
                    b='AF';
                }
                 else if (l=="FLTR") {
                    b='FR';
                }
                else if (l=="GAS") {
                    b='GP';
                }
                else if (l=="ELEC") {
                    b='EP';
                }
                else if (l=="AIR_DIR") {
                    b='AD';
                }
                 else if (l=="THRM") {
                   b='TS';
                }
                else if (l=="EFF") {
                    b='EF';
                }
                else if (l=="COMP") {
                    b='CS';
                }
                else if (l=="FAN") {
                    b='Fan';
                }
                 else if (l=="HEAT") {
                    b='Heat';
                 }
                 m =  checkboxesChecked[2];
                if (m=="SR_TEMP") {
                    c='Temp';
                }
                else if (m=="TEMP_ADJ") {
                    c='TA';
                }
                else if (m=="STA_STP") {
                    c='SS';
                }
                 else if (m=="ALM") {
                    c='AM';
                }
                else if (m=="MAL") {
                    c='MC';
                }
                else if (m=="AC") {
                    c='AC';
                }
                else if (m=="AR_FLORT") {
                    c='AF';
                }
                 else if (m=="FLTR") {
                    c='FR';
                }
                else if (m=="GAS") {
                    c='GP';
                }
                else if (m=="ELEC") {
                    c='EP';
                }
                else if (m=="AIR_DIR") {
                    c='AD';
                }
                 else if (m=="THRM") {
                   c='TS';
                }
                else if (m=="EFF") {
                    c='EF';
                }
                else if (m=="COMP") {
                    c='CS';
                }
                else if (m=="FAN") {
                    c='Fan';
                }
                 else if (m=="HEAT") {
                    c='Heat';
                 }
                 x =  checkboxesChecked[0];
                if (n=="SR_TEMP") {
                    d='Temp';
                }
                else if (n=="TEMP_ADJ") {
                    d='TA';
                }
                else if (n=="STA_STP") {
                    d='SS';
                }
                 else if (n=="ALM") {
                    d='AM';
                }
                else if (n=="MAL") {
                    d='MC';
                }
                else if (n=="AC") {
                    d='AC';
                }
                else if (n=="AR_FLORT") {
                    d='AF';
                }
                 else if (n=="FLTR") {
                    d='FR';
                }
                else if (n=="GAS") {
                    d='GP';
                }
                else if (n=="ELEC") {
                    d='EP';
                }
                else if (n=="AIR_DIR") {
                    d='AD';
                }
                 else if (n=="THRM") {
                   d='TS';
                }
                else if (n=="EFF") {
                    d='EF';
                }
                else if (n=="COMP") {
                    d='CS';
                }
                else if (n=="FAN") {
                    d='Fan';
                }
                 else if (n=="HEAT") {
                    d='Heat';
                 }
                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/smartroom/07_Smart-Room-AC.png" width="20", height=20> <span style="color:#20c997">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/07_Smart-Room-AC2.png" width="20", height=20> <span style="color:#dc3545">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/07_Smart-Room-AC3.png" width="20", height=20> <span style="color:#0dcaf0">'+c+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/07_Smart-Room-AC4.png" width="20", height=20> <span style="color:#ffc107">'+d+ '</span>&nbsp';

             }
             else if (y== 'checksrem') {
                 x =  checkboxesChecked[j];
                if (x=="EM_ENG") {
                    a='EG';
                }
                else if (x=="EM_PWR") {
                    a='PR';
                }
                else if (x=="EM_CURR") {
                    a='CT';
                }
                l =  checkboxesChecked[1];
                if (l=="EM_ENG") {
                    b='EG';
                }
                else if (l=="EM_PWR") {
                    b='PR';
                }
                else if (l=="EM_CURR") {
                    b='CT';
                }
                m =  checkboxesChecked[2];
                if (m=="EM_ENG") {
                    c='EG';
                }
                else if (m=="EM_PWR") {
                    c='PR';
                }
                else if (m=="EM_CURR") {
                    c='CT';
                }
                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/smartroom/09_Smart-Room-Energy-Meter.png" width="20", height=20> <span style="color:#20c997">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/09_Smart-Room-Energy-Meter2.png" width="20", height=20> <span style="color:#dc3545">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/09_Smart-Room-Energy-Meter3.png" width="20", height=20> <span style="color:#0dcaf0"">'+c+ '</span>&nbsp';

             }
             else if (y== 'checksraq') {
                 x =  checkboxesChecked[0];
                if (x=="CO2") {
                    a='CO2';
                }
                else if (x=="AQ_TEMP") {
                    a='Temp';
                }
                else if (x=="AQ_RHUM") {
                   a='rHum';
                }
                l =  checkboxesChecked[1];
                if (l=="CO2") {
                    b='CO2';
                }
                else if (l=="AQ_TEMP") {
                    b='Temp';
                }
                else if (l=="AQ_RHUM") {
                   b='rHum';
                }
                m =  checkboxesChecked[2];
                if (m=="CO2") {
                    c='CO2';
                }
                else if (m=="AQ_TEMP") {
                    c='Temp';
                }
                else if (m=="AQ_RHUM") {
                   c='rHum';
                }
                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/smartroom/08_Smart-Room-Air-Quality.png" width="20", height=20> <span style="color:#20c997">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/08_Smart-Room-Air-Quality2.png" width="20", height=20> <span style="color:#dc3545">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/smartroom/08_Smart-Room-Air-Quality3.png" width="20", height=20> <span style="color:#0dcaf0">'+c+ '</span>&nbsp';
             }
             else if (y== 'checkcm') {
                 x =  checkboxesChecked[0];
                if (x=="CPC") {
                    a='CPC';
                }
                else if (x=="SDV") {
                    a='SDV';
                }
                else if (x=="MASK") {
                    a='MV';
                }
                else if (x=="SRT") {
                    a='Srt';
                }
                else if (x=="END") {
                    a='End';
                }
                 l =  checkboxesChecked[1];
                if (l=="CPC") {
                    b='CPC';
                }
                else if (l=="SDV") {
                    b='SDV';
                }
                else if (l=="MASK") {
                    b='MV';
                }
                else if (l=="SRT") {
                    b='Srt';
                }
                else if (l=="END") {
                    b='End';
                }
                 m =  checkboxesChecked[2];
                if (m=="CPC") {
                    c='CPC';
                }
                else if (m=="SDV") {
                    c='SDV';
                }
                else if (m=="MASK") {
                    c='MV';
                }
                 else if (m=="SRT") {
                    c='Srt';
                }
                else if (m=="END") {
                    c='End';
                }
                 n =  checkboxesChecked[3];
                if (n=="CPC") {
                    d='CPC';
                }
                else if (n=="SDV") {
                    d='SDV';
                }
                else if (n=="MASK") {
                    d='MV';
                }
                else if (n=="SRT") {
                    d='Srt';
                }
                else if (n=="END") {
                    d='End';
                }
                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/crowd/cm1_v2.png" width="20", height=20> <span style="color:#0dcaf0"">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/crowd/cm2_v2.png" width="20", height=20> <span style="color:#0dcaf0"">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/crowd/cm3_v2.png" width="20", height=20> <span style="color:#0dcaf0">'+c+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/crowd/cm4_v2.png" width="20", height=20> <span style="color:#dc3545">'+d+ '</span>&nbsp';

             }
             else if (y== 'checkem') {
                 x =  checkboxesChecked[j];
                if (x=="RS") {
                    a='RS';
                }
                else if (x=="R_CURR") {
                    a='RC';
                }
                else if (x=="Y_CURR") {
                    a='YC';
                }
                else if (x=="B_CURR") {
                    a='BC';
                }
                else if (x=="R_VOLT") {
                    a='RV';
                }
                else if (x=="Y_VOLT") {
                    a='YV';
                }
                else if (x=="B_VOLT") {
                    a='BV';
                }
                else if (x=="EM_PF") {
                    a='PF';
                }
                 else if (x=="EM_FREQ") {
                    a='Freq';
                }
                else if (x=="AP") {
                    a='AP';
                }
                else if (x=="RP") {
                    a='RP';
                }
                else if (x=="EC") {
                    a='EC';
                }
                else if (x=="LEAD") {
                    a='Lead';
                }
                else if (x=="LAG") {
                    a='Lag';
                }
                else if (x=="TTL_EC") {
                    a='TEC';
                }
                l =  checkboxesChecked[0];
                if (l=="RS") {
                    b='RS';
                }
                else if (l=="R_CURR") {
                    b='RC';
                }
                else if (l=="Y_CURR") {
                    b='YC';
                }
                else if (l=="B_CURR") {
                    b='BC';
                }
                else if (l=="R_VOLT") {
                    b='RV';
                }
                else if (l=="Y_VOLT") {
                    b='YV';
                }
                else if (l=="B_VOLT") {
                    b='BV';
                }
                else if (l=="EM_PF") {
                    b='PF';
                }
                 else if (l=="EM_FREQ") {
                    b='Freq';
                }
                else if (l=="AP") {
                    b='AP';
                }
                else if (l=="RP") {
                    b='RP';
                }
                else if (l=="EC") {
                    b='EC';
                }
                else if (l=="LEAD") {
                    b='Lead';
                }
                else if (l=="LAG") {
                    b='Lag';
                }
                else if (l=="TTL_EC") {
                    b='TEC';
                }
                m = checkboxesChecked[2];
                if (m=="RS") {
                    c='RS';
                }
                else if (m=="R_CURR") {
                    c='RC';
                }
                else if (m=="Y_CURR") {
                    c='YC';
                }
                else if (m=="B_CURR") {
                    c='BC';
                }
                else if (m=="R_VOLT") {
                    c='RV';
                }
                else if (m=="Y_VOLT") {
                    c='YV';
                }
                else if (m=="B_VOLT") {
                    c='BV';
                }
                else if (m=="EM_PF") {
                    c='PF';
                }
                 else if (m=="EM_FREQ") {
                    c='Freq';
                }
                else if (m=="AP") {
                    c='AP';
                }
                else if (m=="RP") {
                    c='RP';
                }
                else if (m=="EC") {
                    c='EC';
                }
                else if (m=="LEAD") {
                    c='Lead';
                }
                else if (m=="LAG") {
                    c='Lag';
                }
                else if (m=="TTL_EC") {
                    c='TEC';
                }
                n =  checkboxesChecked[3];
                if (n=="RS") {
                    d='RS';
                }
                else if (n=="R_CURR") {
                    d='RC';
                }
                else if (n=="Y_CURR") {
                    d='YC';
                }
                else if (n=="B_CURR") {
                    d='BC';
                }
                else if (n=="R_VOLT") {
                    d='RV';
                }
                else if (n=="Y_VOLT") {
                    d='YV';
                }
                else if (n=="B_VOLT") {
                    d='BV';
                }
                else if (n=="EM_PF") {
                    d='PF';
                }
                 else if (n=="EM_FREQ") {
                    d='Freq';
                }
                else if (n=="AP") {
                    d='AP';
                }
                else if (n=="RP") {
                    d='RP';
                }
                else if (n=="EC") {
                    d='EC';
                }
                else if (n=="LEAD") {
                    d='Lead';
                }
                else if (n=="LAG") {
                    d='Lag';
                }
                else if (n=="TTL_EC") {
                    d='TEC';
                }
                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/energy/04_Energy-Monitoring2.png" width="20", height=20> <span style="color:#20c997">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/energy/04_Energy-Monitoring3.png" width="20", height=20> <span style="color:#0dcaf0">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/energy/04_Energy-Monitoring4.png" width="20", height=20> <span style="color:#ffc107">'+c+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/energy/04_Energy-Monitoring1.png" width="20", height=20> <span style="color:#dc3545">'+d+ '</span>&nbsp';

             }
             else if (y== 'checksl') {
                 x =  checkboxesChecked[0];
                if (x=="EAC") {
                    a='EAC';
                }
                else if (x=="EAC_TTL") {
                    a='ET';
                }
                else if (x=="FREQ") {
                    a='Freq';
                }
                else if (x=="AP") {
                    a='AP';
                }
                else if (x=="PF") {
                    a='PF';
                }
                else if (x=="RS") {
                    a='RS';
                }
                else if (x=="ST") {
                    a='ST';
                }
                else if (x=="TR") {
                    a='TR';
                }
                else if (x=="V1") {
                    a='V1';
                }
                else if (x=="C1") {
                    a='C1';
                }
                else if (x=="P1") {
                    a='P1';
                }
                else if (x=="V2") {
                    a='V2';
                }
                else if (x=="C2") {
                    a='C2';
                }
                else if (x=="P2") {
                    a='P2';
                }
                else if (x=="V3") {
                    a='V3';
                }
                else if (x=="C3") {
                    a='C3';
                }
                else if (x=="P3") {
                    a='P3';
                }
                else if (x=="PV1_V") {
                    a='PV1';
                }
                else if (x=="PV1_C") {
                   a='PC1';
                }
                else if (x=="PV1_P") {
                    a='PP1';
                }
                 else if (x=="PV2_V") {
                    a='PV2';
                }
                else if (x=="PV2_C") {
                    a='PC2';
                }
                else if (x=="PV2_P") {
                    a='PP2';
                }
                else if (x=="PV3_V") {
                    a='PV3';
                }
                else if (x=="PV3_C") {
                    a='PC3';
                }
                else if (x=="PV3_P") {
                    a='PP3';
                }
                else if (x=="PV4_V") {
                    a='PV4';
                }
                else if (x=="PV4_C") {
                    a='PC4';
                }
                else if (x=="PV4_P") {
                    a='PP4';
                }
                 else if (x=="PV5_V") {
                    a='PV5';
                }
                else if (x=="PV5_C") {
                    a='PC5';
                }
                else if (x=="PV5_P") {
                    a='PP5';
                }
                else if (x=="PV6_V") {
                    a='PV6';
                }
                else if (x=="PV6_C") {
                    a='PC6';
                }
                else if (x=="PV6_P") {
                    a='PP6';
                }
                l =  checkboxesChecked[1];
                if (l=="EAC") {
                    b='EAC';
                }
                else if (l=="EAC_TTL") {
                    b='ET';
                }
                else if (l=="FREQ") {
                    b='Freq';
                }
                else if (l=="AP") {
                    b='AP';
                }
                else if (l=="PF") {
                    b='PF';
                }
                else if (l=="RS") {
                    b='RS';
                }
                else if (l=="ST") {
                    b='ST';
                }
                else if (l=="TR") {
                    b='TR';
                }
                else if (l=="V1") {
                    b='V1';
                }
                else if (l=="C1") {
                    b='C1';
                }
                else if (l=="P1") {
                    b='P1';
                }
                else if (l=="V2") {
                    b='V2';
                }
                else if (l=="C2") {
                    b='C2';
                }
                else if (l=="P2") {
                    b='P2';
                }
                else if (l=="V3") {
                    b='V3';
                }
                else if (l=="C3") {
                    b='C3';
                }
                else if (l=="P3") {
                    b='P3';
                }
                else if (l=="PV1_V") {
                    b='PV1';
                }
                else if (l=="PV1_C") {
                   b='PC1';
                }
                else if (l=="PV1_P") {
                    b='PP1';
                }
                 else if (l=="PV2_V") {
                    b='PV2';
                }
                else if (l=="PV2_C") {
                    b='PC2';
                }
                else if (l=="PV2_P") {
                    b='PP2';
                }
                else if (l=="PV3_V") {
                    b='PV3';
                }
                else if (l=="PV3_C") {
                    b='PC3';
                }
                else if (l=="PV3_P") {
                    b='PP3';
                }
                else if (l=="PV4_V") {
                    b='PV4';
                }
                else if (l=="PV4_C") {
                    b='PC4';
                }
                else if (l=="PV4_P") {
                    b='PP4';
                }
                 else if (l=="PV5_V") {
                    b='PV5';
                }
                else if (l=="PV5_C") {
                    b='PC5';
                }
                else if (l=="PV5_P") {
                    b='PP5';
                }
                else if (l=="PV6_V") {
                    b='PV6';
                }
                else if (l=="PV6_C") {
                    b='PC6';
                }
                else if (l=="PV6_P") {
                    b='PP6';
                }
                m =  checkboxesChecked[2];
                if (m=="EAC") {
                    c='EAC';
                }
                else if (m=="EAC_TTL") {
                    c='ET';
                }
                else if (m=="FREQ") {
                    c='Freq';
                }
                else if (m=="AP") {
                    c='AP';
                }
                else if (m=="PF") {
                    c='PF';
                }
                else if (m=="RS") {
                    c='RS';
                }
                else if (m=="ST") {
                    c='ST';
                }
                else if (m=="TR") {
                    c='TR';
                }
                else if (m=="V1") {
                    c='V1';
                }
                else if (m=="C1") {
                    c='C1';
                }
                else if (m=="P1") {
                    c='P1';
                }
                else if (m=="V2") {
                    c='V2';
                }
                else if (m=="C2") {
                    c='C2';
                }
                else if (m=="P2") {
                    c='P2';
                }
                else if (m=="V3") {
                    c='V3';
                }
                else if (m=="C3") {
                    c='C3';
                }
                else if (m=="P3") {
                    c='P3';
                }
                else if (m=="PV1_V") {
                    c='PV1';
                }
                else if (m=="PV1_C") {
                   c='PC1';
                }
                else if (m=="PV1_P") {
                    c='PP1';
                }
                 else if (m=="PV2_V") {
                    c='PV2';
                }
                else if (m=="PV2_C") {
                    c='PC2';
                }
                else if (m=="PV2_P") {
                    c='PP2';
                }
                else if (m=="PV3_V") {
                    c='PV3';
                }
                else if (m=="PV3_C") {
                    c='PC3';
                }
                else if (m=="PV3_P") {
                    c='PP3';
                }
                else if (m=="PV4_V") {
                    c='PV4';
                }
                else if (m=="PV4_C") {
                    c='PC4';
                }
                else if (m=="PV4_P") {
                    c='PP4';
                }
                 else if (m=="PV5_V") {
                    c='PV5';
                }
                else if (m=="PV5_C") {
                    c='PC5';
                }
                else if (m=="PV5_P") {
                    c='PP5';
                }
                else if (m=="PV6_V") {
                    c='PV6';
                }
                else if (m=="PV6_C") {
                    c='PC6';
                }
                else if (m=="PV6_P") {
                    c='PP6';
                }
                n = checkboxesChecked[3];
                if (n=="EAC") {
                    d='EAC';
                }
                else if (n=="EAC_TTL") {
                    d='ET';
                }
                else if (n=="FREQ") {
                    d='Freq';
                }
                else if (n=="AP") {
                    d='AP';
                }
                else if (n=="PF") {
                    d='PF';
                }
                else if (n=="RS") {
                    d='RS';
                }
                else if (n=="ST") {
                    d='ST';
                }
                else if (n=="TR") {
                    d='TR';
                }
                else if (n=="V1") {
                    d='V1';
                }
                else if (n=="C1") {
                    d='C1';
                }
                else if (n=="P1") {
                    d='P1';
                }
                else if (n=="V2") {
                    d='V2';
                }
                else if (n=="C2") {
                    d='C2';
                }
                else if (n=="P2") {
                    d='P2';
                }
                else if (n=="V3") {
                    d='V3';
                }
                else if (n=="C3") {
                    d='C3';
                }
                else if (n=="P3") {
                    d='P3';
                }
                else if (n=="PV1_V") {
                    d='PV1';
                }
                else if (n=="PV1_C") {
                   d='PC1';
                }
                else if (n=="PV1_P") {
                    d='PP1';
                }
                 else if (n=="PV2_V") {
                    d='PV2';
                }
                else if (n=="PV2_C") {
                    d='PC2';
                }
                else if (n=="PV2_P") {
                    d='PP2';
                }
                else if (n=="PV3_V") {
                    d='PV3';
                }
                else if (n=="PV3_C") {
                    d='PC3';
                }
                else if (n=="PV3_P") {
                    d='PP3';
                }
                else if (n=="PV4_V") {
                    d='PV4';
                }
                else if (n=="PV4_C") {
                    d='PC4';
                }
                else if (n=="PV4_P") {
                    d='PP4';
                }
                 else if (n=="PV5_V") {
                    d='PV5';
                }
                else if (n=="PV5_C") {
                    d='PC5';
                }
                else if (n=="PV5_P") {
                    d='PP5';
                }
                else if (n=="PV6_V") {
                    d='PV6';
                }
                else if (n=="PV6_C") {
                    d='PC6';
                }
                else if (n=="PV6_P") {
                    d='PP6';
                }
                document.getElementById("parameterbody").innerHTML = '<img src="/dashboard/static/images/icon/solar/sl1_v2.png" width="20", height=20> <span style="color:#20c997">'+a+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/solar/sl2_v2.png" width="20", height=20> <span style="color:#dc3545">'+b+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/solar/sl3_v2.png" width="20", height=20> <span style="color:#0dcaf0">'+c+ '</span>&nbsp' + '<img src="/dashboard/static/images/icon/solar/sl4_v2.png" width="20", height=20> <span style="color:#ffc107">'+d+ '</span>&nbsp';

             }
  }
}

function reInitParameters(name,response, type){
            checkboxClick(name);
            for (var i = 0; i < response.length; i++) {
                //get popup content
                set=getPopupContent(response[i], type);
                // send it to newpopup.setcontent

                popup = newpopupObj[response[i].node_id];
                console.log('TESTING ISSUE',response[i].node_id,set);

                popup.setContent(set);

            }
        }


function allnodesSelect() {
    console.log('in allnodesSelect');
    document.getElementById('currentvertical').innerHTML = "ALL";
    global_nodes = air_quality_nodes.concat(water_flow_nodes, water_distribution_nodes, srac_nodes, srem_nodes, sroc_nodes, sraq_nodes, crowd_monitoring_nodes, solar_nodes, energy_monitoring_nodes, weather_station_nodes);
}

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

 function reInitMarkers(e) {
            var target = event.target || event.srcElement;
            // console.log("Target ===", target.id)
            
            console.log("MAp", circle_global)
            circle_global.forEach(circle => {
                console.log("Circle layer=", map.hasLayer(circle))
                map.removeLayer(circle);
            });
            circle_global = [];

            labelCircle_global.forEach(labelCircle => {
                 map.removeLayer(labelCircle);
            });
            labelCircle_global = [];

            switch (target.id) {
                case "air_quality":
                    initialize(air_quality_nodes, "AQ");
                    console.log("air_quality")
                    airqualitynodesSelect();
                    myParamsFunction("aq");
                    airHead();
                break;

                case "water_distribution":
                    initialize(water_distribution_nodes, "WD");
                    console.log("water distribution");
                    waterdistributionnodesSelect();
                    myParamsFunction("wd");
                    wdHead();
                break;

                case "water_flow":
                    initialize(water_flow_nodes, "WF");
                    console.log("water flow")
                    waterflownodesSelect();
                    myParamsFunction("wf");
                    wfHead();
                break;

                case "WeatherStation":
                    initialize(weather_station_nodes, "WE");
                    console.log("Weather Station")
                    weatherstationnodesSelect();
                    myParamsFunction("we");
                    weHead();
                break;

                case "Solar":
                    initialize(solar_nodes, "SL");
                    console.log("Solar")
                    solarnodesSelect();
                    myParamsFunction("sl");
                    slHead();
                break;

                // case "smart_room":
                //     initialize(smart_room_nodes, "SM");
                // break;

                case "sr_ac":
                    initialize(srac_nodes, "SR-AC");
                    console.log("sr-ac")
                    sracnodesSelect();
                    myParamsFunction("sr_ac");
                    sracHead();
                break;

                 case "sr_em":
                    initialize(srem_nodes, "SR-EM");
                    console.log("sr-em")
                    sremnodesSelect();
                    myParamsFunction("srem");
                    sremHead();
                break;

                 case "sr_oc":
                    initialize(sroc_nodes, "SR-OC");
                    console.log("sr-oc")
                    srocnodesSelect();
                    myParamsFunction("sroc");
                break;

                 case "sr_aq":
                    initialize(sraq_nodes, "SR-AQ");
                    console.log("sr-aq")
                    sraqnodesSelect();
                    myParamsFunction("sraq");
                    sraqHead();
                break;

                case "crowd-monitoring":
                    initialize(crowd_monitoring_nodes, "CM");
                    console.log("crowd monitoring")
                    crowdmonitoringnodesSelect();
                    myParamsFunction("cm");
                    cmHead();
                break;

                case "energy-monitoring":
                    initialize(energy_monitoring_nodes, "EM");
                    console.log("energy monitoring")
                    energymonitoringnodesSelect();
                    myParamsFunction("em");
                    emHead();
                break;

                default:
                    console.log("No verticals matched!")
                break;
            }
 }

        function downloadJson(){
            console.log("downloadJson");
            let jsonContent = "data:text/json;charset=utf-8," + JSON.stringify(debugDataForGraph) ;
            var encodedUri = encodeURI(jsonContent);
            var link = document.getElementById("downloadurl");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "graph_data.json");
            link.click();
        }

        function downloadCsv() {
            console.log("downloadCsv");
        
            var csvContent = "data:text/csv;charset=utf-8,";
            
            if (typeof debugDataForGraph === 'object' && debugDataForGraph !== null) {
                // Extract keys from the first object in the "aq" array
                var keys = Object.keys(debugDataForGraph.aq[0]);
                csvContent += keys.join(",") + "\r\n";
        
                // Loop through each object in the "aq" array and create CSV rows
                debugDataForGraph.aq.forEach(obj => {
                    var values = keys.map(key => obj[key]);
                    csvContent += values.join(",") + "\r\n";
                });
            } else {
                console.error("debugDataForGraph is not an object or is null.");
                return;
            }
        
            var encodedUri = encodeURI(csvContent);
            var link = document.getElementById("downloadurl");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "graph_data.csv");
            link.click();
        }
        
        
        

function popupClick(type, nodeId){
            console.log(type,nodeId,"xsdf")
            console.log("Popup Click....FUNCTIONS.js..............");
            console.log("Node id ====", nodeId);
            NODE_ID = nodeId;
            VERTICAL_TYPE = type;
            var modalTitle = document.getElementById('modalTitle');
         
            switch(type) {
                case "AQ":
                    modalTitle.innerHTML = "Air Quality";
                    break;

                case "WD":
                    modalTitle.innerHTML = "Water Distribution";
                    break;

                case "WF":
                    modalTitle.innerHTML = "Water Flow";
                    break;

                case "WE":
                    modalTitle.innerHTML = "Weather Monitoring";
                    break;

                case "SL":
                    modalTitle.innerHTML = "Solar Energy";
                    break;

                case "EM":
                    modalTitle.innerHTML = "Conventional Energy";
                    break;

                case "CM":
                    modalTitle.innerHTML = "Crowd Monitoring";
                    break;

                case "SR-AC":
                    modalTitle.innerHTML = "Smart Room - Air Conditioning";
                    break;

                case "SR-AQ":
                    modalTitle.innerHTML = "Smart Room - Air Quality";
                    break;

                case "SR-EM":
                    modalTitle.innerHTML = "Smart Room - Energy Monitoring";
                    break;

                case "SR-OC":
                    modalTitle.innerHTML = "Smart Room - Occupancy";
                    break;
                case "WN":
                    modalTitle.innerHTML="WISUN"
                    break;
            }
            
            modalTitle.innerHTML = modalTitle.innerHTML + " - "+ nodeId;

            var modal = document.getElementById('myModal');
            console.log("I am popup");

            // destroy chart on dialog dismiss to optimize memory
            modal.addEventListener('hidden.bs.modal', function (event) {
                if (myChart != null) {
                    console.log("CHART destroyed");
                    selectedNodes = [];
                    selectedContext = [];
                    myChart.destroy();
                   
                }
            });
            selectedNodes.push(nodeId);
            rangeChangeCall();
}



function APICall() {
    console.log('sr_aq clickedddd')
      
    var type = current_selected_vertical.toUpperCase();
    if (VERTICAL_TYPE=="SR-AQ") {
        console.log('sr-aq clicked')
        // Use only the first part of the nodeId
        current_selected_vertical="sr_aq";
        type = "SR-AQ";
    }
    else if(VERTICAL_TYPE=="SR-AC"){
        console.log('sr-aC clicked')
        // Use only the first part of the nodeId
        current_selected_vertical="sr_ac";
        type = "SR-AC";
    
    }
    else if(VERTICAL_TYPE=="SR-EM"){
        console.log('sr-EM clicked')
        // Use only the first part of the nodeId
        current_selected_vertical="sr_em";
        type = "SR-EM";
    
    }
    else if(VERTICAL_TYPE=="SR-OC"){
        console.log('sr-OC clicked')
        // Use only the first part of the nodeId
        current_selected_vertical="sr_oc";
        type = "SR-OC";
    
    }

    
    var range = document.getElementById("range").value;
    var interval = document.getElementById("interval").value;
    var nodeString = "";
    for (var i = 0; i < selectedNodes.length; i++) {
        if (i != 0) {
            nodeString += ",";
        }
        nodeString += selectedNodes[i];
    }
    var maxDate = new Date();
    var minDate;
    if (range == 'day') {
        minDate = new Date(new Date(maxDate).setHours(0, 0, 0, 0));
    } else if (range == 'week') {
        minDate = new Date(new Date(new Date(maxDate).getTime() - 1000 * 60 * 60 * 24 * ((new Date(maxDate).getDay() + 6) % 7)).setHours(0, 0, 0, 0));
    } else if (range == 'month') {
        minDate = new Date(new Date(new Date(maxDate).setHours(0, 0, 0, 0)).setDate(1));
    } else if (range == 'year') {
        minDate = new Date(new Date(new Date(new Date(maxDate).setHours(0, 0, 0, 0)).setDate(1)).setMonth(0));
    } else {
        minDate = new Date(2018, 0, 1);
    }

    var url = window.location.origin + "/graph/?start=" + minDate.toISOString() + "&end=" + maxDate.toISOString() + "&type=" + type + "&nodes=" + nodeString + "&interval=" + interval;
    console.log(url);
    $.ajax({
        url: url,
        dataType: "json",
        error: function(xhr, status, error) {
            console.log("error1", xhr);
            console.log("error2", status);
            console.log("error3", error);
        },
        success: function(data){
            $( ".result" ).html( data );
            console.log("Graph api response=", data);
            type = type.replace("-", "_");
            vertical = type;  // refresh selected vertical for graph
            verticalNodes[type] = [selectedNodes[0]]; //verticalNodes[type] = data.nodes; // refresh selected nodes
            verticalColumns[type] = data.parameters; // refresh columns
            prepareGraph(data);
        },
        timeout: 60000 
    });
    return;
}

function controlChangeCall() {
    APICall();
    return;
}

function rangeChangeCall() {
    var range = document.getElementById("range").value;
    var intervalOptions;
    if (range == 'day') {
        intervalOptions = ["Minute", "Hour", "Day"];
    } else if (range == 'week') {
        intervalOptions = ["Hour", "Day", "Week"];
    } else if (range == 'month') {
        intervalOptions = ["Day", "Week", "Month"];
    } else if (range == 'year') {
        intervalOptions = ["Day", "Week", "Month"];
    } else {
        intervalOptions = ["Day", "Week", "Month"];
    }
    var intervalSelect = $('#interval');
    $("#interval").empty();
    intervalOptions.forEach(value => {
        intervalSelect
          .append($('<option>', { value : value.toLowerCase() })
          .text("By " + value));
    });
    APICall();
    return;
}

function addNodeCall() {
    var additionNode = document.getElementById("additionNode").value;
    if (!selectedNodes.includes(additionNode)) {
        selectedNodes.push(additionNode);
    }
    console.log("selectedNodes:", selectedNodes);
    APICall();
    return;
}

function addContextCall() {
    myChart.data.datasets.splice(selectedNodes.length, myChart.data.datasets.length - selectedNodes.length);
    var additionContext = document.getElementById("additionContext").value;
    if (!selectedContext.includes(additionContext)) {
        selectedContext.push(additionContext);
    }
    console.log("selectedContext:", selectedContext);
    updateContext();
    return;
}

function getPopupContent(node, type) {
        var content = "";
        var nodeId = node.node_id;

        switch (type) {
            case "AQ":
                    checkboxClick('checkair');


                    l=checkboxesChecked[0];
                    console.log('check',l );
                    
                    if (l=='PM25'){
                        
                        x='PM25';
                        y=node.pm25;
                        z='ppm';
                    
                    }
                        else if (l=='PM10'){
                            x='PM10';
                            y=node.pm10;
                            z='ppm';
                        }
                        else if (l=='TEMP'){
                            x='Temp';
                            y=node.temperature;
                            z='°C';
                        }
                        else if (l=='RELHUM'){
                            x='rHum';
                            y=node.relative_humidity;
                            z='ppm';
                        }
                        else if (l=='CO'){
                            x='CO';
                            y=node.co;
                            z='ppm';
                        }
                        else if (l=='NO2'){
                            x='NO2';
                            y=node.no2;
                            z='ppm';
                        }
                        else if (l=='NH3'){
                            x='NH3';
                            y=node.nh3;
                            z='ppm';
                        }
                        else if (l=='AQI'){
                            x='AQI';
                            y=node.aqi;
                            z='';
                        }
                        else if (l=='AQL'){
                            x='AQL';
                            y=node.aql;
                            z='';
                        }
                        else if (l=='AQIMP'){
                            x='AQI-MP';
                            y=node.aqi_mp;
                            z='';
                        }

                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='PM25'){
                            a='PM25';
                            b=node.pm25;
                            c='ppm';
                        }
                        else if (m=='PM10'){
                            a='PM10';
                            b=node.pm10;
                            c='ppm';
                        }
                        else if (m=='TEMP'){
                            a='Temp';
                            b=node.temperature;
                            c='°C';
                        }
                        else if (m=='RELHUM'){
                            a='rHum';
                            b=node.relative_humidity;
                            c='ppm';
                        }
                        else if (m=='CO'){
                            a='CO';
                            b=node.co;
                            c='ppm';
                        }
                        else if (m=='NO2'){
                            a='NO2';
                            b=node.no2;
                            c='ppm';
                        }
                        else if (m=='NH3'){
                            a='NH3';
                            b=node.nh3;
                            c='ppm';
                        }
                        else if (m=='AQI'){
                            a='AQI';
                            b=node.aqi;
                            c='';
                        }
                        else if (m=='AQL'){
                            a='AQL';
                            b=node.aql;
                            c='';
                        }
                        else if (m=='AQIMP'){
                            a='AQI-MP';
                            b=node.aqi_mp;
                            c='';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n );
                        if (n=='PM25'){
                            d='PM25';
                            e=node.pm25;
                            f='ppm';
                        }
                        else if (n=='PM10'){
                            d='PM10';
                            e=node.pm10;
                            f='ppm';
                        }
                        else if (n=='TEMP'){
                            d='Temp';
                            e=node.temperature;
                            f='°C';
                        }
                        else if (n=='RELHUM'){
                            d='rHum';
                            e=node.relative_humidity;
                            f='ppm';
                        }
                        else if (n=='CO'){
                            d='CO';
                            e=node.co;
                            f='ppm';
                        }
                        else if (n=='NO2'){
                            d='NO2';
                            e=node.no2;
                            f='ppm';
                        }
                        else if (n=='NH3'){
                            d='NH3';
                            e=node.nh3;
                            f='ppm';
                        }
                        else if (n=='AQI'){
                            d='AQI';
                            e=node.aqi;
                            f='';
                        }
                        else if (n=='AQL'){
                            d='AQL';
                            e=node.aql;
                            f='';
                        }
                        else if (n=='AQIMP'){
                            d='AQI-MP';
                            e=node.aqi_mp;
                            f='';
                        }
                         o=checkboxesChecked[3];
                        console.log('check',o );
                        if (o=='PM25'){
                            i='PM25';
                            j=node.pm25;
                            k='ppm';
                        }
                        else if (o=='PM10'){
                            i='PM10';
                            j=node.pm10;
                            k='ppm';
                        }
                        else if (o=='TEMP'){
                            i='Temp';
                            j=node.temperature;
                            k='°C';
                        }
                        else if (o=='RELHUM'){
                            i='rHum';
                            j=node.relative_humidity;
                            k='ppm';
                        }
                        else if (o=='CO'){
                            i='CO';
                            j=node.co;
                            k='ppm';
                        }
                        else if (o=='NO2'){
                            i='NO2';
                            j=node.no2;
                            k='ppm';
                        }
                        else if (o=='NH3'){
                            i='NH3';
                            j=node.nh3;
                            k='ppm';
                        }
                        else if (o=='AQI'){
                            i='AQI';
                            j=node.aqi;
                            k='';
                        }
                        else if (o=='AQL'){
                            i='AQL';
                            j=node.aql;
                            k='';
                        }
                        else if (o=='AQIMP'){
                            i='AQI-MP';
                            j=node.aqi_mp;
                            k='';
                        }

                             z='', c='', f='', k='' // skip setting units since coming from backend
                        icon_path_prefix = '/dashboard/static/images/icon/air/air'
			icon_path_suffix = '_v2.png';
			num = 4;
			icons = [];
			for(iter=1; iter<=num; iter++) {
				icons.push(icon_path_prefix + iter + icon_path_suffix);
			}
			colors = ['#20c997', '#ffc107', '#dc3545', '#0dcaf0'];
			values = [y, b, e, j];

			content = getContent('AQ', nodeId, icons, colors, values);


                break;

                case "WD":
                        checkboxClick('checkwd');


                        l=checkboxesChecked[0];
                        if (l=='WD_TEMP'){

                            x='Temp';
                            y=node.temperature;
                            z='°C';
                        }
                        else if (l=='TDS'){
                            x='TDS';
                            y=node.compensated_tds_value;
                            z='ppm';
                        }
                        else if (l=='WTR_LVL'){
                            x='WL';
                            y=node.water_level;
                            z='cm';
                        }
                        else if (l=='PH'){
                            x='pH';
                            y=node.ph;
                            z='';
                        }
                        else if (l=='TUR'){
                            x='Tur';
                            y=node.turbidity;
                            z='NTU';
                        }
                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='WD_TEMP'){
                            a='Temp';
                            b=node.temperature;
                            c='°C';
                        }
                        else if (m=='TDS'){
                            a='TDS';
                            b=node.compensated_tds_value;
                            c='ppm';
                        }
                        else if (m=='WTR_LVL'){
                            a='WL';
                            b=node.water_level;
                            c='cm';
                        }
                        else if (m=='PH'){
                            a='pH';
                            b=node.ph;
                            c='';
                        }
                        else if (m=='TUR'){
                            a='Tur';
                            b=node.turbidity;
                            c='NTU';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n );
                        if (n=='WD_TEMP'){
                            d='Temp';
                            e=node.temperature;
                            f='°C';
                        }
                        else if (n=='TDS'){
                            d='TDS';
                            e=node.compensated_tds_value;
                            f='ppm';
                        }
                        else if (n=='WTR_LVL'){
                            d='WL';
                            e=node.water_level;
                            f='cm';
                        }
                        else if (n=='PH'){
                            d='pH';
                            e=node.ph;
                            f='';
                        }
                        else if (n=='TUR'){
                            d='Tur';
                            e=node.turbidity;
                            f='NTU';
                        }
                        o=checkboxesChecked[3];
                        console.log('check',o );
                        if (o=='WD_TEMP'){
                            i='Temp';
                            j=node.temperature;
                            k='°C';
                        }
                        else if (o=='TDS'){
                            i='TDS';
                            j=node.compensated_tds_value;
                            k='ppm';
                        }
                        else if (o=='WTR_LVL'){
                            i='WL';
                            j=node.water_level;
                            k='cm';
                        }
                        else if (o=='PH'){
                            i='pH';
                            j=node.ph;
                            k='';
                        }
                        else if (o=='TUR'){
                            i='Tur';
                            j=node.turbidity;
                            k='NTU';
                        }
                            z='', c='', f='', k='' // skip setting units since coming from backend

			icon_path_prefix = '/dashboard/static/images/icon/water/wd'
                        icon_path_suffix = '_v2.png';
                        num = 4;
                        icons = [];
                        for(iter=1; iter<=num; iter++) {
                                icons.push(icon_path_prefix + iter + icon_path_suffix);
                        }
                        colors = ['#20c997', '#0dcaf0', '#dc3545', '#ffc107'];
                        values = [y, b, e, j];

                        content = getContent('WD', nodeId, icons, colors, values);
                break;

                case "WF":
                        checkboxClick('checkwf');




                        l=checkboxesChecked[0];
                        console.log('check',l );
                        if (l=='FLO_RT'){
                            x='FR';
                            y=node.flowrate;
                            z='kl/min';
                        }
                        else if (l=='TTL_FLO'){
                            x='TF';
                            y=node.total_flow;
                            z='kl';
                        }
                        else if (l=='WF_PRESS'){
                            x='P';
                            y=node.pressure;
                            z='P';
                        }
                        else if (l=='PRESS_V'){
                            x='PV';
                            y=node.pressure_voltage;
                            z='V';
                        }
                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='FLO_RT'){
                            a='FR';
                            b=node.flowrate;
                            c='kl/min';
                        }
                        else if (m=='TTL_FLO'){
                            a='TF';
                            b=node.total_flow;
                            c='kl';
                        }
                        else if (m=='WF_PRESS'){
                            a='P';
                            b=node.pressure;
                            c='P';
                        }
                        else if (m=='PRESS_V'){
                            a='PV';
                            b=node.pressure_voltage;
                            c='V';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n );
                        if (n=='FLO_RT'){
                            d='FR';
                            e=node.flowrate;
                            f='kl/min';
                        }
                        else if (n=='TTL_FLO'){
                            d='TF';
                            e=node.total_flow;
                            f='kl';
                        }
                        else if (n=='WF_PRESS'){
                            d='P';
                            e=node.pressure;
                            f='P';
                        }
                        else if (n=='PRESS_V'){
                            d='PV';
                            e=node.pressure_voltage;
                            f='V';
                        }
                        o=checkboxesChecked[3];
                        console.log('check',o );
                        if (o=='FLO_RT'){
                            i='FR';
                            j=node.flowrate;
                            k='kl/min';
                        }
                        else if (o=='TTL_FLO'){
                            i='TF';
                            j=node.total_flow;
                            k='kl';
                        }
                        else if (o=='WF_PRESS'){
                            i='P';
                            j=node.pressure;
                            k='P';
                        }
                        else if (o=='PRESS_V'){
                            i='PV';
                            j=node.pressure_voltage;
                            k='V';
                        }

                        z='', c='', f='', k='' // skip setting units since coming from backend

			icon_path_prefix = '/dashboard/static/images/icon/water/wf'
                        icon_path_suffix = '_v2.png';
                        num = 4;
                        icons = [];
                        for(iter=1; iter<=num; iter++) {
                                icons.push(icon_path_prefix + iter + icon_path_suffix);
                        }
                        colors = ['#0dcaf0', '#ffc107', '#dc3545', '#20c997'];
                        values = [y, b, e, j];

                        content = getContent('WF', nodeId, icons, colors, values);
                break;

                case "WE":
                        checkboxClick('checkwe');



                        l=checkboxesChecked[0];
                        console.log('check',l );
                        if (l=='SOL_RAD'){
                            x='SR';
                            y=node.solar_radiation;
                            z='W/m2';
                        }
                        else if (l=='WE_TEMP'){
                            x='Temp';
                            y=node.temperature;
                            z='°C';
                        }
                        else if (l=='WE_RHUM'){
                            x='rHum';
                            y=node.relative_humidity;
                            z='ppm';
                        }
                        else if (l=='WIND_DIR'){
                            x='WD';
                            y=node.wind_direction;
                            z='';
                        }
                        else if (l=='WIND_SP'){
                            x='WS';
                            y=node.wind_speed;
                            z='m/s';
                        }
                        else if (l=='GUST'){
                            x='GS';
                            y=node.gust_speed;
                            z='m/s';
                        }
                        else if (l=='DEW'){
                            x='Dew';
                            y=node.dew_point;
                            z='';
                        }
                        else if (l=='DC_VLT'){
                            x='DV';
                            y=node.battery_dc_voltage;
                            z='V';
                        }
                        else if (l=='RAIN'){
                            x='Rain';
                            y=node.rain;
                            z='';
                        }
                        else if (l=='WE_PRESS'){
                            x='P';
                            y=node.pressure;
                            z='P';
                        }
                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='SOL_RAD'){
                            a='SR';
                            b=node.solar_radiation;
                            c='W/m2';
                        }
                        else if (m=='WE_TEMP'){
                            a='Temp';
                            b=node.temperature;
                            c='°C';
                        }
                        else if (m=='WE_RHUM'){
                            a='rHum';
                            b=node.relative_humidity;
                            c='ppm';
                        }
                        else if (m=='WIND_DIR'){
                            a='WD';
                            b=node.wind_direction;
                            c='';
                        }
                        else if (m=='WIND_SP'){
                            a='WS';
                            b=node.wind_speed;
                            c='m/s';
                        }
                        else if (m=='GUST'){
                            a='GS';
                            b=node.gust_speed;
                            c='m/s';
                        }
                        else if (m=='DEW'){
                            a='Dew';
                            b=node.dew_point;
                            c='';
                        }
                        else if (m=='DC_VLT'){
                            a='DV';
                            b=node.battery_dc_voltage;
                            c='V';
                        }
                        else if (m=='RAIN'){
                            a='Rain';
                            b=node.rain;
                            c='';
                        }
                        else if (m=='WE_PRESS'){
                            a='P';
                            b=node.pressure;
                            c='P';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n );
                        if (n=='SOL_RAD'){
                            d='SR';
                            e=node.solar_radiation;
                            f='W/m2';
                        }
                        else if (n=='WE_TEMP'){
                            d='Temp';
                            e=node.temperature;
                            f='°C';
                        }
                        else if (n=='WE_RHUM'){
                            d='rHum';
                            e=node.relative_humidity;
                            f='ppm';
                        }
                        else if (n=='WIND_DIR'){
                            d='WD';
                            e=node.wind_direction;
                            f='';
                        }
                        else if (n=='WIND_SP'){
                            d='WS';
                            e=node.wind_speed;
                            f='m/s';
                        }
                        else if (n=='GUST'){
                            d='GS';
                            e=node.gust_speed;
                            f='m/s';
                        }
                        else if (n=='DEW'){
                            d='Dew';
                            e=node.dew_point;
                            f='';
                        }
                        else if (n=='DC_VLT'){
                            d='DV';
                            e=node.battery_dc_voltage;
                            f='V';
                        }
                        else if (n=='RAIN'){
                            d='Rain';
                            e=node.rain;
                            f='';
                        }
                        else if (n=='WE_PRESS'){
                            d='P';
                            e=node.pressure;
                            f='P';
                        }
                        o=checkboxesChecked[3];
                        console.log('check',o );
                        if (o=='SOL_RAD'){
                            i='SR';
                            j=node.solar_radiation;
                            k='W/m2';
                        }
                        else if (o=='WE_TEMP'){
                            i='Temp';
                            j=node.temperature;
                            k='°C';
                        }
                        else if (o=='WE_RHUM'){
                            i='rHum';
                            j=node.relative_humidity;
                            k='%';
                        }
                        else if (o=='WIND_DIR'){
                            i='WD';
                            j=node.wind_direction;
                            k='';
                        }
                        else if (o=='WIND_SP'){
                            i='WS';
                            j=node.wind_speed;
                            k='m/s';
                        }
                        else if (o=='GUST'){
                            i='GS';
                            j=node.gust_speed;
                            k='m/s';
                        }
                        else if (o=='DEW'){
                            i='Dew';
                            j=node.dew_point;
                            k='';
                        }
                        else if (o=='DC_VLT'){
                            i='DV';
                            j=node.battery_dc_voltage;
                            k='V';
                        }
                        else if (o=='RAIN'){
                            i='Rain';
                            j=node.rain;
                            k='';
                        }
                        else if (o=='WE_PRESS'){
                            i='P';
                            j=node.pressure;
                            k='P';
                        }

                            z='', c='', f='', k='' // skip setting units since coming from backend

			icon_path_prefix = '/dashboard/static/images/icon/weather/we'
                        icon_path_suffix = '_v2.png';
                        num = 4;
                        icons = [];
                        for(iter=1; iter<=num; iter++) {
                                icons.push(icon_path_prefix + iter + icon_path_suffix);
                        }
                        colors = ['#20c997', '#dc3545', '#0dcaf0', '#ffc107'];
                        values = [y, b, e, j];

                        content = getContent('WE', nodeId, icons, colors, values);

                break;

                case "SL":
                        checkboxClick('checksl');




                        l=checkboxesChecked[0];
                        console.log('check',l );
                        if (l=='EAC'){
                            x='EAC';
                            y=node.eac_today;
                            z='';
                        }
                        else if (l=='EAC_TTL'){
                            x='ET';
                            y=node.eac_total;
                            z='';
                        }
                        else if (l=='FREQ'){
                            x='Freq';
                            y=node.frequency;
                            z='Hz';
                        }
                        else if (l=='AP'){
                            x='AP';
                            y=node.active_power;
                            z='KW';
                        }
                        else if (l=='PF'){
                            x='PF';
                            y=node.power_factor;
                            z='';
                        }
                        else if (l=='RS'){
                            x='RS';
                            y=node.voltage_rs;
                            z='V';
                        }
                        else if (l=='ST'){
                            x='ST';
                            y=node.voltage_st;
                            z='V';
                        }
                        else if (l=='TR'){
                            x='TR';
                            y=node.voltage_tr;
                            z='V';
                        }
                        else if (l=='V1'){
                            x='V1';
                            y=node.voltage1;
                            z='V';
                        }
                        else if (l=='C1'){
                            x='C1';
                            y=node.current1;
                            z='C';
                        }
                        else if (l=='P1'){
                            x='P1';
                            y=node.power1;
                            z='W';
                        }
                        else if (l=='V2'){
                            x='V2';
                            y=node.voltage2;
                            z='V';
                        }
                        else if (l=='C2'){
                            x='C2';
                            y=node.current2;
                            z='C';
                        }
                        else if (l=='P2'){
                            x='P2';
                            y=node.power2;
                            z='W';
                        }
                        else if (l=='V3'){
                            x='V3';
                            y=node.voltage3;
                            z='V';
                        }
                        else if (l=='C3'){
                            x='C3';
                            y=node.current3;
                            z='C';
                        }
                        else if (l=='P3'){
                            x='P3';
                            y=node.power3;
                            z='W';
                        }
                        else if (l=='PV1_V'){
                            x='PV1';
                            y=node.pv1_voltage;
                            z='V';
                        }
                        else if (l=='PV1_C'){
                            x='PC1';
                            y=node.pv1_current;
                            z='C';
                        }
                        else if (l=='PV1_P'){
                            x='PP1';
                            y=node.pv1_power;
                            z='W';
                        }
                        else if (l=='PV2_V'){
                            x='PV2';
                            y=node.pv2_voltage;
                            z='V';
                        }
                        else if (l=='PV2_C'){
                            x='PC2';
                            y=node.pv2_current;
                            z='C';
                        }
                        else if (l=='PV2_P'){
                            x='PP2';
                            y=node.pv2_power;
                            z='W';
                        }
                        else if (l=='PV3_V'){
                            x='PV3';
                            y=node.pv3_voltage;
                            z='V';
                        }
                        else if (l=='PV3_C'){
                            x='PC3';
                            y=node.pv3_current;
                            z='C';
                        }
                        else if (l=='PV3_P'){
                            x='PP3';
                            y=node.pv3_power;
                            z='W';
                        }
                        else if (l=='PV4_V'){
                            x='PV4';
                            y=node.pv4_voltage;
                            z='V';
                        }
                        else if (l=='PV4_C'){
                            x='PC4';
                            y=node.pv4_current;
                            z='C';
                        }
                        else if (l=='PV4_P'){
                            x='PP4';
                            y=node.pv4_power;
                            z='W';
                        }
                        else if (l=='PV5_V'){
                            x='PV5';
                            y=node.pv5_voltage;
                            z='V';
                        }
                        else if (l=='PV5_C'){
                            x='PC5';
                            y=node.pv5_current;
                            z='C';
                        }
                        else if (l=='PV5_P'){
                            x='PP5';
                            y=node.pv5_power;
                            z='W';
                        }else if (l=='PV2_V'){
                            x='PV2';
                            y=node.pv2_voltage;
                            z='V';
                        }
                        else if (l=='PV2_C'){
                            x='PC2';
                            y=node.pv2_current;
                            z='C';
                        }
                        else if (l=='PV2_P'){
                            x='PP2';
                            y=node.pv2_power;
                            z='W';
                        }
                        else if (l=='PV6_V'){
                            x='PV6';
                            y=node.pv6_voltage;
                            z='V';
                        }
                        else if (l=='PV6_C'){
                            x='PC6';
                            y=node.pv6_current;
                            z='C';
                        }
                        else if (l=='PV6_P'){
                            x='PP6';
                            y=node.pv6_power;
                            z='W';
                        }
                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='EAC'){
                            a='EAC';
                            b=node.eac_today;
                            c='';
                        }
                        else if (m=='EAC_TTL'){
                            a='ET';
                            b=node.eac_total;
                            c='';
                        }
                        else if (m=='FREQ'){
                            a='Freq';
                            b=node.frequency;
                            c='Hz';
                        }
                        else if (m=='AP'){
                            a='AP';
                            b=node.active_power;
                            c='KW';
                        }
                        else if (m=='PF'){
                            a='PF';
                            b=node.power_factor;
                            c='';
                        }
                        else if (m=='RS'){
                            a='RS';
                            b=node.voltage_rs;
                            c='V';
                        }
                        else if (m=='ST'){
                            a='ST';
                            b=node.voltage_st;
                            c='V';
                        }
                        else if (m=='TR'){
                            a='TR';
                            b=node.voltage_tr;
                            c='V';
                        }
                        else if (m=='V1'){
                            a='V1';
                            b=node.voltage1;
                            c='V';
                        }
                        else if (m=='C1'){
                            a='C1';
                            b=node.current1;
                            c='C';
                        }
                        else if (m=='P1'){
                            a='P1';
                            b=node.power1;
                            c='W';
                        }
                        else if (m=='V2'){
                            a='V2';
                            b=node.voltage2;
                            c='V';
                        }
                        else if (m=='C2'){
                            a='C2';
                            b=node.current2;
                            c='C';
                        }
                        else if (m=='P2'){
                            a='P2';
                            b=node.power2;
                            c='W';
                        }
                        else if (m=='V3'){
                            a='V3';
                            b=node.voltage3;
                            c='V';
                        }
                        else if (m=='C3'){
                            a='C3';
                            b=node.current3;
                            c='C';
                        }
                        else if (m=='P3'){
                            a='P3';
                            b=node.power3;
                            c='W';
                        }
                        else if (m=='PV1_V'){
                            a='PV1';
                            b=node.pv1_voltage;
                            c='V';
                        }
                        else if (m=='PV1_C'){
                            a='PC1';
                            b=node.pv1_current;
                            c='C';
                        }
                        else if (m=='PV1_P'){
                            a='PP1';
                            b=node.pv1_power;
                            c='W';
                        }
                        else if (m=='PV2_V'){
                            a='PV2';
                            b=node.pv2_voltage;
                            c='V';
                        }
                        else if (m=='PV2_C'){
                            a='PC2';
                            b=node.pv2_current;
                            c='C';
                        }
                        else if (m=='PV2_P'){
                            a='PP2';
                            b=node.pv2_power;
                            c='W';
                        }
                        else if (m=='PV3_V'){
                            a='PV3';
                            b=node.pv3_voltage;
                            c='V';
                        }
                        else if (m=='PV3_C'){
                            a='PC3';
                            b=node.pv3_current;
                            c='C';
                        }
                        else if (m=='PV3_P'){
                            a='PP3';
                            b=node.pv3_power;
                            c='W';
                        }
                        else if (m=='PV4_V'){
                            a='PV4';
                            b=node.pv4_voltage;
                            c='V';
                        }
                        else if (m=='PV4_C'){
                            a='PC4';
                            b=node.pv4_current;
                            c='C';
                        }
                        else if (m=='PV4_P'){
                            a='PP4';
                            b=node.pv4_power;
                            c='W';
                        }
                        else if (m=='PV5_V'){
                            a='PV5';
                            b=node.pv5_voltage;
                            c='V';
                        }
                        else if (m=='PV5_C'){
                            a='PC5';
                            b=node.pv5_current;
                            c='C';
                        }
                        else if (m=='PV5_P'){
                            a='PP5';
                            b=node.pv5_power;
                            c='W';
                        }
                        else if (m=='PV2_V'){
                            a='PV2';
                            b=node.pv2_voltage;
                            c='V';
                        }
                        else if (m=='PV2_C'){
                            a='PC2';
                            b=node.pv2_current;
                            c='C';
                        }
                        else if (m=='PV2_P'){
                            a='PP2';
                            b=node.pv2_power;
                            c='W';
                        }
                        else if (m=='PV6_V'){
                            a='PV6';
                            b=node.pv6_voltage;
                            c='V';
                        }
                        else if (m=='PV6_C'){
                            a='PC6';
                            b=node.pv6_current;
                            c='C';
                        }
                        else if (m=='PV6_P'){
                            a='PP6';
                            b=node.pv6_power;
                            c='W';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n );
                        if (n=='EAC'){
                            d='EAC';
                            e=node.eac_today;
                            f='';
                        }
                        else if (n=='EAC_TTL'){
                            d='ET';
                            e=node.eac_total;
                            f='';
                        }
                        else if (n=='FREQ'){
                            d='Freq';
                            e=node.frequency;
                            f='Hz';
                        }
                        else if (n=='AP'){
                            d='AP';
                            e=node.active_power;
                            f='KW';
                        }
                        else if (n=='PF'){
                            d='PF';
                            e=node.power_factor;
                            f='';
                        }
                        else if (n=='RS'){
                            d='RS';
                            e=node.voltage_rs;
                            f='V';
                        }
                        else if (n=='ST'){
                            d='ST';
                            e=node.voltage_st;
                            f='V';
                        }
                        else if (n=='TR'){
                            d='TR';
                            e=node.voltage_tr;
                            f='V';
                        }
                        else if (n=='V1'){
                            d='V1';
                            e=node.voltage1;
                            f='V';
                        }
                        else if (n=='C1'){
                            d='C1';
                            e=node.current1;
                            f='C';
                        }
                        else if (n=='P1'){
                            d='P1';
                            e=node.power1;
                            f='W';
                        }
                        else if (n=='V2'){
                            d='V2';
                            e=node.voltage2;
                            f='V';
                        }
                        else if (n=='C2'){
                            d='C2';
                            e=node.current2;
                            f='C';
                        }
                        else if (n=='P2'){
                            d='P2';
                            e=node.power2;
                            f='W';
                        }
                        else if (n=='V3'){
                            d='V3';
                            e=node.voltage3;
                            f='V';
                        }
                        else if (n=='C3'){
                            d='C3';
                            e=node.current3;
                            f='C';
                        }
                        else if (n=='P3'){
                            d='P3';
                            e=node.power3;
                            f='W';
                        }
                        else if (n=='PV1_V'){
                            d='PV1';
                            e=node.pv1_voltage;
                            f='V';
                        }
                        else if (n=='PV1_C'){
                            d='PC1';
                            e=node.pv1_current;
                            f='C';
                        }
                        else if (n=='PV1_P'){
                            d='PP1';
                            e=node.pv1_power;
                            f='W';
                        }
                        else if (n=='PV2_V'){
                            d='PV2';
                            e=node.pv2_voltage;
                            f='V';
                        }
                        else if (n=='PV2_C'){
                            d='PC2';
                            e=node.pv2_current;
                            f='C';
                        }
                        else if (n=='PV2_P'){
                            d='PP2';
                            e=node.pv2_power;
                            f='W';
                        }
                        else if (n=='PV3_V'){
                            d='PV3';
                            e=node.pv3_voltage;
                            f='V';
                        }
                        else if (n=='PV3_C'){
                            d='PC3';
                            e=node.pv3_current;
                            f='C';
                        }
                        else if (n=='PV3_P'){
                            d='PP3';
                            e=node.pv3_power;
                            f='W';
                        }
                        else if (n=='PV4_V'){
                            d='PV4';
                            e=node.pv4_voltage;
                            f='V';
                        }
                        else if (n=='PV4_C'){
                            d='PC4';
                            e=node.pv4_current;
                            f='C';
                        }
                        else if (n=='PV4_P'){
                            d='PP4';
                            e=node.pv4_power;
                            f='W';
                        }
                        else if (n=='PV5_V'){
                            d='PV5';
                            e=node.pv5_voltage;
                            f='V';
                        }
                        else if (n=='PV5_C'){
                            d='PC5';
                            e=node.pv5_current;
                            f='C';
                        }
                        else if (n=='PV5_P'){
                            d='PP5';
                            e=node.pv5_power;
                            f='W';
                        }
                        else if (n=='PV2_V'){
                            d='PV2';
                            e=node.pv2_voltage;
                            f='V';
                        }
                        else if (n=='PV2_C'){
                            d='PC2';
                            e=node.pv2_current;
                            f='C';
                        }
                        else if (n=='PV2_P'){
                            d='PP2';
                            e=node.pv2_power;
                            f='W';
                        }
                        else if (n=='PV6_V'){
                            d='PV6';
                            e=node.pv6_voltage;
                            f='V';
                        }
                        else if (n=='PV6_C'){
                            d='PC6';
                            e=node.pv6_current;
                            f='C';
                        }
                        else if (n=='PV6_P'){
                            d='PP6';
                            e=node.pv6_power;
                            f='W';
                        }
                        o=checkboxesChecked[3];
                        console.log('check',o );
                        if (o=='EAC'){
                            i='EAC';
                            j=node.eac_today;
                            k='';
                        }
                        else if (o=='EAC_TTL'){
                            i='ET';
                            j=node.eac_total;
                            k='';
                        }
                        else if (o=='FREQ'){
                            i='Freq';
                            j=node.frequency;
                            k='Hz';
                        }
                        else if (o=='AP'){
                            i='AP';
                            j=node.active_power;
                            k='KW';
                        }
                        else if (o=='PF'){
                            i='PF';
                            j=node.power_factor;
                            k='';
                        }
                        else if (o=='RS'){
                            i='RS';
                            j=node.voltage_rs;
                            k='V';
                        }
                        else if (o=='ST'){
                            i='ST';
                            j=node.voltage_st;
                            k='V';
                        }
                        else if (o=='TR'){
                            i='TR';
                            j=node.voltage_tr;
                            k='V';
                        }
                        else if (o=='V1'){
                            i='V1';
                            j=node.voltage1;
                            k='V';
                        }
                        else if (o=='C1'){
                            i='C1';
                            j=node.current1;
                            k='C';
                        }
                        else if (o=='P1'){
                            i='P1';
                            j=node.power1;
                            k='W';
                        }
                        else if (o=='V2'){
                            i='V2';
                            j=node.voltage2;
                            k='V';
                        }
                        else if (o=='C2'){
                            i='C2';
                            j=node.current2;
                            k='C';
                        }
                        else if (o=='P2'){
                            i='P2';
                            j=node.power2;
                            k='W';
                        }
                        else if (o=='V3'){
                            i='V3';
                            j=node.voltage3;
                            k='V';
                        }
                        else if (o=='C3'){
                            i='C3';
                            j=node.current3;
                            k='C';
                        }
                        else if (o=='P3'){
                            i='P3';
                            j=node.power3;
                            k='W';
                        }
                        else if (o=='PV1_V'){
                            i='PV1';
                            j=node.pv1_voltage;
                            k='V';
                        }
                        else if (o=='PV1_C'){
                            i='PC1';
                            j=node.pv1_current;
                            k='C';
                        }
                        else if (o=='PV1_P'){
                            i='PP1';
                            j=node.pv1_power;
                            k='W';
                        }
                        else if (o=='PV2_V'){
                            i='PV2';
                            j=node.pv2_voltage;
                            k='V';
                        }
                        else if (o=='PV2_C'){
                            i='PC2';
                            j=node.pv2_current;
                            k='C';
                        }
                        else if (o=='PV2_P'){
                            i='PP2';
                            j=node.pv2_power;
                            k='W';
                        }
                        else if (o=='PV3_V'){
                            i='PV3';
                            j=node.pv3_voltage;
                            k='V';
                        }
                        else if (o=='PV3_C'){
                            i='PC3';
                            j=node.pv3_current;
                            k='C';
                        }
                        else if (o=='PV3_P'){
                            i='PP3';
                            j=node.pv3_power;
                            k='W';
                        }
                        else if (o=='PV4_V'){
                            i='PV4';
                            j=node.pv4_voltage;
                            k='V';
                        }
                        else if (o=='PV4_C'){
                            i='PC4';
                            j=node.pv4_current;
                            k='C';
                        }
                        else if (o=='PV4_P'){
                            i='PP4';
                            j=node.pv4_power;
                            k='W';
                        }
                        else if (o=='PV5_V'){
                            i='PV5';
                            j=node.pv5_voltage;
                            k='V';
                        }
                        else if (o=='PV5_C'){
                            i='PC5';
                            j=node.pv5_current;
                            k='C';
                        }
                        else if (o=='PV5_P'){
                            i='PP5';
                            j=node.pv5_power;
                            k='W';
                        }
                        else if (o=='PV2_V'){
                            i='PV2';
                            j=node.pv2_voltage;
                            k='V';
                        }
                        else if (o=='PV2_C'){
                            i='PC2';
                            j=node.pv2_current;
                            k='C';
                        }
                        else if (o=='PV2_P'){
                            i='PP2';
                            j=node.pv2_power;
                            k='W';
                        }
                        else if (o=='PV6_V'){
                            i='PV6';
                            j=node.pv6_voltage;
                            k='V';
                        }
                        else if (o=='PV6_C'){
                            i='PC6';
                            j=node.pv6_current;
                            k='C';
                        }
                        else if (o=='PV6_P'){
                            i='PP6';
                            j=node.pv6_power;
                            k='W';
                        }


                            z='', c='', f='', k='' // skip setting units since coming from backend

			icon_path_prefix = '/dashboard/static/images/icon/solar/sl'
                        icon_path_suffix = '_v2.png';
                        num = 4;
                        icons = [];
                        for(iter=1; iter<=num; iter++) {
                                icons.push(icon_path_prefix + iter + icon_path_suffix);
                        }
                        colors = ['#20c997', '#dc3545', '#0dcaf0', '#ffc107'];
                        values = [y, b, e, j];

                        content = getContent('SL', nodeId, icons, colors, values);
                break;

                case "SR-AC":
                        checkboxClick('checksrac');



                        l=checkboxesChecked[0];
                        console.log('check',l );
                        if (l=='SR_TEMP'){
                            x='Temp';
                            y=node.room_temp;
                            z='°C';
                        }
                        else if (l=='TEMP_ADJ'){
                            x='TA';
                            y=node.temp_adjust;
                            z='°C';
                        }
                        else if (l=='STA_STP'){
                            x='SS';
                            y=node.start_stop_status;
                            z='';
                        }
                        else if (l=='ALM'){
                            x='AM';
                            y=node.alarm;
                            z='';
                        }
                        else if (l=='MAL'){
                            x='MC';
                            y=node.malfunction_code;
                            z='';
                        }
                        else if (l=='AC'){
                            x='AC';
                            y=node.air_con_mode_status;
                            z='';
                        }
                        else if (l=='AR_FLORT'){
                            x='AF';
                            y=node.air_flow_rate_status;
                            z='';
                        }
                        else if (l=='FLTR'){
                            x='FR';
                            y=node.filter_sign;
                            z='';
                        }
                        else if (l=='GAS'){
                            x='GP';
                            y=node.gas_total_power;
                            z='';
                        }
                        else if (l=='ELEC'){
                            x='EP';
                            y=node.elec_total_power;
                            z='';
                        }
                        else if (l=='AIR_DIR'){
                            x='AD';
                            y=node.air_direction_status;
                            z='';
                        }
                        else if (l=='THRM'){
                            x='TS';
                            y=node.forced_thermo_off_status;
                            z='';
                        }
                        else if (l=='EFF'){
                            x='EF';
                            y=node.energy_efficiency_status;
                            z='';
                        }
                        else if (l=='COMP'){
                            x='CS';
                            y=node.compressor_status;
                            z='';
                        }
                        else if (l=='FAN'){
                            x='Fan';
                            y=node.indoor_fan_status;
                            z='';
                        }
                        else if (l=='HEAT'){
                            x='Heat';
                            y=node.heater_status;
                            z='';
                        }
                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='SR_TEMP'){
                            a='Temp';
                            b=node.room_temp;
                            c='°C';
                        }
                        else if (m=='TEMP_ADJ'){
                            a='TA';
                            b=node.temp_adjust;
                            c='°C';
                        }
                        else if (m=='STA_STP'){
                            a='SS';
                            b=node.start_stop_status;
                            c='';
                        }
                        else if (m=='ALM'){
                            a='AM';
                            b=node.alarm;
                            c='';
                        }
                        else if (m=='MAL'){
                            a='MC';
                            b=node.malfunction_code;
                            c='';
                        }
                        else if (m=='AC'){
                            a='AC';
                            b=node.air_con_mode_status;
                            c='';
                        }
                        else if (m=='AR_FLORT'){
                            a='AF';
                            b=node.air_flow_rate_status;
                            c='';
                        }
                        else if (m=='FLTR'){
                            a='FR';
                            b=node.filter_sign;
                            c='';
                        }
                        else if (m=='GAS'){
                            a='GP';
                            b=node.gas_total_power;
                            c='';
                        }
                        else if (m=='ELEC'){
                            a='EP';
                            b=node.elec_total_power;
                            c='';
                        }
                        else if (m=='AIR_DIR'){
                            a='AD';
                            b=node.air_direction_status;
                            c='';
                        }
                        else if (m=='THRM'){
                            a='TS';
                            b=node.forced_thermo_off_status;
                            c='';
                        }
                        else if (m=='EFF'){
                            a='EF';
                            b=node.energy_efficiency_status;
                            c='';
                        }
                        else if (m=='COMP'){
                            a='CS';
                            b=node.compressor_status;
                            c='';
                        }
                        else if (m=='FAN'){
                            a='Fan';
                            b=node.indoor_fan_status;
                            c='';
                        }
                        else if (m=='HEAT'){
                            a='Heat';
                            b=node.heater_status;
                            c='';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n );
                        if (n=='SR_TEMP'){
                            d='Temp';
                            e=node.room_temp;
                            f='°C';
                        }
                        else if (n=='TEMP_ADJ'){
                            d='TA';
                            e=node.temp_adjust;
                            f='°C';
                        }
                        else if (n=='STA_STP'){
                            d='SS';
                            e=node.start_stop_status;
                            f='';
                        }
                        else if (n=='ALM'){
                            d='AM';
                            e=node.alarm;
                            f='';
                        }
                        else if (n=='MAL'){
                            d='MC';
                            e=node.malfunction_code;
                            f='';
                        }
                        else if (n=='AC'){
                            d='AC';
                            e=node.air_con_mode_status;
                            f='';
                        }
                        else if (n=='AR_FLORT'){
                            d='AF';
                            e=node.air_flow_rate_status;
                            f='';
                        }
                        else if (n=='FLTR'){
                            d='FR';
                            e=node.filter_sign;
                            f='';
                        }
                        else if (n=='GAS'){
                            d='GP';
                            e=node.gas_total_power;
                            f='';
                        }
                        else if (n=='ELEC'){
                            d='EP';
                            e=node.elec_total_power;
                            f='';
                        }
                        else if (n=='AIR_DIR'){
                            d='AD';
                            e=node.air_direction_status;
                            f='';
                        }
                        else if (n=='THRM'){
                            d='TS';
                            e=node.forced_thermo_off_status;
                            f='';
                        }
                        else if (n=='EFF'){
                            d='EF';
                            e=node.energy_efficiency_status;
                            f='';
                        }
                        else if (n=='COMP'){
                            d='CS';
                            e=node.compressor_status;
                            f='';
                        }
                        else if (n=='FAN'){
                            d='Fan';
                            e=node.indoor_fan_status;
                            f='';
                        }
                        else if (n=='HEAT'){
                            d='Heat';
                            e=node.heater_status;
                            f='';
                        }
                        o=checkboxesChecked[3];
                        console.log('check',o );
                        if (o=='SR_TEMP'){
                            i='Temp';
                            j=node.room_temp;
                            k='°C';
                        }
                        else if (o=='TEMP_ADJ'){
                            i='TA';
                            j=node.temp_adjust;
                            k='°C';
                        }
                        else if (o=='STA_STP'){
                            i='SS';
                            j=node.start_stop_status;
                            k='';
                        }
                        else if (o=='ALM'){
                            i='AM';
                            j=node.alarm;
                            k='';
                        }
                        else if (o=='MAL'){
                            i='MC';
                            j=node.malfunction_code;
                            k='';
                        }
                        else if (o=='AC'){
                            i='AC';
                            j=node.air_con_mode_status;
                            k='';
                        }
                        else if (o=='AR_FLORT'){
                            i='AF';
                            j=node.air_flow_rate_status;
                            k='';
                        }
                        else if (o=='FLTR'){
                            i='FR';
                            j=node.filter_sign;
                            k='';
                        }
                        else if (o=='GAS'){
                            i='GP';
                            j=node.gas_total_power;
                            k='';
                        }
                        else if (o=='ELEC'){
                            i='EP';
                            j=node.elec_total_power;
                            k='';
                        }
                        else if (o=='AIR_DIR'){
                            i='AD';
                            j=node.air_direction_status;
                            k='';
                        }
                        else if (o=='THRM'){
                            i='TS';
                            j=node.forced_thermo_off_status;
                            k='';
                        }
                        else if (o=='EFF'){
                            i='EF';
                            j=node.energy_efficiency_status;
                            k='';
                        }
                        else if (o=='COMP'){
                            i='CS';
                            j=node.compressor_status;
                            k='';
                        }
                        else if (o=='FAN'){
                            i='Fan';
                            j=node.indoor_fan_status;
                            k='';
                        }
                        else if (o=='HEAT'){
                            i='Heat';
                            j=node.heater_status;
                            k='';
                        }


                            z='', c='', f='', k='' // skip setting units since coming from backend

			icon_path_prefix = '/dashboard/static/images/icon/smartroom/07_Smart-Room-AC'
                        icon_path_suffix = '.png';
                        num = 4;
                        icons = [];
                        for(iter=1; iter<=num; iter++) {
				if(iter == 1) icons.push(icon_path_prefix + icon_path_suffix);
				else icons.push(icon_path_prefix + iter + icon_path_suffix);
                        }
                        colors = ['#20c997', '#dc3545', '#0dcaf0', '#ffc107'];
                        values = [y, b, e, j];

                        content = getContent('SR-AC', nodeId, icons, colors, values);
                break;

                case "SR-EM":
                        checkboxClick('checksrem');




                        l=checkboxesChecked[0];
                        console.log('check',l );
                        if (l=='EM_ENG'){
                            x='EG';
                            y=node.energy;
                            z='KJ';
                        }
                        else if (l=='EM_PWR'){
                            x='PR';
                            y=node.power;
                            z='KW';
                        }
                        else if (l=='EM_CURR'){
                            x='CT';
                            y=node.current;
                            z='A';
                        }
                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='EM_ENG'){
                            a='EG';
                            b=node.energy;
                            c='KJ';
                        }
                        else if (m=='EM_PWR'){
                            a='PR';
                            b=node.power;
                            c='KW';
                        }
                        else if (m=='EM_CURR'){
                            a='CT';
                            b=node.current;
                            c='A';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n );
                        if (n=='EM_ENG'){
                            d='EG';
                            e=node.energy;
                            f='KJ';
                        }
                        else if (n=='EM_PWR'){
                            d='PR';
                            e=node.power;
                            f='KW';
                        }
                        else if (n=='EM_CURR'){
                            d='CT';
                            e=node.current;
                            f='A';
                        }

                        z='', c='', f='', k='' // skip setting units since coming from backend

			icon_path_prefix = '/dashboard/static/images/icon/smartroom/09_Smart-Room-Energy-Meter'
                        icon_path_suffix = '.png';
                        num = 3;
                        icons = [];
                        for(iter=1; iter<=num; iter++) {
				if(iter == 1) icons.push(icon_path_prefix + icon_path_suffix);
				else icons.push(icon_path_prefix + iter + icon_path_suffix);
                        }
                        colors = ['#20c997', '#dc3545', '#0dcaf0'];
                        values = [y, b, e];

                        content = getContent('SR-EM', nodeId, icons, colors, values);
                break;

                case "SR-AQ":
                        checkboxClick('checksraq');




                        l=checkboxesChecked[0];
                        console.log('check',l );
                        if (l=='CO2'){
                            x='CO2';
                            y=node.co2;
                            z='ppm';
                        }
                        else if (l=='AQ_TEMP'){
                            x='Temp';
                            y=node.temperature;
                            z='°C';
                        }
                        else if (l=='AQ_RHUM'){
                            x='rHum';
                            y=node.relative_humidity;
                            z='ppm';
                        }
                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='CO2'){
                            a='CO2';
                            b=node.co2;
                            c='ppm';
                        }
                        else if (m=='AQ_TEMP'){
                            a='Temp';
                            b=node.temperature;
                            c='°C';
                        }
                        else if (m=='AQ_RHUM'){
                            a='rHUm';
                            b=node.relative_humidity;
                            c='ppm';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n );
                        if (n=='CO2'){
                            d='CO2';
                            e=node.co2;
                            f='ppm';
                        }
                        else if (n=='AQ_TEMP'){
                            d='Temp';
                            e=node.temperature;
                            f='°C';
                        }
                        else if (n=='AQ_RHUM'){
                            d='rHUm';
                            e=node.relative_humidity;
                            f='ppm';
                        }

                        z='', c='', f='', k='' // skip setting units since coming from backend

			icon_path_prefix = '/dashboard/static/images/icon/smartroom/08_Smart-Room-Air-Quality'
                        icon_path_suffix = '.png';
                        num = 3;
                        icons = [];
                        for(iter=1; iter<=num; iter++) {
                                if(iter == 1) icons.push(icon_path_prefix + icon_path_suffix);
                                else icons.push(icon_path_prefix + iter + icon_path_suffix);
                        }
                        colors = ['#20c997', '#dc3545', '#0dcaf0'];
                        values = [y, b, e];

                        content = getContent('SR-AQ', nodeId, icons, colors, values);
                break;

                case "EM":
                        checkboxClick('checkem');
                        l=checkboxesChecked[0];
                        console.log('check',l );
                        if (l=='RS'){
                            x='RS';
                            y=node.rssi;
                            z='';
                        }
                        else if (l=='R_CURR'){
                            x='RC';
                            y=node.r_current;
                            z='A';
                        }
                        else if (l=='Y_CURR'){
                            x='YC';
                            y=node.y_current;
                            z='A';
                        }
                        else if (l=='B_CURR'){
                            x='BC';
                            y=node.b_current;
                            z='A';
                        }
                        else if (l=='R_VOLT'){
                            x='RV';
                            y=node.r_voltage;
                            z='V';
                        }
                        else if (l=='Y_VOLT'){
                            x='YV';
                            y=node.y_voltage;
                            z='V';
                        }
                        else if (l=='B_VOLT'){
                            x='BV';
                            y=node.b_voltage;
                            z='V';
                        }
                        else if (l=='EM_PF'){
                            x='PF';
                            y=node.power_factor;
                            z='';
                        }
                        else if (l=='EM_FREQ'){
                            x='Freq';
                            y=node.frequency;
                            z='Hz';
                        }
                        else if (l=='AP'){
                            x='AP';
                            y=node.apparent_power;
                            z='kW';
                        }
                        else if (l=='RP'){
                            x='RP';
                            y=node.real_power;
                            z='kW';
                        }
                        else if (l=='EC'){
                            x='EC';
                            y=node.energy_consumption;
                            z='';
                        }
                        else if (l=='LEAD'){
                            x='Lead';
                            y=node.reactive_energy_lead;
                            z='';
                        }
                        else if (l=='LAG'){
                            x='Lag';
                            y=node.reactive_energy_lag;
                            z='';
                        }
                        else if (l=='TTL_EC'){
                            x='TEC';
                            y=node.total_energy_consumption;
                            z='';
                        }
                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='RS'){
                            a='RS';
                            b=node.rssi;
                            c='';
                        }
                        else if (m=='R_CURR'){
                            a='RC';
                            b=node.r_current;
                            c='A';
                        }
                        else if (m=='Y_CURR'){
                            a='YC';
                            b=node.y_current;
                            c='A';
                        }
                        else if (m=='B_CURR'){
                            a='BC';
                            b=node.b_current;
                            c='A';
                        }
                        else if (m=='R_VOLT'){
                            a='RV';
                            b=node.r_voltage;
                            c='V';
                        }
                        else if (m=='Y_VOLT'){
                            a='YV';
                            b=node.y_voltage;
                            c='V';
                        }
                        else if (m=='B_VOLT'){
                            a='BV';
                            b=node.b_voltage;
                            c='V';
                        }
                        else if (m=='EM_PF'){
                            a='PF';
                            b=node.power_factor;
                            c='';
                        }
                        else if (m=='EM_FREQ'){
                            a='Freq';
                            b=node.frequency;
                            c='Hz';
                        }
                        else if (m=='AP'){
                            a='AP';
                            b=node.apparent_power;
                            c='kW';
                        }
                        else if (m=='RP'){
                            a='RP';
                            b=node.real_power;
                            c='kW';
                        }
                        else if (m=='EC'){
                            a='EC';
                            b=node.energy_consumption;
                            c='';
                        }
                        else if (m=='LEAD'){
                            a='Lead';
                            b=node.reactive_energy_lead;
                            c='';
                        }
                        else if (m=='LAG'){
                            a='Lag';
                            b=node.reactive_energy_lag;
                            c='';
                        }
                        else if (m=='TTL_EC'){
                            a='TEC';
                            b=node.total_energy_consumption;
                            c='';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n );
                        if (n=='RS'){
                            d='RS';
                            e=node.rssi;
                            f='';
                        }
                        else if (n=='R_CURR'){
                            d='RC';
                            e=node.r_current;
                            f='A';
                        }
                        else if (n=='Y_CURR'){
                            d='YC';
                            e=node.y_current;
                            f='A';
                        }
                        else if (n=='B_CURR'){
                            d='BC';
                            e=node.b_current;
                            f='A';
                        }
                        else if (n=='R_VOLT'){
                            d='RV';
                            e=node.r_voltage;
                            f='V';
                        }
                        else if (n=='Y_VOLT'){
                            d='YV';
                            e=node.y_voltage;
                            f='V';
                        }
                        else if (n=='B_VOLT'){
                            d='BV';
                            e=node.b_voltage;
                            f='V';
                        }
                        else if (n=='EM_PF'){
                            d='PF';
                            e=node.power_factor;
                            f='';
                        }
                        else if (n=='EM_FREQ'){
                            d='Freq';
                            e=node.frequency;
                            f='Hz';
                        }
                        else if (n=='AP'){
                            d='AP';
                            e=node.apparent_power;
                            f='kW';
                        }
                        else if (n=='RP'){
                            d='RP';
                            e=node.real_power;
                            f='kW';
                        }
                        else if (n=='EC'){
                            d='EC';
                            e=node.energy_consumption;
                            f='';
                        }
                        else if (n=='LEAD'){
                            d='Lead';
                            e=node.reactive_energy_lead;
                            f='';
                        }
                        else if (n=='LAG'){
                            d='Lag';
                            e=node.reactive_energy_lag;
                            f='';
                        }
                        else if (n=='TTL_EC'){
                            d='TEC';
                            e=node.total_energy_consumption;
                            f='';
                        }
                        o=checkboxesChecked[3];
                        console.log('check',o );
                        if (o=='RS'){
                            i='RS';
                            j=node.rssi;
                            k='';
                        }
                        else if (o=='R_CURR'){
                            i='RC';
                            j=node.r_current;
                            k='A';
                        }
                        else if (o=='Y_CURR'){
                            i='YC';
                            j=node.y_current;
                            k='A';
                        }
                        else if (o=='B_CURR'){
                            i='BC';
                            j=node.b_current;
                            k='A';
                        }
                        else if (o=='R_VOLT'){
                            i='RV';
                            j=node.r_voltage;
                            k='V';
                        }
                        else if (o=='Y_VOLT'){
                            i='YV';
                            j=node.y_voltage;
                            k='V';
                        }
                        else if (o=='B_VOLT'){
                            i='BV';
                            j=node.b_voltage;
                            k='V';
                        }
                        else if (o=='EM_PF'){
                            i='PF';
                            j=node.power_factor;
                            k='';
                        }
                        else if (o=='EM_FREQ'){
                            i='Freq';
                            j=node.frequency;
                            k='Hz';
                        }
                        else if (o=='AP'){
                            i='AP';
                            j=node.apparent_power;
                            k='kW';
                        }
                        else if (o=='RP'){
                            i='RP';
                            j=node.real_power;
                            k='kW';
                        }
                        else if (o=='EC'){
                            i='EC';
                            j=node.energy_consumption;
                            k='';
                        }
                        else if (o=='LEAD'){
                            i='Lead';
                            j=node.reactive_energy_lead;
                            k='';
                        }
                        else if (o=='LAG'){
                            i='Lag';
                            j=node.reactive_energy_lag;
                            k='';
                        }
                        else if (o=='TTL_EC'){
                            i='TEC';
                            j=node.total_energy_consumption;
                            k='';
                        }

                        z='', c='', f='', k='' // skip setting units since coming from backend

			icon_path_prefix = '/dashboard/static/images/icon/energy/04_Energy-Monitoring'
                        icon_path_suffix = '.png';
                        num = 4;
                        icons = [];
                        for(iter=1; iter<=num; iter++) {
                                if(iter == 4) icons.push(icon_path_prefix + '1' + icon_path_suffix);
                                else icons.push(icon_path_prefix + (iter+1) + icon_path_suffix);
                        }
                        colors = ['#20c997', '#0dcaf0', '#ffc107', '#dc3545'];
                        values = [y, b, e, j];

                        content = getContent('EM', nodeId, icons, colors, values);
                break;



                case "CM":
                        checkboxClick('checkcm');




                        l=checkboxesChecked[0];
                        console.log('check',l );
                        if (l=='CPC'){
                            x='CPC';
                            y=node.current_people_count;
                            z='';
                        }
                        else if (l=='SDV'){
                            x='SDV';
                            y=node.no_of_safe_distance_violations;
                            z='';
                        }
                        else if (l=='MASK'){
                            x='MV';
                            y=node.no_of_mask_violations;
                            z='';
                        }
                        else if (l=='SRT'){
                            x='Srt';
                            y=node.timestamp_start;
                            z='';
                        }
                        else if (l=='END'){
                            x='End';
                            y=node.timestamp_end;
                            z='';
                        }
                        m=checkboxesChecked[1];
                        console.log('check',m );
                        if (m=='CPC'){
                            a='CPC';
                            b=node.current_people_count;
                            c='';
                        }
                        else if (m=='SDV'){
                            a='SDV';
                            b=node.no_of_safe_distance_violations;
                            c='';
                        }
                        else if (m=='MASK'){
                            a='MV';
                            b=node.no_of_mask_violations;
                            c='';
                        }
                        else if (m=='SRT'){
                            a='Srt';
                            b=node.timestamp_start;
                            c='';
                        }
                        else if (m=='END'){
                            a='End';
                            b=node.timestamp_end;
                            c='';
                        }
                        n=checkboxesChecked[2];
                        console.log('check',n);
                        if (n=='CPC'){
                            d='CPC';
                            e=node.current_people_count;
                            f='';
                        }
                        else if (n=='SDV'){
                            d='SDV';
                            e=node.no_of_safe_distance_violations;
                            f='';
                        }
                        else if (n=='MASK'){
                            d='MV';
                            e=node.no_of_mask_violations;
                            f='';
                        }
                        else if (n=='SRT'){
                            d='Srt';
                            e=node.timestamp_start;
                            f='';
                        }
                        else if (n=='END'){
                            d='End';
                            e=node.timestamp_end;
                            f='';
                        }
                        o=checkboxesChecked[3];
                        console.log('check',o );
                        if (o=='CPC'){
                            i='CPC';
                            j=node.current_people_count;
                            k='';
                        }
                        else if (o=='SDV'){
                            i='SDV';
                            j=node.no_of_safe_distance_violations;
                            k='';
                        }
                        else if (o=='MASK'){
                            i='MV';
                            j=node.no_of_mask_violations;
                            k='';
                        }
                        else if (o=='SRT'){
                            i='Srt';
                            j=node.timestamp_start;
                            k='';
                        }
                        else if (o=='END'){
                            i='End';
                            j=node.timestamp_end;
                            k='';
                        }

                        z='', c='', f='', k='' // skip setting units since coming from backend
			
			icon_path_prefix = '/dashboard/static/images/icon/crowd/cm'
                        icon_path_suffix = '_v2.png';
                        num = 4;
                        icons = [];
                        for(iter=1; iter<=num; iter++) {
                                icons.push(icon_path_prefix + iter + icon_path_suffix);
                        }
                        colors = ['#0dcaf0', '#0dcaf0', '#0dcaf0', '#dc3545'];
                        values = [y, b, e, j];

                        content = getContent('CM', nodeId, icons, colors, values);

                break;

                default:
                    console.log("No vertical matched!")
                break;
            }
            console.log('CONTENT',content);
            return content;


        }


function initialize(response, type) {

            newpopupObj = {};
            for (var i = 0; i < response.length; i++) {
                console.log("name")
                console.log("name=",response[i], type)
                console.log("Content=", getPopupContent(response[i], type))
                var newpopup = L.popup({
                    closeOnClick: false,
                    autoClose: false
                }).setContent(getPopupContent(response[i], type));
                var popup2 = L.popup({
                      closeOnClick: false,
                      autoClose: false
                    }).setContent( response[i].name );
                console.log('OBJ',newpopupObj);
                newpopupObj[response[i].node_id] = newpopup;


                var customOptions = {  'width': '600', 'className' : 'popupCustom' };
                var customOptions2 = {'className': 'custom', offset: [5, 62]}

                // declare before circle
                longLabel = response[i].longitude //+ 0.00005
                console.log("Longitude Label =", longLabel)
                labelCircle = L.circle([response[i].latitude, longLabel], { color: "#orange", fillColor: "#FFA500", fillOpacity: 0.0, radius: 8.0, offset: L.point(100, -500)})
                       .bindPopup(popup2,customOptions2)
                       .addTo(map).openPopup();

               // console.log(".lat",response[i].latitude)
               circle = new L.circle([response[i].latitude, response[i].longitude], { color: "#orange", fillColor: "#FFA500", fillOpacity: 0.7, radius: 4.0 })
                       .bindPopup(newpopup,customOptions)
                       .addTo(map).openPopup();

                circle.on('mouseover', function (e) {
                    this.openPopup();
                });

                circle.on('click', function(e){
                    this.openPopup();
                });

                // not here circle_global = [];
                circle_global.push(circle);
                labelCircle_global.push(labelCircle);

            }
       }
