document.getElementById('assignButton').addEventListener('click', function() {
                
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('ogretimelemaniata');
    xElement.classList.remove('gosterme');
});
document.getElementById('assignButton2').addEventListener('click', function() {
    
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('dersListesi');
    xElement.classList.remove('gosterme');
});
document.getElementById('assignButton3').addEventListener('click', function() {
    
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('programciktisiata');
    xElement.classList.remove('gosterme');
});
document.getElementById('assignButton4').addEventListener('click', function() {
    
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('programciktilari');
    xElement.classList.remove('gosterme');
});