var myChart = null;
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


// function daysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
// }


// function daysInYear(year) {
//     return ((year % 4 === 0 && year % 100 > 0) || year % 400 == 0) ? 366 : 365;
// }


function convertDateToRangeBlock(date, intervalSize) {
    return new Date(Math.floor((date.getTime() + 77.5 * 60 * 60 * 1000) / intervalSize) * intervalSize - 77.5 * 60 * 60 * 1000)
}


const COLORS = [
    { borderColor: '#FB8604', backgroundColor: '#FDB768' }, // red
    { borderColor: '#FDED2A', backgroundColor: '#FEF590' }, // orange
    { borderColor: '#7FBD32', backgroundColor: '#B0DC7A' }, // yellow
    { borderColor: '#1258DC', backgroundColor: '#6395F2' }, // green
    { borderColor: '#700CBC', backgroundColor: '#A33AF2' }, // blue
    { borderColor: '#EA202C', backgroundColor: '#F37C84' }, // purple

    { borderColor: '#FE2712', backgroundColor: '#FE8176' }, // red
    { borderColor: '#FB9902', backgroundColor: '#FDC168' }, // orange
    { borderColor: '#FEFE33', backgroundColor: '#FEFE9A' }, // yellow
    { borderColor: '#66B032', backgroundColor: '#9BD770' }, // green
    { borderColor: '#0247FE', backgroundColor: '#678FFE' }, // blue
    { borderColor: '#8601AF', backgroundColor: '#C91BFE' }, // purple

    { borderColor: '#FD3A0F', backgroundColor: '#FE8F77' }, // red
    { borderColor: '#FBA90A', backgroundColor: '#FDCD6D' }, // orange
    { borderColor: '#E4F132', backgroundColor: '#F1F791' }, // yellow
    { borderColor: '#559E54', backgroundColor: '#92C591' }, // green
    { borderColor: '#183BF0', backgroundColor: '#798EF6' }, // blue
    { borderColor: '#9A0794', backgroundColor: '#F415ED' }, // purple

    { borderColor: '#FD4D0C', backgroundColor: '#FE9772' }, // red
    { borderColor: '#FCBA12', backgroundColor: '#FED777' }, // orange
    { borderColor: '#CBE432', backgroundColor: '#E3F08E' }, // yellow
    { borderColor: '#448D76', backgroundColor: '#79BEA8' }, // green
    { borderColor: '#2E2FE3', backgroundColor: '#8A8AEF' }, // blue
    { borderColor: '#AE0D7A', backgroundColor: '#F033B4' }, // purple

    { borderColor: '#FC600A', backgroundColor: '#FE9F6D' }, // red
    { borderColor: '#FCCB1A', backgroundColor: '#FDE281' }, // orange
    { borderColor: '#B2D732', backgroundColor: '#D3E788' }, // yellow
    { borderColor: '#347B98', backgroundColor: '#67AFCB' }, // green
    { borderColor: '#4424D6', backgroundColor: '#8C78E8' }, // blue
    { borderColor: '#C21460', backgroundColor: '#ED5094' }, // purple

    { borderColor: '#FC7307', backgroundColor: '#FEAB6D' }, // red
    { borderColor: '#FDDC22', backgroundColor: '#FEEC86' }, // orange
    { borderColor: '#98CA32', backgroundColor: '#C0DF81' }, // yellow
    { borderColor: '#236AB9', backgroundColor: '#609CE1' }, // green
    { borderColor: '#5A18C9', backgroundColor: '#905BEC' }, // blue
    { borderColor: '#D61A46', backgroundColor: '#EC6988' }, // purple
]


// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


