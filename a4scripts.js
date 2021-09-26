    
    var h = 0;
    var n = 0;
    var w = 0;
    var y = new Array(); 
    var v = new Array();
    var x = new Array();

    function calculateY(h, w) {
        return (w / (h * h)) * 703;
    }
    
    function calculate() {
        w = Number($('#w').val());
        h = Number($('#h').val());
        var xmin = Number($('#xmin').val());
        var xmax = Number($('#xmax').val());
        var xt = 0;

        var i = 0;
        for (xt = xmin; xt <= xmax; xt++){
            x[i] = xt;
            y[i] = calculateY(h, xt);
            v[i] = [x[i], y[i]];
           i++;
            
        }
        n = i - 1;
        
        
    }

    function displayValues(){
        var s = "";
    
    s = "BMI = (" + w + " / " + h + "<sup>2</sup>)" + " * 703" + "</br></br>";
    
    for (var i = 0; i <= n; i++) {
        s += "Weight: " + x[i] + " || " + " Height: " + h + " || " + " BMI = " +  y[i]  + "</br>";
    }
    output.innerHTML = s;
    }
    
    function plotValues()
{
   calculate();
   chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: 'Body Mass Index',
                x: -20 //center
            },
            xAxis: {
                title: {
                    text: 'Weight'
                }
            },
            yAxis: {
                title: {
                    text: 'BMI'
                }   
            }, 
       
       plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    }
                }
            },
       
       series: [{
                name: 'BMI',
                color: 'rgba(223, 83, 83, .5)',
                data: v
       }]                
   })      
}

    $('#calculate').click( function() {
         calculate(); 
         displayValues(); 
    });
    $('#plot').click( function() {
        calculate();
        plotValues();
    })
    
    



