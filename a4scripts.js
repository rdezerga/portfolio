

    function calculateY(w, h) {
        return (w / (h * h)) * 703;
    }
    
    function calculate() {
        var w = Number($('#w').val());
        var h = Number($('#h').val());
        var xmin = Number($('#xmin').val());
        var xmax = Number($('#xmax').val());
        var y = 0;
        
        var s = "";
        
        s = "BMI = (" + w + " / " + h + "<sup>2</sup>)" + " * 703" + "</br></br>";
        
        for (w = xmin; w <= xmax; w++) {
            y = calculateY(w, h);
            s += "Weight: " + w + " || " + " Height: " + h + " || " + " BMI = " + " || " + y  + "</br>";
        }
        output.innerHTML = s;
    }
    
    $('#calculate').click( function() {
         calculate();  
    });
    
    