function updateContext() {
    console.log("Function: updateContext");
    var data = [];
    for (var i = 0; i < myChart.data.datasets.length; i++) {
        for (var j = 0; j < myChart.data.datasets[i].data.length; j++) {
            data.push(myChart.data.datasets[i].data[j]);
        }
    }
    data = data.sort(function (a, b) {
        return a.rgx.getTime() - b.rgx.getTime();
    });
    console.log("data:", data);
    var context = [];
    for (var i = 0; i < data.length; i++) {
        if (context.length == 0 || data[i].rgx.getTime() != context[context.length - 1].rgx.getTime()) {
            context.push({
                count: data[i].count,
                rgx: data[i].rgx,
                xsum: data[i].xsum,
                ysum: data[i].ysum,
                ymin: data[i].ymin,
                ymax: data[i].ymax,
            });
        }
        else {
            context[context.length - 1].count += data[i].count;
            context[context.length - 1].xsum += data[i].xsum;
            context[context.length - 1].ysum += data[i].ysum;
            if (context[context.length - 1].ymin > data[i].ymin) {
                context[context.length - 1].ymin = data[i].ymin;
            }
            if (context[context.length - 1].ymax < data[i].ymax) {
                context[context.length - 1].ymax = data[i].ymax;
            }
        }
    }
    console.log("context:", context);
    var data = {};
    for (var i = 0; i < selectedContext.length; i++) {
        data[selectedContext[i]] = [];
    }
    for (var i = 0; i < context.length; i++) {
        if (selectedContext.includes("avg")) {
            data["avg"].push({
                x: context[i].rgx.getTime(),
                y: context[i].ysum / context[i].count,
            });
        }
        if (selectedContext.includes("sum")) {
            data["sum"].push({
                x: context[i].rgx.getTime(),
                y: context[i].ysum,
            });
        }
        if (selectedContext.includes("min")) {
            data["min"].push({
                x: context[i].rgx.getTime(),
                y: context[i].ymin,
            });
        }
        if (selectedContext.includes("max")) {
            data["max"].push({
                x: context[i].rgx.getTime(),
                y: context[i].ymax,
            });
        }
    }
    console.log("data:", data);
    for (var i = 0; i < selectedContext.length; i++) {
        myChart.data.datasets.push({
            label: selectedContext[i].toUpperCase() + " of the Data",
            data: data[selectedContext[i]],
            backgroundColor: COLORS[myChart.data.datasets.length + i].backgroundColor,
            borderColor: COLORS[myChart.data.datasets.length + i].borderColor,
            fill: false,
        });
    }
    console.log("myChart.data.datasets:", myChart.data.datasets);
    myChart.update();
    return;
}


