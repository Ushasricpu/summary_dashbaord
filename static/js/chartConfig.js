const chartConfig = ({ graphData }) => {
    var getColor = (idx) => {
        var colors = ['#00af91','#f58634', '#007965', '#ffcc29', '#6930c3', '#ec4646', '#c0e218', '#91091e']
        return colors[idx];
    };

    var getRandomColor = () => {
        return '#00af91';
    };

    displayNames = {
        'aqi': 'AQI',
        'no2': 'NO2 &micro;g/m3',
        'nh3': 'NH3 &micro;g/m3',
        'co': 'CO &micro;g/m3',
        'temperature': 'Temperature C',
        'humidity': 'Humidity %',
        'pm25': 'PM 2.5 &micro;g/m3',
        'pm10': 'PM 10 &micro;g/m3',
    }
    colors = {
        'aqi': '#00af91',
        'no2': '#f58634',
        'nh3': '#007965',
        'co': '#ffcc29',
        'temperature': '#ec4646',
        'humidity': '#c0e218',
        'pm25': '#91091e',
        'pm10': '#6930c3',
    }
    datasets = []
    // console.log(graphData)
    for(key in graphData){
        // console.log(displayNames[key])
        if(key != 'label' && key != 'tooltiplabel' && key != 'title'){
            datasets.push({
                label: displayNames[key],
                data: graphData[key],
                fill:false,
                borderColor: colors[key],
            })
        }
    }
    return {
      type: "line",
      data: {
        labels: graphData.label,
        datasets: datasets,
        },
        options: {
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    fontSize: 14,
                }
            },
            layout: {
                padding: {
                    left: 25,
                    right: 25,
                    top: 5,
                    bottom: 5
                },
            },
            scales:{
                yAxes:[{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            min:0
                        }
                    }]
            },
            hover: {
                mode: 'index',
                intersect: false,
            },
            tooltips: {
                intersect: false,
                callbacks: {
                    title: (tooltipItem, data) => {
                        return graphData.tooltiplabel[tooltipItem[0].index];
                    },
                }
            },

            legendCallback: (chart) => {
                // console.log("Working");
                const renderLabels = (chart) => {
                    const { data } = chart;
                    // console.log(data)
                    return data.datasets.map(
                        (item, idx) => {
                        // console.log(i)
                        return `<li class = "legend-li-item">
                            <div id="legend-${idx}-item" class="legend-item">
                                <span style="background-color:
                                ${item.borderColor}">
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                &nbsp;
                                <span>
                                    <input type="checkbox" class="legend-view-check" checked = true>
                                </span>
                                &nbsp;
                                ${
                                item.label &&
                                `<span class="label">${item.label}</span>`
                                }
                            </div>
                        </li>
                        `
                            }
                    )
                    .join("");
                };
                return `
                    <ul class="chartjs-legend" style="display: grid;
                    grid-template-columns: 1fr;
                    list-style-type: none;">
                    ${renderLabels(chart)}
                    </ul>`;
            },
            responsive: true,
        }
    };
};

const bindChartEvents = (myChart, containerElement) => {
    const legendCheckboxSelector = ".legend-view-check"


    const legendCheckboxes = [
        ...containerElement.querySelectorAll(legendCheckboxSelector)
    ];

    legendCheckboxes.forEach((item, i) => {
        item.addEventListener("click", (e) =>
          updateDataset(i)
        );
    });

    const updateDataset = (index) => {
        const meta = myChart.getDatasetMeta(index);
        const result = meta.hidden === true ? true : false;
        if(result == true){
            meta.hidden = false;
        }else{
            meta.hidden = true;
        }
        myChart.update();
    };
};

