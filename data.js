$(function() {
//Highcharts with mySQL and PHP - Ajax101.com

var DateTime = [];
var roomTemperature = [];
var switch1 = true;
$.get('values.php', function(data) {

data = data.split('/');
for (var i in data) {
if (switch1 == true) {
DateTime.push(data[i]);
switch1 = false;
} else {
roomTemperature.push(parseFloat(data[i]));
switch1 = true;
}

}
DateTime.pop();

$('#chart').highcharts({
chart : {
type : 'spline'
},
title : {
text : 'Kamertemperatuur'
},
subtitle : {
text : 'binnenkort meer data'
},
xAxis : {
title : {
text : 'Datum & Tijd'
},
categories : DateTime
},
yAxis : {
title : {
text : 'Graden'
},
labels : {
formatter : function() {
return this.value + ' graden'
}
}
},
tooltip : {
crosshairs : true,
shared : true,
valueSuffix : ''
},
plotOptions : {
spline : {
marker : {
radius : 4,
lineColor : '#666666',
lineWidth : 0.5
}
}
},
series : [{

name : 'Temperatuur',
data : roomTemperature
}]
});
});
});