function generateGraph(response) {
    console.log("Function: generateGraph");
    console.log("response:", response);
    var vertical = current_selected_vertical.toUpperCase();
    var chartField = document.getElementById("chartField").value;
    var range = document.getElementById("range").value;
    var interval = document.getElementById("interval").value;
    var dataGrouping = document.getElementById("dataGrouping").value;
    var filteredResponse = [];
    for (var i = 0; i < response[current_selected_vertical].length; i++) {
        if (response[current_selected_vertical][i].type == vertical) {
            filteredResponse.push(response[current_selected_vertical][i]);
            filteredResponse[filteredResponse.length - 1].created_at = new Date(filteredResponse[filteredResponse.length - 1].created_at);
        }
    }
    filteredResponse = filteredResponse.sort(function (a, b) {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    });
    console.log("filteredResponse: ", filteredResponse);
    if (myChart != null) {
        myChart.destroy();
    }
    var data = {};
    for (var i = 0; i < selectedNodes.length; i++) {
        data[selectedNodes[i]] = [];
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
    var chartSize = maxDate.getTime() - minDate.getTime();
    var intervalSize;
    if (interval == 'minute') {
        intervalSize = 1000 * 60;
    } else if (interval == 'hour') {
        intervalSize = 1000 * 60 * 60;
    } else if (interval == 'day') {
        intervalSize = 1000 * 60 * 60 * 24;
    } else if (interval == 'week') {
        intervalSize = 1000 * 60 * 60 * 24 * 7;
    } else if (interval == 'month') {
        intervalSize = 1000 * 60 * 60 * 24 * 28;
    }
    var currDate = convertDateToRangeBlock(minDate, intervalSize);
    console.log("currDate:", currDate);
    console.log("chartSize:", chartSize);
    console.log("intervalSize:", intervalSize);
    for (var i = 0; i < filteredResponse.length; i++) {
        while (filteredResponse[i].created_at - currDate >= intervalSize) {
            currDate = new Date(currDate.getTime() + intervalSize);
        }
        if (data[filteredResponse[i].node_id].length == 0 || convertDateToRangeBlock(filteredResponse[i].created_at, intervalSize).getTime() != data[filteredResponse[i].node_id][data[filteredResponse[i].node_id].length - 1].rgx.getTime()) {
            data[filteredResponse[i].node_id].push({
                count: 1,
                rgx: currDate,
                xsum: filteredResponse[i].created_at.getTime(),
                ysum: filteredResponse[i][chartField],
                ymin: filteredResponse[i][chartField],
                ymax: filteredResponse[i][chartField],
            });
        } else {
            data[filteredResponse[i].node_id][data[filteredResponse[i].node_id].length - 1].count += 1;
            data[filteredResponse[i].node_id][data[filteredResponse[i].node_id].length - 1].xsum += filteredResponse[i].created_at.getTime();
            data[filteredResponse[i].node_id][data[filteredResponse[i].node_id].length - 1].ysum += filteredResponse[i][chartField];
            if (data[filteredResponse[i].node_id][data[filteredResponse[i].node_id].length - 1].ymin > filteredResponse[i][chartField]) {
                data[filteredResponse[i].node_id][data[filteredResponse[i].node_id].length - 1].ymin = filteredResponse[i][chartField];
            }
            if (data[filteredResponse[i].node_id][data[filteredResponse[i].node_id].length - 1].ymax < filteredResponse[i][chartField]) {
                data[filteredResponse[i].node_id][data[filteredResponse[i].node_id].length - 1].ymax = filteredResponse[i][chartField];
            }
        }
    }
    for (var i = 0; i < selectedNodes.length; i++) {
        for (var j = 0; j < data[selectedNodes[i]].length; j++) {
            data[selectedNodes[i]][j].x = data[selectedNodes[i]][j].rgx.getTime();
            if (dataGrouping == "avg") {
                data[selectedNodes[i]][j].y = data[selectedNodes[i]][j].ysum / data[selectedNodes[i]][j].count;
            } else if (dataGrouping == "sum") {
                data[selectedNodes[i]][j].y = data[selectedNodes[i]][j].ysum;
            } else if (dataGrouping == "min") {
                data[selectedNodes[i]][j].y = data[selectedNodes[i]][j].ymin;
            } else if (dataGrouping == "max") {
                data[selectedNodes[i]][j].y = data[selectedNodes[i]][j].ymax;
            }
        }
    }
    console.log("data:", data);
    const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
    var datasets = [];
    for (var i = 0; i < selectedNodes.length; i++) {
        datasets.push({
            label: selectedNodes[i],
            data: data[selectedNodes[i]],
            backgroundColor: COLORS[i].backgroundColor,
            borderColor: COLORS[i].borderColor,
            segment: {
                borderDash: ctx => skipped(ctx, [6, 6]),
            },
            fill: false,
        });
    }
    console.log("datasets:", datasets);
    const options = {
        responsive: true,
        elements: {
            point: {
                radius: 5,
            },
            line: {
                tension: 0,
            },
        },
        hover: {}, // CHANGE
        legend: {
            display: true,
            position: 'bottom',
            align: 'center',
            labels: {
                fontStyle: 'bold',
            },
        },
        title: {
            display: false,
            position: 'top',
            fontSize: 20,
            text: vertical,
        },
        tooltips: {
            enabled: true,
            mode: 'nearest',
            intersect: false,
        },
        scales: {
            xAxes: [{
                display: true,
                type: 'time',
                distribution: 'linear',
                bounds: 'data',
                ticks: {
                    source: 'auto',
                    major: {
                        enabled: true,
                        fontSize: 14,
                        fontStyle: 'bold',
                    },
                },
                time: {
                    isoWeekday: false,
                    round: 'minute',
                    tooltipFormat: (range=="day" || range == "week")?'MMM D h:mm a':'MMM D',
                    unit: interval,
                    stepSize: 1,
                    minUnit: 'minute',
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Date/Time',
                    fontSize: 18,
                    fontStyle: 'bold',
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: chartField,
                    fontSize: 18,
                    fontStyle: 'bold',
                },
                ticks: {
                    beginAtZero: false,
                    callback: function (value, index, values) {
                        return value.toPrecision(3) + ' unit';
                    }, // UNIT VALUES
                },
            }],
        },
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy',
                    rangeMin: {
                        x: null,
                        y: null,
                    },
                    rangeMax: {
                        x: null,
                        y: null,
                    },
                    speed: 20,
                    threshold: 10,
                    onPan: function ({ chart }) { },
                    onPanComplete: function ({ chart }) { },
                },
                zoom: {
                    enabled: true,
                    drag: false,
                    mode: 'xy',
                    rangeMin: {
                        x: null,
                        y: null,
                    },
                    rangeMax: {
                        x: null,
                        y: null,
                    },
                    speed: 0.1,
                    threshold: 2,
                    sensitivity: 3,
                    onZoom: function ({ chart }) { },
                    onZoomComplete: function ({ chart }) { },
                },
            }
        }
    };
    const ctx = document.getElementById('myChart');
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: datasets,
        },
        options: options,
    });
    updateContext();
    console.log("myChart:", myChart);
    return;
}

