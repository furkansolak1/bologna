document.getElementById('assignbutton').addEventListener('click', function() {
                
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('ciktilar');
    xElement.classList.remove('gosterme');
});
document.getElementById('assignbutton1').addEventListener('click', function() {
                
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('dersler');
    xElement.classList.remove('gosterme');
});
