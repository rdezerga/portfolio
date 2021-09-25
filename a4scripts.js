var a = 0;
var b = 0;
var c = 0;
var n = 0;
var x = new Array();
var y = new Array(); 
var v = new Array();

function calculateY(a, b, c, x) {
    return a * x * x + b * x + c;
}

function calculate() {
    a = Number($('#a').val());
    b = Number($('#b').val());
    c = Number($('#c').val());
    var xmin = Number($('#xmin').val());
    var xmax = Number($('#xmax').val());
    var xt = 0;
    
    
    var i = 0;
    for (xt = xmin; xt <= xmax; xt++) {
        x[i] = xt;
        y[i] = calculateY(a, b, c, xt);
        v[i] = [x[i], y[i]];
        i++;
    }
    n = i - 1;
    
}

function displayValues()
{
   var s = "";
    
    s = "Y = " + a + " x<sup>2</sup> + ";
    s+= b + " x + " + c + "<br/><br/>";
    
    for (var i = 0; i <= n; i++)
    {
        s += " X = " + x[i] + " Y = " + y[i] + "<br/>";       
    }
    
    output.innerHTML = s;
}
$('#calculate').click( function() {
    calculate();
    displayValues();    
});